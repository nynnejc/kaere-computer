import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "../../components/Navbar";

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

describe("Navbar", () => {
  it("renders primary navigation links", () => {
    render(<Navbar />);

    expect(screen.getByRole("link", { name: "NEWSLETTER" })).toHaveAttribute(
      "href",
      "/index.html"
    );
    expect(screen.getByRole("link", { name: "GUESTBOOK" })).toHaveAttribute(
      "href",
      "/guestbook"
    );
    expect(screen.getByRole("link", { name: "LIBRARY" })).toHaveAttribute(
      "href",
      "/library"
    );
    expect(screen.getByRole("link", { name: "ABOUT" })).toHaveAttribute(
      "href",
      "/about"
    );
  });
});
