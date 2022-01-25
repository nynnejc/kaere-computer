import Link from "next/link";
import React from "react";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <body className="flex flex-col min-h-screen selection:bg-mineral selection:text-black">
      <div className="">
        <Navbar />
      </div>
      <main className="flex-grow mt-80 mx-10 sm:mx-14 md:mx-24 lg:mx-32">
        <div>
          <h1 className="hover:text-blue-violet">
            Softer Programming with P5.js
          </h1>
          <div className="py-10">
            <div>
              This is an intro course to programming with the P5js library made
              for the{" "}
              <a
                href="https://softer.website/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Softer Tech Conference
              </a>
              . The course is expecially made for beginners with little to no
              experience with programming. If you&apos;d like to dive deeper into
              p5.js, check out the Creative Coding section in my&nbsp;
              <Link href="/library">
                <a>Resource Library</a>
              </Link>
              .
            </div>

            <div className="pt-6">
              <a
                href="https://p5js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                p5.js is a JavaScript library&nbsp;
              </a>
              made for creative coding, made specifically to be
              beginner-friendly for people new to programming, artists,
              designers, educators.
            </div>
          </div>

          <div className="py-10">
            <div>
              <h3>Make Your First Sketch</h3>
            </div>
          </div>

          <div className="bg-violet-black text-white p-4 my-4 ">
            <code className="selection:bg-barbie selection:text-black">
              {`
               function myFunction() {`}
              <br className="selection:bg-barbie" />
              {`doSomething();`}
              <br className="selection:bg-barbie" />
              {`doAnotherThing();`}
              <br className="selection:bg-barbie" />
              {`}
                `}
            </code>
          </div>
        </div>
      </main>
      <footer className=" text-right mr-4 md:mr-10 lg:mr-10">
        <p>Nynne Just Christoffersen © {new Date().getFullYear()}</p>
      </footer>
    </body>
  );
}
