/* eslint-disable @next/next/no-img-element */
import React from "react";

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
    <img
      src="/indeximg/kablam.gif"
      alt="little red dot gif"
      width={500}
      height={500}
    />
  );
}

export default IndexImage;
