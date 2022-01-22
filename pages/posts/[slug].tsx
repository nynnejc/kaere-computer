import fs from "fs";
import matter from "gray-matter";
import { NextPage } from "next";
import React from "react";
import ReactMarkdown from "react-markdown";
import Navbar from "../../components/Navbar";
import Post from "../../models/posts";

const PostPage: NextPage<Post> = ({ content, frontmatter }: Post) => {
  return (
    <div>
      <Navbar />
      <main className="container mx-8 px-3 py-4 md:px-0">
        <article>
          <div className="hover:text-neon-pink font-mono">
            <h1>{frontmatter.title}</h1>
          </div>

          <div className="pt-16 pb-8">
            <p>{frontmatter.date}</p>
          </div>
          <div>
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </article>
      </main>
      <footer className="text-right mr-4 md:mr-10 lg:mr-10">
        <p>Nynne Just Christoffersen © {new Date().getFullYear()}</p>
      </footer>
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
