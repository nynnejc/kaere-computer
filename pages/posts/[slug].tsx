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
    <div className="flex items-center justify-between mt-10 ml-2 mr-8">
      {prevPost ? (
        <Link href={`/posts/${prevPost.slug}`} legacyBehavior>
          <a className="inline-block bg-white border border-black px-3 py-1 text-sm">
            Previous post
          </a>
        </Link>
      ) : (
        <span />
      )}
      {nextPost ? (
        <Link href={`/posts/${nextPost.slug}`} legacyBehavior>
          <a className="inline-block bg-white border border-black px-3 py-1 text-sm">
            Next post
          </a>
        </Link>
      ) : (
        <span />
      )}
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row min-h-screen selection:bg-pink-300 mb-8 ml-6">
      <div className="lg:order-2">
        <Navbar />
      </div>

      <main className="grow lg:order-1">
        <h1 className="mb-8 mt-4 text-6xl">
          <a
            href="/index.html"
            className="!text-black !no-underline visited:!text-black hover:!text-black hover:!no-underline"
          >
            Kære Computer
          </a>
        </h1>
        <article>
          <h4 className="ml-2 custom-font-dauphine hover:text-red_kc text-3xl">
            {frontmatter.title} — {frontmatter.date}
          </h4>

          <div className="ml-6 lg:ml-20 w-full lg:w-3/5 mr-8">
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
