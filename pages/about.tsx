import React from "react";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <body className="flex flex-col min-h-screen bg-lilac selection:bg-pink-300">
      <Navbar />

      <main className="flex-grow mx-10 sm:mx-14 md:mx-24 lg:mx-32">
        <div>
          <div className="text-xl sm:text-3xl md:text-5xl lg:text-6xl">
            <div className="mb-14">
              Hi my name is Nynne, I&apos;m a Copenhagen based software
              developer, currently fulltime playing with LEGO bricks. For
              enquiries, contact me via{" "}
              <a
                href="mailto:nynnejc@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <em className="hover:text-barbie">email</em>
              </a>
              . I have a{" "}
              <a href="./">
                <em className="hover:text-barbie">newsletter</em>
              </a>
              . Find me on{" "}
              <a
                href="https://github.com/nynnejc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <em className="hover:text-barbie">Github </em>
              </a>
              or
              <a
                href="https://twitter.com/nynnest"
                target="_blank"
                rel="noopener noreferrer"
              >
                <em className="hover:text-barbie"> Twitter</em>
              </a>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}
