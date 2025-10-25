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
      content,
      frontmatter,
    };
  });

  return {
    props: { posts },
  };
}

type HomeProps = {
  posts: Array<Post>;
};

const Home: NextPage<HomeProps> = ({ posts }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row min-h-screen bg-lilac-kc selection:bg-pink-300">
      <div className="sm:order-1">
        <Navbar />
      </div>
      <div className="flex grow">
        <main className="ml-2 mt-0 sm:order-2">
          <h1 className="mb-8 mt-4 text-6xl">
            <a
              href="/index.html"
              className="!text-black !no-underline visited:!text-black hover:!text-black hover:!no-underline"
            >
              Kære Computer
            </a>
          </h1>

          <h4 className="custom-font-dauphine text-base sm:text-lg md:text-xl">
            Infrequent newsletter about tech.
          </h4>
          <div className="mt-2 mb-6 max-w-xs ml-0">
            <form
              className="flex flex-row items-center gap-2"
              data-members-form="signup"
            >
              <input
                className="border border-gray-300 rounded px-2 py-1 text-sm w-full"
                type="email"
                placeholder="Your email"
                data-members-email
                required
              />
              <button
                type="submit"
                className="bg-pink-300 text-black px-4 py-1 rounded text-sm whitespace-nowrap hover:bg-pink-400"
              >
                Sign up
              </button>
            </form>
          </div>
          <div className="ml-4 sm:ml-20 mt-4">
            <div className="font-bold">
              <h3 className="text-base sm:text-lg md:text-xl">
                PREVIOUS ENTRIES
              </h3>
            </div>
            {posts
              .slice(0)
              .reverse()
              .map((post, idx) => (
                <Link href={`/posts/${post.slug}`} key={idx} passHref>
                  <div className="underline decoration w-max py-2 font-mono text-red-kc hover:linkunderline">
                    <div className="text-sm sm:text-base md:text-2xl">
                      {post.frontmatter.title}
                    </div>
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
