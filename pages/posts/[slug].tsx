import fs from "fs";
import matter from "gray-matter";
import { NextPage } from "next";
import React from "react";
import ReactMarkdown from "react-markdown";
import Navbar from "../../components/Navbar";
import Post from "../../models/posts";

const PostPage: NextPage<Post> = ({ content, frontmatter }: Post) => {
  return (
    <div className="flex flex-col sm:flex-row min-h-screen selection:bg-pink-300 mb-8 ml-6">
      <div className="sm:order-2">
        <Navbar />
      </div>

      <main className="flex-grow sm:order-1">
        <h1 className="mb-8 mt-0 ml-2">Kære Computer</h1>

        <article>
          <h4 className="ml-2 custom-font-dauphine hover:text-red_kc">
            {frontmatter.title} — {frontmatter.date}
          </h4>

          <div className="ml-20 sm:w-3/5 mr-8">
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

  return {
    props: {
      content,
      frontmatter: {
        title: data.title,
        date: data.date.toLocaleDateString("us-us", {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
      },
    },
  };
}

export default PostPage;
