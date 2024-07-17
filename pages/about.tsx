import React from "react";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <body className="flex flex-col min-h-screen  bg-powder_kc selection:bg-pink-300">
      <Navbar />

      <main className="flex-grow mt-2 pr-80">
        <div className="custom-font-dauphine">
          <h1 className="leading-relaxed">
            Hi my name is Nynne Just Christoffersen, I&apos;m a Copenhagen based
            software developer. For enquiries, contact me via{" "}
            <a
              href="mailto:nynnejc@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration font-mono text-red_kc hover:linkunderline"
            >
              email
            </a>
            . I have a{" "}
            <a
              href="./"
              className="underline decoration font-mono text-red_kc hover:linkunderline"
            >
              newsletter
            </a>
            . Find me on{" "}
            <a
              href="https://github.com/nynnejc"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration font-mono text-red_kc hover:linkunderline"
            >
              Github{" "}
            </a>
            or{" "}
            <a
              href="https://twitter.com/nynnest"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration font-mono text-red_kc hover:linkunderline"
            >
              Twitter
            </a>
            .
          </h1>
        </div>
      </main>
    </body>
  );
}
