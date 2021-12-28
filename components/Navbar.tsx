import Link from "next/link";
import React from "react";

const Navbar = (): JSX.Element => {
  return (
    <header>
      <nav>
        <div className="flex flex-col py-8 pr-10">
          <Link href="/">
            <a>
              <div className="flex justify-end">
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
              </div>
            </a>
          </Link>

          <ul className="text-right space-x-4 my-4 ">
            <li>
              <Link href="/about">
                <a className="text-2xl text-bold font-sans ">About</a>
              </Link>
            </li>
            <li>
              <Link href="/library">
                <a className="text-2xl text-bold font-sans ">Resource Library</a>
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
