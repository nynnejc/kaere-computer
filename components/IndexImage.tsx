import React from "react";
import Image from "next/image";


let Imagelist: any = [
  "ada.png",
  "gameoflife.gif",
  "globe.gif",
  "hiddenlayers.jpg",
  "himmel.jpeg",
  "kablam.gif",
  "meowmeow.gif",
  "weave.png",
  "yinyan.jpeg",
];

function IndexImage() {
  return (
    <Image src="/indeximg/kablam.gif" alt="Landscape picture" width={500} height={500} />
  );
}

export default IndexImage;
