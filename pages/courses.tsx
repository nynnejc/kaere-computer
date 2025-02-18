import Link from "next/link";
import React from "react";
import Navbar from "../components/Navbar";
import dynamic from "next/dynamic";

// const CloudBackground = dynamic(() => import("../components/CloudBackground"), { ssr: false });

export default function Courses() {
  return (
    <div className="flex flex-col sm:flex-row min-h-screen selection:bg-pink-300 relative">
      {/* <CloudBackground /> */}
      <div className="sm:order-2 relative z-10">
        <Navbar />
      </div>
      <main className="flex-grow sm:order-1 relative z-10">
        <h1 className="font-mono my-4 ml-2">Courses</h1>
        <p>plzzzzzzz</p>
      </main>
    </div>
  );
}
