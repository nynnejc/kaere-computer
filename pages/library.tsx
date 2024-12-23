import React from "react";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="flex flex-col sm:flex-row min-h-screen bg-yellow_kc selection:bg-pink_kc">
      <div className="sm:order-2">
        <Navbar />
      </div>

      <main className="flex-grow sm:order-1">
        <h1 className="font-mono my-4 ml-2">Resource Library</h1>

        <h5 className="ml-2 custom-font-dauphine">
          Envolving list to encourage the new programmer
        </h5>

        <div className="ml-20 sm:w-3/5 mr-8">
          <div className="pt-4">
            <h3>Learn how to code</h3>
            <div className="text-red_kc">
              <p>
                <a
                  href="https://www.freecodecamp.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FreeCodeCamp *{" "}
                  <em>
                    A good first place to start with beginner-friendly free
                    courses in HTML, CSS, JavaScript.
                  </em>
                </a>
              </p>

              <p>
                <a
                  href="https://frontendmasters.com/guides/front-end-handbook/2019/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Front-end Developer Handbook * <em>Free e-book.</em>
                </a>
              </p>

              <p>
                <a
                  href="https://css-tricks.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS-TRICKS *{" "}
                  <em>
                    Helpful resource for CSS. Especially the flexbox guide.
                  </em>
                </a>
              </p>

              <p>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MDN Web Docs intro to JavaScript *{" "}
                  <em>Great intro to JavaScript.</em>
                </a>
              </p>

              <p>
                <a
                  href="https://javascript.info/intro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  JavaScript.info *{" "}
                  <em>Retro-looking but helpful resource on learning JS.</em>
                </a>
              </p>

              <p>
                <a
                  href="https://glitch.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Glitch *{" "}
                  <em>
                    Fun and interactive intro courses. Get started cooding
                    direcyly in the glitch editor without having to mess around
                    with the setup.
                  </em>
                </a>
              </p>

              <p>
                <a
                  href="https://www.codecademy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Codecademy * <em>Lots of free courses in HTML, CSS, JS.</em>
                </a>
              </p>
            </div>
          </div>

          <div className="pt-16">
            <h3>Creative Coding</h3>
            <div className="text-red_kc">
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
          </div>

          <div className="pt-16">
            <h3>Articles</h3>
            <div className="text-red_kc">
              <p>
                <a
                  href="https://increment.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Increment Magazine *{" "}
                  <em>
                    Visually pleasing and well-written articles on writing
                    software.
                  </em>
                </a>
              </p>

              <p>
                <a
                  href="https://www.creativelivesinprogress.com/article/rifke-sadleir-guide-portfolio-website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rifke Sadleir&apos;s guide to creating bespoke portfolio
                  websites *{" "}
                  <em>
                    A straightforward guide to building toyr first portfolio.
                  </em>
                </a>
              </p>
            </div>
          </div>

          <div className="pt-16">
            <h3>Books</h3>
            <div className="text-red_kc">
              <p>
                <a
                  href="https://www.charlespetzold.com/code/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CODE The Hidden Language of Computer Hardware and Software;
                  Charles Petzold *{" "}
                  <em>
                    A classic and very in-depth book on how computers work.
                  </em>
                </a>
              </p>
              <p>
                <a
                  href="https://data-feminism.mitpress.mit.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Data Feminism; Catherine DIgnazio and Lauren F. Klein *{" "}
                  <em>Primer on ethical Data Science.</em>
                </a>
              </p>
            </div>
          </div>

          <div className="pt-16">
            <h3>Newsletters</h3>
            <div className="text-red_kc">
              <p>
                <a
                  href="https://coolmail.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jenn Schiffer
                </a>
              </p>

              <p>
                <a
                  href="https://www.artistsguide.to/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  An Artists Guide to Computation
                </a>
              </p>

              <p>
                <a
                  href="https://wizardzines.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Julia Evans code comics
                </a>
              </p>

              <p>
                <a
                  href="https://taniarascia.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tania Rascia
                </a>
              </p>

              <p>
                <a
                  href="https://www.smashingmagazine.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Smashing Magazine newsletter
                </a>
              </p>

              <p>
                <a
                  href="https://kristoffer.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Naive Weekly
                </a>
              </p>
            </div>

            <div className="pt-16">
              <h3>Podcasts</h3>
              <div className="text-red_kc">
                <p className="mb-40">
                  <a
                    href="https://www.ladybug.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ladybug Podcast
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
