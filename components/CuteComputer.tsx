import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CuteComputer = (): JSX.Element => {
  // Array of image paths
  const images = [
    "/computer/kærecomputer-01.svg",
    "/computer/kærecomputer-02.svg",
    "/computer/kærecomputer-03.svg",
    "/computer/kærecomputer-04.svg",
    "/computer/kærecomputer-05.svg",
    "/computer/kærecomputer-06.svg",
    "/computer/kærecomputer-07.svg",
    "/computer/kærecomputer-08.svg",
    "/computer/kærecomputer-09.svg",
    "/computer/kærecomputer-10.svg",
    "/computer/kærecomputer-11.svg",
    "/computer/kærecomputer-12.svg",
    "/computer/kærecomputer-13.svg",
    "/computer/kærecomputer-14.svg",
    "/computer/kærecomputer-15.svg",
    "/computer/kærecomputer-16.svg",
    "/computer/kærecomputer-17.svg",
    "/computer/kærecomputer-17.svg",
    "/computer/kærecomputer-19.svg",
    "/computer/kærecomputer-20.svg",
    "/computer/kærecomputer-21.svg",
    "/computer/kærecomputer-22.svg",
    "/computer/kærecomputer-23.svg",
  ];

  // State to hold the currently displayed image
  const [currentImage, setCurrentImage] = useState(images[0]); // Initialize with the first image

  // Function to handle click event
  const handleClick = () => {
    // Get a random index to select a random image from the array
    const randomIndex = Math.floor(Math.random() * images.length);
    // Update the state with the new image path
    setCurrentImage(images[randomIndex]);
  };

  return (
    <div className="h-32 w-32" onClick={handleClick}>
      <Link href="/" passHref as="/index.html">
        <Image
          src={currentImage}
          alt="Picture of a cute cartoon computer"
        />
      </Link>
    </div>
  );
};

export default CuteComputer;
