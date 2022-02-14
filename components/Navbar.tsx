import Link from "next/link";
import React from "react";

const Navbar = (): JSX.Element => {
  return (
    <header>
      <nav className="relative">
        <div className="absolute top-0 right-0 box-content h-32 w-32 pt-8 pr-8">
          <Link href="/" as="/index.html">
            <a>
              <svg
                width="130"
                height="130"
                viewBox="0 0 78 78"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M39 0a39 39,0 0 0,0 78a39 39,0 0 0,0 -78m0 1a19 19,0 0 1,0 38a19 19,0 0 0,0 38a38 38,0 0 1,0 -76m0 13.5a5 5,0 0 0,0 10a5 5,0 0 0,0 -10m0 39a5 5,0 0 1,0 10a5 5,0 0 1,0 -10" />
                <animate
                  attributeName="fill"
                  attributeType="XML"
                  from="blue"
                  to="red"
                  dur="20s"
                  repeatCount="indefinite"
                />
              </svg>
            </a>
          </Link>

          <ul className="text-right space-x-4 my-4 ">
            <li>
              <Link href="/about" as="/about.html">
                <a className="text-2xl text-bold font-sans ">About</a>
              </Link>
            </li>
            <li>
              <Link href="/library" as="/library.html">
                <a className="text-2xl text-bold font-sans ">
                  Resource Library
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="text-2xl text-bold font-sans ">Newsletter</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
