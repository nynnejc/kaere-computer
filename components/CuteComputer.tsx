import React, { useState, useEffect, useRef } from "react";
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
    "/computer/kærecomputer-18.svg",
    "/computer/kærecomputer-19.svg",
    "/computer/kærecomputer-20.svg",
    "/computer/kærecomputer-21.svg",
    "/computer/kærecomputer-22.svg",
    "/computer/kærecomputer-23.svg",
  ];

  // Function to get a random image from the array
  const getRandomImage = () => images[Math.floor(Math.random() * images.length)];

  // State to hold the currently displayed image, initialized with a random image
  const [currentImage, setCurrentImage] = useState(getRandomImage());

  // Ref to track the last image change time
  const lastChangeTimeRef = useRef(Date.now());

  // Function to handle click event
  const handleClick = () => {
    // Update the last click time
    lastChangeTimeRef.current = Date.now();

    // Update the state with a new random image
    setCurrentImage(getRandomImage());
  };

  useEffect(() => {
    // Function to handle automatic image change
    const autoChangeImage = () => {
      const currentTime = Date.now();
      // Check if 45 seconds have passed since the last change
      if (currentTime - lastChangeTimeRef.current >= 45 * 1000) {
        // Update the state with a new random image
        setCurrentImage(getRandomImage());
        // Update the last change time to now
        lastChangeTimeRef.current = Date.now();
      }
    };

    // Set interval to change image every 45 seconds
    const intervalId = setInterval(autoChangeImage, 45 * 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-32 w-32" onClick={handleClick}>
      <Link href="/" passHref as="/index.html">
        <Image
          src={currentImage}
          alt="Picture of a cute cartoon computer"
          width={128}
          height={128}
        />
      </Link>
    </div>
  );
};

export default CuteComputer;
