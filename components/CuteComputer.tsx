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

  const getRandomImage = () => images[Math.floor(Math.random() * images.length)];

  const [currentImage, setCurrentImage] = useState(getRandomImage());

  const lastChangeTimeRef = useRef(Date.now());

  const handleClick = () => {
    lastChangeTimeRef.current = Date.now();

    setCurrentImage(getRandomImage());
  };

  useEffect(() => {
    const autoChangeImage = () => {
      const currentTime = Date.now();
      if (currentTime - lastChangeTimeRef.current >= 45 * 1000) {
        setCurrentImage(getRandomImage());
        lastChangeTimeRef.current = Date.now();
      }
    };

    const intervalId = setInterval(autoChangeImage, 45 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div onClick={handleClick}>
      <Link href="/" passHref as="/index.html">
        <Image
          src={currentImage}
          alt="Picture of a cute cartoon computer"
          width={160}
          height={160}
        />
      </Link>
    </div>
  );
};

export default CuteComputer;
