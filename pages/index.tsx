import fs from "fs";
import matter from "gray-matter";
import { NextPage } from "next";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
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
  const signupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = signupRef.current;
    if (!container) return;
    if (container.querySelector("script[data-ghost-signup='true']")) return;

    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/ghost/signup-form@~0.3/umd/signup-form.min.js";
    script.async = true;
    script.dataset.ghostSignup = "true";
    script.setAttribute("data-button-color", "#FFB3D9");
    script.setAttribute("data-button-text-color", "#000000");
    script.setAttribute("data-site", "https://newsletter.kaerecomputer.dk/");
    script.setAttribute("data-locale", "en");
    container.appendChild(script);
  }, []);

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

          <div
            ref={signupRef}
            className="ml-4 pt-6 pb-6 sm:ml-20 mt-2 ghost-signup"
            style={{
              minHeight: "58px",
              maxWidth: "440px",
              width: "100%",
            }}
          />

          <div className="ml-4 sm:ml-20 mt-4">
            <div className="font-bold">
              <h3 className="text-base sm:text-lg md:text-2xl">
                PREVIOUS ENTRIES
              </h3>
            </div>
            {posts
              .slice(0)
              .reverse()
              .map((post, idx) => (
                <Link href={`/posts/${post.slug}`} key={idx} passHref>
                  <div className="underline decoration w-max py-2 font-mono hover:linkunderline">
                    <div className="text-sm sm:text-base md:text-xl">
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
