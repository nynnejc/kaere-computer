import fs from "fs";
import matter from "gray-matter";
import { NextPage } from "next";
import Link from "next/link";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Post from "../models/posts";

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/data/posts`);

  const posts: Array<Post> = files.map((fileName) => {
    const file = fs.readFileSync(`data/posts/${fileName}`).toString();
    const { data, content } = matter(file);
    const frontmatter = { title: data.title };

    return {
      slug: fileName.replace(".md", ".html"),
      content: content,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

type HomeProps = {
  posts: Array<Post>;
};

const Home: NextPage<HomeProps> = ({ posts }: HomeProps) => {
  const [active, setActive] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row min-h-screen bg-lilac_kc selection:bg-pink-300">
      <div className="sm:order-1">
        <Navbar />
      </div>
      <div className="flex flex-grow">
        <main className="ml-2 mt-0 sm:order-2">
          <h1 className="mb-8 mt-4">Kære Computer</h1>
          <h4 className="custom-font-dauphine">
            Infrequent newsletter about tech.{" "}
            <Link
              href="https://buttondown.email/kaerecomputer"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration font-mono text-red_kc hover:linkunderline"
            >
              Sign up
            </Link>
          </h4>
          <div className="ml-20 mt-4">
            <div className="font-bold">
              <h3>PREVIOUS ENTRIES</h3>
            </div>
            {posts
              .slice(0)
              .reverse()
              .map((post, idx) => (
                <Link href={`/posts/${post.slug}`} key={idx} passHref>
                  <div className="underline decoration w-max py-2 font-mono text-red_kc hover:linkunderline">
                    <div className="text-2xl">{post.frontmatter.title}</div>
                  </div>
                </Link>
              ))}
          </div>
        </main>
      </div>

      <footer className="text-right mr-4 sm:mt-auto sm:flex-0 visible sm:invisible place-content-end">
        <div>Nynne Just Christoffersen © {new Date().getFullYear()}</div>
      </footer>
    </div>
  );
};

export default Home;
