/* eslint-disable @next/next/no-img-element */
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
          </div>
          <p>
            p5.js is a JavaScript library made for creative coding, made
            specifically to be beginner-friendly for people new to programming,
            artists, designers, educators. It is made to be beginner-friendly,
            while also fun for more advanced programmers to play with.
          </p>
          <div className="py-4">
            <p>
              One of the things that make p5.js beginner-friendly is that is has
              a really nice coding editor that you can find right in your
              browser.No need to install lots of things to your device. Navigate
              to the
              <a
                href="https://p5js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                p5.js web editor{" "}
              </a>
              and make sure to click sign up button. Now you should see
              something like this:
            </p>
          </div>

          <div className="py-4">
            <img
              src="https://happycoding.io/tutorials/p5js/images/welcome-to-coding-1.png"
              alt="p5.js web editor"
              width={500}
              height={500}
            />
          </div>

          <div>
            <p>
              As you can se we have a view with two different panes and above it
              a play button with the triangle. In the left pane, you can write
              code, and you will see it comes with a few lines of code already
              written. In the right pane, you see something like a piece of
              paper. Everything we draw will appear on it!
            </p>
          </div>

          <div className="py-4">
            <p>In the editor you should see the following code:</p>
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

          <div className="py-4">
            <p>
              Let us unpack what we are seeing here. When you run the code you
              see the result in the preview section on the right and so far all
              this code does is create a drawing canvas and give it a grey
              background.
            </p>
          </div>

          <div className="pt-6">
            <div className="py-4">
              <h3>Step 2: Make Your First Sketch</h3>
            </div>
          </div>

          <div className="py-4">
            <p>
              Now we want to create our first drawing on the screen, a circle!
            </p>
          </div>

          <iframe
            id="p5.js web editor embed"
            title="p5.js web editor embed"
            width="800"
            height="600"
            src="https://editor.p5js.org/"
          ></iframe>

          <div className="py-4">
            <p>
              This pane here above is actually a little embedded p5.js editor,
              which also runs your code and shows it direcly on this site! Very
              neat, but I want you to still go back to the other tab where you
              kept the standalone p5.js editor since it will save your work and
              make it easy to share.
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
              {`circle(200, 200, 300);`}
              <br className="selection:bg-barbie" />
              {`}`}
            </code>
          </div>

          <div className="py-4">
            <p>
              What we want is to add just one more line of code in our p5.js
              editor, <code>circle(200, 200, 300);</code>, which we want to make
              sure to add inside the <b>draw()</b> function. Make sure your{" "}
              <code>;</code>
              semicolons and <code>{}</code> curly brackets are all in order,
              and then click the play button again. Now you should see this:
            </p>
          </div>

          <div className="py-4">
            <img
              src="https://happycoding.io/tutorials/p5js/images/welcome-to-coding-3.png"
              alt="p5.js web editor"
              width={500}
              height={500}
            />
          </div>

          <div className="py-4">
            <p>
              When you click run, you should see that you drew your very first
              drawing, a circle with three values.
              <code>circle(x, y, d)</code>. With the parameters: <code>x</code> coordinate of
              the centre of the circle, <code>y</code> coordinate of the centre of the
              circle and d diameter of the circle.
            </p>
          </div>

          <div className="my-20">
            <p>
              Thanks for following along! If you would like to dive deeper into
              p5.js, check out the Creative Coding section in my
              <Link href="/library">
                <a> Resource Library</a>
              </Link>
              . Big thanks to Alma for helping me out with creating and teaching
              this course.
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
