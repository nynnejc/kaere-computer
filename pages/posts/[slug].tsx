import fs from "fs";
import matter from "gray-matter";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";
import Navbar from "../../components/Navbar";
import Post from "../../models/posts";

type PostNav = {
  slug: string;
  title: string;
};

type PostPageProps = Post & {
  prevPost: PostNav | null;
  nextPost: PostNav | null;
};

const PostPage: NextPage<PostPageProps> = ({
  content,
  frontmatter,
  prevPost,
  nextPost,
}: PostPageProps) => {
  const renderNav = () => (
    <div className="mt-10 flex items-center justify-between">
      {nextPost ? (
        <Link href={`/posts/${nextPost.slug}`} legacyBehavior>
          <a className="inline-block bg-white border border-black px-3 py-1 text-sm">
            Next post
          </a>
        </Link>
      ) : (
        <span />
      )}
      {prevPost ? (
        <Link href={`/posts/${prevPost.slug}`} legacyBehavior>
          <a className="inline-block bg-white border border-black px-3 py-1 text-sm">
            Previous post
          </a>
        </Link>
      ) : (
        <span />
      )}
    </div>
  );

  return (
    <div className="mb-8 flex min-h-screen w-full flex-col selection:bg-pink-300 lg:flex-row">
      <div className="lg:order-2">
        <Navbar />
      </div>

      <main className="grow w-full px-4 lg:order-1 lg:px-0">
        <h1 className="mb-8 mt-4 text-6xl lg:ml-6">
          <a
            href="/index.html"
            className="!text-black !no-underline visited:!text-black hover:!text-black hover:!no-underline"
          >
            Kære Computer
          </a>
        </h1>
        <article>
          <h4 className="custom-font-dauphine hover:text-red_kc text-3xl lg:ml-6">
            {frontmatter.title} — {frontmatter.date}
          </h4>

          <div className="w-full lg:ml-20 lg:w-3/5">
            <ReactMarkdown
              components={{
                a: ({ node, ...props }) => (
                  <a target="_blank" rel="noopener noreferrer" {...props} />
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        </article>
        {renderNav()}
      </main>
    </div>

  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(`${process.cwd()}/data/posts`);

  const paths = files.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(".md", ""),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const file = fs.readFileSync(`data/posts/${slug}.md`).toString();
  const { data, content } = matter(file);
  const files = fs.readdirSync(`${process.cwd()}/data/posts`);
  const posts = files
    .map((fileName) => {
      const postFile = fs.readFileSync(`data/posts/${fileName}`).toString();
      const { data: postData } = matter(postFile);
      const dateValue = postData.date ? new Date(postData.date).getTime() : 0;

      return {
        slug: fileName.replace(".md", ""),
        title: postData.title as string,
        dateValue,
      };
    })
    .sort((a, b) => {
      if (a.dateValue === b.dateValue) {
        return a.slug.localeCompare(b.slug);
      }
      return b.dateValue - a.dateValue;
    });
  const currentIndex = posts.findIndex((post) => post.slug === slug);
  const prevPost = currentIndex >= 0 ? posts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const parsedDate = data.date ? new Date(data.date) : null;
  const formattedDate =
    parsedDate && !Number.isNaN(parsedDate.getTime())
      ? parsedDate.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : "";

  return {
    props: {
      content,
      frontmatter: {
        title: data.title,
        date: formattedDate,
      },
      prevPost: prevPost
        ? { slug: prevPost.slug, title: prevPost.title }
        : null,
      nextPost: nextPost
        ? { slug: nextPost.slug, title: nextPost.title }
        : null,
    },
  };
}

export default PostPage;
