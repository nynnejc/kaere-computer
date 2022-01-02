import React from "react";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <body className="flex flex-col min-h-screen bg-banana">
      <Navbar />

      <main className="flex-grow mx-auto flex flex-col z-50">
        <div className="grid sm:grid-cols-2 gap-4 ml-4">
          <div className="overflow-y-scroll">
            <h1>Resource Library</h1>
            <h5>An envolving list to encourage the new programmer</h5>

            <div className="pt-16">
              <h3>Learn how to code</h3>
              <p>
                <a
                  href="https://www.freecodecamp.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FreeCodeCamp * <em>A good first place to start with beginner-friendly free courses in HTML, CSS, JavaScript.</em>
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
                  CSS-TRICKS * <em>Helpful resource for CSS. Especially the flexbox guide.</em>
                </a>
              </p>

              <p>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MDN Web Docs intro to JavaScript * <em>Great intro to JavaScript.</em>
                </a>
              </p>

              <p>
                <a
                  href="https://javascript.info/intro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  JavaScript.info * <em>Retro-looking but helpful resource on learning JS.</em>
                </a>
              </p>

              <p>
                <a
                  href="https://www.introduction-to-creative-coding.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Introduction to Creative Coding * <em>intro to the visual library p5JS.</em>
                </a>
              </p>

              <p>
                <a
                  href="https://glitch.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Glitch * <em>Fun and interactive intro courses. Get started cooding direcyly in the glitch editor without having to mess around with the setup.</em>
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

              <p>
                <a
                  href="https://thecodingtrain.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Coding Train * <em>Beginner-friendly youtube videos on creative coding.</em>
                </a>
              </p>
            </div>

            <div className="pt-16">
              <h3>Articles</h3>
              <p>
                <a
                  href="https://increment.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Increment Magazine * <em>Visually pleasing and well-written articles on writing software.</em>
                </a>
              </p>

              <p>
                <a
                  href="https://www.creativelivesinprogress.com/article/rifke-sadleir-guide-portfolio-website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rifke Sadleir&apos;s guide to creating bespoke portfolio websites * <em>A straightforward guide to building toyr first portfolio.</em>
                </a>
              </p>
            </div>

            <div className="pt-16">
              <h3>Books</h3>
              <p>
                <a
                  href="https://www.charlespetzold.com/code/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CODE The Hidden Language of Computer Hardware and Software;
                  Charles Petzold * <em>A classic and very in-depth book on how computers work.</em>
                </a>
              </p>
              <p>
                <a
                  href="https://data-feminism.mitpress.mit.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Data Feminism; Catherine DIgnazio and Lauren F. Klein * <em>Primer on ethical Data Science.</em>
                </a>
              </p>
            </div>

            <div className="pt-16">
              <h3>Newsletters</h3>

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

              <div className="pt-16">
                <h3>Podcasts</h3>
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

      <footer className="bg-gradient-to-b from-banana to-lemon py-40 w-full fixed bottom-0">
        <div className="container mx-auto" />
      </footer>
    </body>
  );
}
