import React from "react";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <body className="flex flex-col sm:flex-row min-h-screen  bg-powder_kc selection:bg-pink-300">
      <div className="sm:order-2">
        <Navbar />
      </div>
      <main className="flex-grow sm:order-1">
        <div className="custom-font-dauphine leading-10 ml-2 w-5/6 my-4 ">
          <h1>
            Hi my name is Nynne, I&apos;m a Copenhagen based
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
            {" "}, called Kære Computer. Find me on{" "}
            <a
              href="https://github.com/nynnejc"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration font-mono text-red_kc hover:linkunderline"
            >Github</a>
            {" "}or see you in{" "}
            <a
              href="https://helvede.net/@nynne"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration font-mono text-red_kc hover:linkunderline"
            >
              hell
            </a>
            .
          </h1>
        </div>
      </main>
    </body>
  );
}
