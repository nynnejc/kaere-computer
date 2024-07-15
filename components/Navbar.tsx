import Link from "next/link";
import React from "react";
import CuteComputer from "./CuteComputer";

const Navbar = (): JSX.Element => {
  return (
    <header>
      <nav className="relative flex flex-wrap">
        <div className="absolute top-2 right-6">
          <ul className="text-left">
            <li className="w-full mb-8">
              <CuteComputer />
            </li>

            <li className="w-full mb-1 pl-1 pr-1 bg-white border border-black text-2xl font-sans hover:navhover">
              <Link href="/index.html">NEWSLETTER</Link>
            </li>
            <li className="w-full mb-1 pl-1 bg-white border border-black text-2xl font-sans hover:navhover">
              <Link href="/about" as="/about.html">
                ABOUT
              </Link>
            </li>
            <li className="w-full mb-1 pl-1 bg-white border border-black text-2xl font-sans hover:navhover">
              <Link href="/library" as="/library.html">
                LIBRARY
              </Link>
            </li>

            <li className="w-full mb-1 pl-1 bg-white border border-black text-2xl font-sans hover:navhover">
              <Link href="/tutorial.html">TUTORIAL</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
