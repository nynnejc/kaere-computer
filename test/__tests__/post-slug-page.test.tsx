import fs from "fs";
import matter from "gray-matter";
import React from "react";
import { render, screen } from "@testing-library/react";
import PostPage, {
  getStaticPaths,
  getStaticProps,
} from "../../pages/posts/[slug]";

jest.mock("fs");
jest.mock("gray-matter");
jest.mock("next/link", () => {
  const React = require("react");
  return {
    __esModule: true,
    default: ({ href, children }: { href: string; children: React.ReactNode }) => {
      if (React.isValidElement(children)) {
        return React.cloneElement(children, { href });
      }
      return <a href={href}>{children}</a>;
    },
  };
});

describe("posts/[slug] page", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("builds static paths from markdown files", async () => {
    const mockedFs = fs as jest.Mocked<typeof fs>;
    mockedFs.readdirSync.mockReturnValue(["1.md", "2.md"] as any);

    await expect(getStaticPaths()).resolves.toEqual({
      paths: [{ params: { slug: "1" } }, { params: { slug: "2" } }],
      fallback: false,
    });
  });

  it("returns post content and previous/next navigation props", async () => {
    const mockedFs = fs as jest.Mocked<typeof fs>;
    const mockedMatter = matter as unknown as jest.Mock;

    mockedFs.readdirSync.mockReturnValue(["1.md", "2.md", "3.md"] as any);
    mockedFs.readFileSync.mockImplementation((path: fs.PathOrFileDescriptor) => {
      const file = String(path);
      if (file.endsWith("/1.md")) return Buffer.from("post-1");
      if (file.endsWith("/2.md")) return Buffer.from("post-2");
      if (file.endsWith("/3.md")) return Buffer.from("post-3");
      throw new Error(`unexpected path: ${file}`);
    });

    mockedMatter.mockImplementation((value: string) => {
      if (value === "post-1") {
        return {
          data: { title: "Oldest", date: "2024-06-01T12:00:00Z" },
          content: "oldest content",
        };
      }
      if (value === "post-2") {
        return {
          data: { title: "Current", date: "2024-07-01T12:00:00Z" },
          content: "current content",
        };
      }
      if (value === "post-3") {
        return {
          data: { title: "Newest", date: "2024-08-01T12:00:00Z" },
          content: "newest content",
        };
      }
      throw new Error(`unexpected matter input: ${value}`);
    });

    const expectedDate = new Date("2024-07-01T12:00:00Z").toLocaleDateString(
      "en-US",
      {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      }
    );

    await expect(
      getStaticProps({
        params: { slug: "2" },
      })
    ).resolves.toEqual({
      props: {
        content: "current content",
        frontmatter: {
          title: "Current",
          date: expectedDate,
        },
        prevPost: { slug: "1", title: "Oldest" },
        nextPost: { slug: "3", title: "Newest" },
      },
    });
  });

  it("renders markdown links as external links and shows nav buttons", () => {
    render(
      <PostPage
        content={"[Example](https://example.com)"}
        frontmatter={{ title: "Hello", date: "Monday, Jul 1, 2024" }}
        prevPost={{ slug: "1", title: "Prev" }}
        nextPost={{ slug: "3", title: "Next" }}
      />
    );

    expect(screen.getByText("Hello — Monday, Jul 1, 2024")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Previous post" })).toHaveAttribute(
      "href",
      "/posts/1"
    );
    expect(screen.getByRole("link", { name: "Next post" })).toHaveAttribute(
      "href",
      "/posts/3"
    );
    expect(screen.getByRole("link", { name: "Example" })).toHaveAttribute(
      "target",
      "_blank"
    );
    expect(screen.getByRole("link", { name: "Example" })).toHaveAttribute(
      "rel",
      "noopener noreferrer"
    );
  });
});
