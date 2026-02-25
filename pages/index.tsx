import fs from "fs";
import matter from "gray-matter";
import { NextPage } from "next";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Post from "../models/posts";

const GUESTBOOK_API_ENDPOINT =
  "https://82eikoh5ne.execute-api.us-east-1.amazonaws.com/prod/guestbook";
const GUESTBOOK_CACHE_KEY = "guestbook_entries_cache_v1";
const GUESTBOOK_CACHE_TTL_MS = 5 * 60 * 1000;

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/data/posts`);
  const posts: Array<Post> = files.map((fileName) => {
    const file = fs.readFileSync(`data/posts/${fileName}`).toString();
    const { data, content } = matter(file);
    const frontmatter = { title: data.title };
    return {
      slug: fileName.replace(".md", ""),
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

  useEffect(() => {
    const warmGuestbookCache = async () => {
      try {
        const existingRaw = sessionStorage.getItem(GUESTBOOK_CACHE_KEY);
        if (existingRaw) {
          const existing = JSON.parse(existingRaw);
          const isFresh =
            typeof existing?.fetchedAt === "number" &&
            Date.now() - existing.fetchedAt < GUESTBOOK_CACHE_TTL_MS &&
            Array.isArray(existing?.entries);
          if (isFresh) {
            return;
          }
        }

        const response = await fetch(GUESTBOOK_API_ENDPOINT);
        if (!response.ok) {
          return;
        }

        const data = await response.json();
        const parsedBody =
          typeof data.body === "string" ? JSON.parse(data.body) : data;
        const entries = Array.isArray(parsedBody?.entries) ? parsedBody.entries : [];
        sessionStorage.setItem(
          GUESTBOOK_CACHE_KEY,
          JSON.stringify({ fetchedAt: Date.now(), entries })
        );
      } catch {
        // Prefetch failures should stay silent and never block index rendering.
      }
    };

    if (typeof window === "undefined") {
      return;
    }

    const requestIdleCallbackFn =
      typeof window !== "undefined"
        ? (window as unknown as { requestIdleCallback?: (cb: () => void) => void })
            .requestIdleCallback
        : undefined;

    if (typeof requestIdleCallbackFn === "function") {
      requestIdleCallbackFn(() => {
        warmGuestbookCache();
      });
      return;
    }

    const timeoutId = globalThis.setTimeout(() => {
      warmGuestbookCache();
    }, 500);

    return () => globalThis.clearTimeout(timeoutId);
  }, []);

  return (
    <div className="flex w-full flex-col sm:flex-row min-h-screen bg-lilac-kc selection:bg-pink-300 overflow-x-hidden">
      <div className="sm:order-1">
        <Navbar />
      </div>
      <div className="flex grow w-full">
        <main className="mt-0 px-2 sm:px-0 sm:order-2 w-full">
          <h1 className="mb-8 mt-4 text-6xl lg:ml-6">
            <a
              href="/index.html"
              className="!text-black !no-underline visited:!text-black hover:!text-black hover:!no-underline"
            >
              Kære Computer
            </a>
          </h1>

          <h4 className="font-sans text-base sm:text-lg md:text-xl lg:ml-6">
            Infrequent newsletter about tech.
          </h4>

          <div
            ref={signupRef}
            className="pt-6 pb-6 sm:ml-20 mt-2 ghost-signup"
            style={{
              minHeight: "58px",
              width: "min(100%, 440px)",
            }}
          />

          <div className="mt-4 sm:ml-20">
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
                  <div className="underline decoration w-max py-2 font-mono">
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
