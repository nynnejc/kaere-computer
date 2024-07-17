import fs from "fs";
import matter from "gray-matter";
import { NextPage } from "next";
import React from "react";
import ReactMarkdown from "react-markdown";
import Navbar from "../../components/Navbar";
import Post from "../../models/posts";

const PostPage: NextPage<Post> = ({ content, frontmatter }: Post) => {
  return (
    <div className="flex flex-col min-h-screen selection:bg-pink-300 mb-8 ml-6">
      <Navbar />
      <h1 className="">Kære Computer</h1>

      <main className="flex-grow mt-2 py-2">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="no-scrollbar overflow-y-scroll">
            <article>
              <div className="custom-font-dauphine">
                <h4 className="hover:text-red_kc">
                  {frontmatter.title} — {frontmatter.date}
                </h4>
              </div>

              <div className="mt-10 ml-24">
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            </article>
          </div>
          <div className="no-scrollbar flex-1 overflow-y-scroll"></div>
        </div>
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
