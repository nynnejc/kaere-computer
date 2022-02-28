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
          <h1 className="hover:text-blueviolet">
            Softer Intro to Creative Coding
          </h1>

          <div className="pt-16">
            <p>
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
              experience with programming.
            </p>
          </div>

          <div className="pt-6">
            <div className="py-4">
              <h3>Step 1: Setup for p5.js</h3>
            </div>
            <p>
              p5.js is a JavaScript library made for creative coding, made
              specifically to be beginner-friendly for people new to
              programming, artists, designers, educators. It is made to be
              beginner-friendly, while also fun for more advanced programmers to
              play with.
            </p>
            <div className="py-4">
              <p>
                One of the htings that make p5.js beginner-friendly is that is
                has a really nice coding editor that you can find right in your
                browser.No need to install lots of things to your device.
                Navigate to the{" "}
                <a
                  href="https://p5js.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  p5.js web editor
                </a>{" "}
                and make sure to click 'sign up button'. Now you should see something like this:
              </p>
            </div>
            <img
              src="https://happycoding.io/tutorials/p5js/images/welcome-to-coding-1.png"
              alt="p5.js web editor"
              width={500}
              height={500}
            />
          </div>

          <div className="pt-6">
            <div className="py-4">
              <h3>Step 2: Make Your First Sketch</h3>
            </div>

            <div>
              <p>
                In the editor you should see the following code:
              </p>
            </div>

            <div className="bg-violetblack text-white p-4 my-4 ">
              <code className="selection:bg-barbie">
                {`function setup() {`}
                <br className="selection:bg-barbie" />
                {`createCanvas(400, 400);`}
                <br className="selection:bg-barbie" />
                {`}`}
                <br className="selection:bg-barbie" />
                {`function draw() {`}
                <br className="selection:bg-barbie" />
                {`background(220);`}
                <br className="selection:bg-barbie" />
                {`}`}
              </code>
            </div>

            <div>
              <p>
                Let's unpack what we are seeing here. We have two functions <b>setup()</b> and <b>draw()</b>.
              </p>
            </div>



          </div>

          <div className="my-20">
            <p>
              Thanks for following along! If you&apos;d like to dive deeper into
              p5.js, check out the Creative Coding section in my&nbsp;
              <Link href="/library">
                <a>Resource Library</a>
              </Link>
              .
            </p>
          </div>
        </div>
      </main>
      <footer className=" text-right mr-4 md:mr-10 lg:mr-10">
        <p>Nynne Just Christoffersen © {new Date().getFullYear()}</p>
      </footer>
    </body>
  );
}
