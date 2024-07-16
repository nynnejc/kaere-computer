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
    <div className="flex flex-col min-h-screen bg-lilac_kc selection:bg-pink-300">
      <Navbar />
      <main className="flex-grow mt-2">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="no-scrollbar overflow-y-scroll ml-6">
            <h1 className="mb-8">
              Kære Computer
            </h1>
            <h4 className="custom-font-dauphine">Infrequent & honest newsletter about technology</h4>
            <h5>
              <div className="underline decoration font-mono text-red_kc hover:linkunderline">
                <Link
                  href="https://buttondown.email/kaerecomputer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sign up
                </Link>
              </div>
            </h5>
            <div className="mt-16">
              <div className="font-bold">
                <h3>Archive</h3>
              </div>

              {posts
                .slice(0)
                .reverse()
                .map((post, idx) => {
                  return (
                    <Link
                      href={`/posts/${post.slug}`}
                      key={idx}
                      passHref={true}
                    >
                      <div className="w-max py-2 font-mono text-red_kc hover:linkunderline">
                        <div className="text-2xl">{post.frontmatter.title}</div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>

          <div className="no-scrollbar flex-1 overflow-y-scroll"></div>
        </div>
      </main>
      <footer className=" text-right mr-4 md:mr-10 lg:mr-10">
        <div>Nynne Just Christoffersen © {new Date().getFullYear()}</div>
      </footer>
    </div>
  );
};

export default Home;
