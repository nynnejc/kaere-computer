import fs from "fs";
import path from "path";
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
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </article>
      </main>
    </div>
  );
};

export async function getStaticPaths() {
  const postsDir = path.join(process.cwd(), "data", "posts");
  const files = fs.readdirSync(postsDir);
  console.log("Files found in data/posts:", files);
  const paths = files.map((fileName) => ({
    params: { slug: fileName.replace(".md", "") },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), "data", "posts", `${slug}.md`);
  const file = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(file);
  const date = new Date(data.date);
  return {
    props: {
      content,
      frontmatter: {
        title: data.title,
        date: date.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
      },
    },
  };
}

export default PostPage;
