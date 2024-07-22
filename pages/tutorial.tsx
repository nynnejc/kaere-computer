/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Navbar from "../components/Navbar";

export default function Tutorial() {
  return (
    <div className="flex flex-col sm:flex-row min-h-screen bg-pistacio_kc selection:bg-pink-300">
      <div className="sm:order-2">
        <Navbar />
      </div>

      <main className="flex-grow sm:order-1">
        <h1 className="font-mono my-4 ml-2">Tutorial</h1>

        <h5 className="ml-2 custom-font-dauphine">
          Softer Intro to Creative Coding
        </h5>

        <div className="ml-20 sm:w-3/5 mr-8">
          <div className="py-4">
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
              experience with programming. With this tutorial we will be
              creating the Softer flower logo.
            </p>
          </div>

          <div className="py-6">
            <img
              src="https://d2w9rnfcy7mm78.cloudfront.net/15594976/original_ba727dc28f838204aa0fc8401c01c98a.png?1647379994?bc=0"
              alt="final softer flower logo"
              width={300}
              height={300}
            />
          </div>

          <div className="pt-6">
            <div className="py-4">
              <h3>Setup for p5.js</h3>
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
              One of the things that make p5.js beginner-friendly is that it has
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
              and make sure to click the sign up button. Now you should see
              something like this:
            </p>
          </div>

          <div className="py-4">
            <p>
              A coding editor a little bit like the equivalent to MS.Word for
              writing text, except this is where we write our code.
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
              As you can see we have a view with two different panes and above
              it a play button with the triangle. In the left pane, you can
              write code, and you will see it comes with a few lines of code
              already written. In the right pane, you see something like a piece
              of paper. Everything we draw will appear on it!
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

          <div className="pt-6">
            <div className="py-4">
              <h3>Functions: setup() and draw()</h3>
            </div>
          </div>

          <div className="py-4">
            <p>
              Let us unpack what we are seeing here. When you run the code you
              see the result in the preview section on the right and so far all
              this code does is create a drawing canvas and give it a grey
              background.
            </p>
          </div>

          <div className="py-4">
            <p>
              A <b>function</b> is a block of code that can be called again and
              again because it has a name. Always write the keyword{" "}
              <em>function</em> before the name of the function.
            </p>
          </div>

          <div className="py-4">
            <p>
              In the first example we have a function called <b>setup()</b>.
              This function is called once when the program starts and is used
              to define the screen size and background color. A little bit like
              the paper you draw on. If you want to learn more about it, you can
              read about this function in the p5.js documentation
              <a
                href="https://p5js.org/reference/#/p5/setup"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                here
              </a>
              .
            </p>
          </div>

          <div className="py-4">
            <p>
              The <b>draw()</b> function is always called right after the
              setup() function and this is where you define code that runt until
              the program is stopped again. There can only be one deaw()
              function for each sketch, and the draq() function must exist on
              order for the code to run continously. Documentation for{" "}
              <a
                href="https://p5js.org/reference/#/p5/setup"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                draw()
              </a>
              .
            </p>
          </div>

          <div className="pt-6">
            <div className="py-4">
              <h3>Make Your First Sketch</h3>
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
            width="700"
            height="600"
            className="w-full aspect-auto"
            src="https://editor.p5js.org/nynnejc/sketches/NO4qspl5m"
          ></iframe>

          <div className="py-4">
            <p>
              This pane here above is actually a little embedded p5.js editor,
              which also runs your code and shows it directly on this site! Very
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
              editor, circle(200, 200, 300);, which we want to make sure to add
              inside the draw() function. Notice the circle() function takes
              three arguments (200, 200, 300). Make sure your semicolons and
              curly brackets are all in order, and then click the play button
              again. Now you should see this:
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
              drawing, a circle with three values. circle(x, y, d). With the
              parameters: <b>x</b> coordinate of the center of the circle,{" "}
              <b>y</b> coordinate of the center of the circle and <b>d</b>{" "}
              diameter of the circle.
            </p>
          </div>

          <div className="pt-6">
            <div className="py-4">
              <h3>Variables</h3>
            </div>
          </div>

          <div className="py-4">
            <p>
              We just learned about functions and how these are reusable blocks
              of code that we can call using their names. Next you need to learn
              about variables. Variables are for storing values and data for
              later use, and can also be accessed again using their names. Use
              the <b>var</b> keyword before giving it a name and add the value
              after assigning it with the <b>=</b> sign.
            </p>
          </div>

          <div className="bg-violetblack text-white p-4 my-4 ">
            <code className="selection:bg-barbie">
              {`var colorValue = 0;`}
              <br className="selection:bg-barbie" />
              {`function draw() {`}

              <br className="selection:bg-barbie" />
              {`background(colorValue);`}
              <br className="selection:bg-barbie" />
              {`}`}
            </code>
          </div>

          <div className="pt-6">
            <div className="py-4">
              <h3>Creating the Softer Flower</h3>
            </div>
          </div>

          <div className="py-4">
            <p>
              Next thing we are going to be applying or new knowledge about
              circles to creatw a flower that is very inspired by the{" "}
              <a
                href="https://softer.website/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Softer logo
              </a>
              . To create a variable, we use the <em>let</em> keyword to define
              a name and a value.
            </p>
          </div>

          <div className="bg-violetblack text-white p-4 my-4 ">
            <code className="selection:bg-barbie">
              {`function setup() {`}
              <br className="selection:bg-barbie" />
              {`createCanvas(300, 300);`}
              <br className="selection:bg-barbie" />
              {`noStroke();`}
              <br className="selection:bg-barbie" />
              {`}`}
              <br></br>
              <br className="selection:bg-barbie" />
              {`function draw() {`}
              <br className="selection:bg-barbie" />

              {`let circleX = 150;`}
              <br className="selection:bg-barbie" />
              {`let circleY = 150;`}
              <br className="selection:bg-barbie" />
              {`let circleDiameter = 100;`}
              <br className="selection:bg-barbie" />
              <br></br>
              {`background(245, 220, 252);`}
              <br className="selection:bg-barbie" />
              <br></br>

              {`fill(245,238,99);`}
              <br className="selection:bg-barbie" />
              {`circle(circleX, circleY, circleDiameter);`}
              <br className="selection:bg-barbie" />
              {`}`}
            </code>
          </div>

          <div className="py-4">
            <p>
              So what we do here is creating a canvas with a 300 x 300 size. In
              the draw function, we set the background to a lilac color (with
              the RGB code 245, 220, 252). Notice that we set variables for the
              circles x and y coordinates as well as its diameter. The use of
              nostroke is to makes sure that the circle does not have any black
              border. Leave this line out if you like the look of the border. It
              should look{" "}
              <a
                href="https://editor.p5js.org/nynnejc/sketches/8pqMdvq_M"
                target="_blank"
                rel="noopener noreferrer"
              >
                like this
              </a>
              .
            </p>
          </div>

          <div className="py-4">
            <img
              src="https://d2w9rnfcy7mm78.cloudfront.net/15594370/original_97a5c1326e1720d0b4b68e4b8303fe3d.png?1647376926?bc=0"
              alt="lilac screen with yellow circle in the middle"
              width={300}
              height={300}
            />
          </div>

          <div className="bg-violetblack text-white p-4 my-4 ">
            <code className="selection:bg-barbie">
              {`let flowerX = 150;`}
              <br className="selection:bg-barbie" />
              {`let flowerY = 150;`}
              <br className="selection:bg-barbie" />
              {`let petalSize = 100;`}
              <br className="selection:bg-barbie" />
              {`let petalDistance = petalSize / 2;`}
              <br className="selection:bg-barbie" />
              <br></br>
              {`background(245, 220, 252);`}
              <br className="selection:bg-barbie" />
              <br></br>
              {`// center petal`}
              <br className="selection:bg-barbie" />
              {`fill(245,238,99);`}
              <br className="selection:bg-barbie" />
              {`circle(flowerX, flowerY, petalSize);`}
              <br className="selection:bg-barbie" />
            </code>
          </div>

          <div className="py-4">
            <p>
              Next we want to start creating the variables we need to vreate our
              softer flower. <br></br> flowerX holds the horizontal position of
              the center of the flower. <br></br> flowerY holds the vertical
              position of the center of the flower. <br></br>
              petalSize holds the diameter of the petals. petalDistance holds
              the space between the center of the flower and the four orange
              petals. Notice that this line uses the petalSize variable to
              calculate its value!{" "}
              <a
                href="https://editor.p5js.org/nynnejc/sketches/QkLU8-0Km"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link to sketch to follow along
              </a>
              . This may not seem like a huge difference, but using variables
              like this sends us well on the way to make a flower shape.
            </p>
          </div>

          <div className="py-4">
            <p>
              Notice the line starting with //. This is how to make code
              comments that the cumputer will skip instead of reading and trying
              to execute. This is the way to annotate the code, i.e. make
              comments for making the code clearer to ourselves.
            </p>
          </div>

          <div className="py-4">
            <p>
              Next we want to add a petal! We will add all the petals above the
              code that creates the center petal. If anything goes wrong, check
              your code{" "}
              <a
                href="https://editor.p5js.org/nynnejc/sketches/QkLU8-0Km"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </p>
          </div>

          <div className="bg-violetblack text-white p-4 my-4 ">
            <code className="selection:bg-barbie">
              {`// upper petal`}
              <br className="selection:bg-barbie" />
              {`fill(245,238,99);`}
              <br className="selection:bg-barbie" />
              {`circle(flowerX, flowerX - petalDistance, petalSize);`}
              <br className="selection:bg-barbie" />
            </code>
          </div>

          <div className="py-4">
            <img
              src="https://d2w9rnfcy7mm78.cloudfront.net/15594795/original_35bb153ea64bd814d565482f81593621.png?1647378979?bc=0"
              alt="lilac screen with two yellow circle stacked on top of each other"
              width={300}
              height={300}
            />
          </div>

          <div className="py-4">
            <p>
              Skipping criminally far ahead in order to finish this tutorial in
              time, let us take a look at how it looks to add the last three
              petals to our flower.
            </p>
          </div>

          <div className="bg-violetblack text-white p-4 my-4 ">
            <code className="selection:bg-barbie">
              {`// lower petal`}
              <br className="selection:bg-barbie" />
              {`fill(245,238,99);`}
              <br className="selection:bg-barbie" />
              {`circle(flowerX, petalSize + petalSize, petalSize);`}
              <br className="selection:bg-barbie" />
              <br></br>

              {`// left petal`}
              <br className="selection:bg-barbie" />
              {`fill(245,238,99);`}
              <br className="selection:bg-barbie" />
              {`circle(petalSize, flowerY, petalSize);`}
              <br className="selection:bg-barbie" />
              <br></br>

              {`// right petal`}
              <br className="selection:bg-barbie" />
              {`fill(245,238,99);`}
              <br className="selection:bg-barbie" />
              {`circle(petalSize + petalSize, flowerY, petalSize);`}
              <br className="selection:bg-barbie" />
            </code>
          </div>

          <div className="py-4">
            <img
              src="https://d2w9rnfcy7mm78.cloudfront.net/15594976/original_ba727dc28f838204aa0fc8401c01c98a.png?1647379994?bc=0"
              alt="final softer flower logo"
              width={300}
              height={300}
            />
          </div>

          <div className="py-4">
            <p>
              Finally, I think we should change the color of our center circle
              to lilac as well.
            </p>
          </div>

          <div className="bg-violetblack text-white p-4 my-4 ">
            <code className="selection:bg-barbie">
              {`// center petal`}
              <br className="selection:bg-barbie" />
              {`fill(245, 220, 252);`}
              <br className="selection:bg-barbie" />
              {`circle(flowerX, flowerY, centerPetal);`}
              <br className="selection:bg-barbie" />
            </code>
          </div>

          <div className="py-4">
            <p>
              Follow{" "}
              <a
                href="https://editor.p5js.org/nynnejc/sketches/bCa08HTYr"
                target="_blank"
                rel="noopener noreferrer"
              >
                this link
              </a>{" "}
              to check your code.
            </p>
          </div>

          <div className="py-8">
            <iframe
              id="p5.js web editor embed"
              title="p5.js web editor embed"
              width="600"
              height="600"
              className="w-full aspect-auto"
              src="https://editor.p5js.org/nynnejc/sketches/aG_8-ciJs"
            ></iframe>
          </div>

          <div className="pt-6">
            <div className="py-4">
              <h3>Inspiration and Examples</h3>
            </div>
          </div>

          <div className="py-4">
            <p>
              Predefined code things are usually grouped into what is called
              libraries that can be imported into the editor. However, some
              libraries are so used that they are by default imported, which
              means that you can use them without importing a library. These can
              also be thought of as built-in methods that comes automatically
              with the framework.
            </p>
          </div>

          <div className="py-4">
            <p>
              To find lots of examples of default library functions go to: and
              then scroll to
              <a
                href="http://staging.p5js.org/learn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                “programming topics”
              </a>
              .
            </p>
          </div>

          <div className="py-4">
            <p>
              Play around with these functions e.g. the color functions, by
              adding the line fill(0) see what happens. Add line stroke(255,
              100, 10) and see what happens.
            </p>
          </div>

          <div className="py-4">
            <img
              src="https://d2w9rnfcy7mm78.cloudfront.net/15391529/original_3dc847ec7a57700ec057ad9ef983a025.png?1646163602?bc=0"
              alt="p5.js web editor"
              width={500}
              height={500}
            />
          </div>

          <div className="my-8">
            <div className="pt-6">
              <h3 className="py-6">Keep Learning</h3>
              <p>
                <a
                  href="https://happycoding.io/tutorials/p5js/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Happy Coding p5.js Tutorials *{" "}
                  <em>Beginner-friendly and extensive p5.js tutorial page.</em>
                </a>
              </p>

              <p>
                <a
                  href="https://www.introduction-to-creative-coding.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Introduction to Creative Coding *{" "}
                  <em>intro to the visual library p5JS.</em>
                </a>
              </p>

              <p>
                <a
                  href="https://thecodingtrain.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Coding Train *{" "}
                  <em>Beginner-friendly youtube videos on creative coding.</em>
                </a>
              </p>

              <p>
                <a
                  href="https://p5js.org/get-started/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The p5.js official get started guide *{" "}
                  <em>Tutorial and ressources.</em>
                </a>
              </p>

              <p>
                <a
                  href="https://itp-xstory.github.io/p5js-shaders/#/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  p5.js shaders ressource *{" "}
                  <em>an open-source guide to everything p5.js shaders.</em>
                </a>
              </p>
            </div>

            <div className="py-8">
              <p>
                Thanks for following along! Big thanks to Alma for helping me
                out with creating and teaching this course.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
