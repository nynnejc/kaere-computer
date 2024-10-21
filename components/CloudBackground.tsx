import React from "react";
import Sketch from "react-p5";
import p5Types from "p5"; // Import p5 types

const CloudBackground: React.FC = () => {
  // Variables and setup
  let cols: number, rows: number; // Explicitly declare types as number
  const scl = 5; // Scale of the cloud "pixels"
  let zoff = 0.0; // Offset for Perlin noise
  let isAnimating = false;
  let lastMouseX = -1;
  let lastMouseY = -1;
  let lastMoveTime = 0;
  const stopDelay = 500;

  // Color variables
  let baseR: number, baseG: number, baseB: number;
  let targetR: number, targetG: number, targetB: number;
  const yellowR = 255,
    yellowG = 255,
    yellowB = 204;
  const colorSpeed = 0.01;
  const gradientRadius = 650;

  // Initialize target colors
  const initializeTargetColors = () => {
    targetR = 255;
    targetG = 255;
    targetB = 255;
  };

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
    cols = p5.width / scl;
    rows = p5.height / scl;
    setBaseBackgroundColor(p5);
    initializeTargetColors(); // Initialize target colors
  };

  const draw = (p5: p5Types) => {
    let mouseRatioX = p5.map(p5.mouseX, 0, p5.width, 0, 1);
    let mouseRatioY = p5.map(p5.mouseY, 0, p5.height, 0, 1);

    // Smoothly transition the background color
    baseR = p5.lerp(baseR, targetR, colorSpeed);
    baseG = p5.lerp(baseG, targetG, colorSpeed);
    baseB = p5.lerp(baseB, targetB, colorSpeed);

    // Apply radial gradient effect
    applyRadialGradient(p5, p5.mouseX, p5.mouseY);

    // Detect mouse movement
    if (p5.mouseX !== lastMouseX || p5.mouseY !== lastMouseY) {
      lastMouseX = p5.mouseX;
      lastMouseY = p5.mouseY;
      lastMoveTime = p5.millis();
      isAnimating = true;

      // Update target colors
      targetR = p5.map(mouseRatioX, 0, 1, 200, 255);
      targetG = p5.map(mouseRatioY, 0, 1, 180, 255);
      targetB = p5.map(mouseRatioX + mouseRatioY, 0, 2, 200, 255);
    } else if (p5.millis() - lastMoveTime > stopDelay) {
      isAnimating = false;
    }

    drawClouds(p5);

    // Update zoff if animation is active
    if (isAnimating) {
      zoff += 0.01;
    }
  };

  const applyRadialGradient = (p5: p5Types, cx: number, cy: number) => {
    p5.loadPixels();
    for (let x = 0; x < p5.width; x++) {
      for (let y = 0; y < p5.height; y++) {
        let distance = p5.dist(x, y, cx, cy);
        let intensity = p5.constrain(p5.map(distance, 0, gradientRadius, 1, 0), 0, 1);

        let r1 = p5.lerp(baseR, targetR, intensity);
        let g1 = p5.lerp(baseG, targetG, intensity);
        let b1 = p5.lerp(baseB, targetB, intensity);

        let r = p5.lerp(r1, yellowR, 0.5 * intensity);
        let g = p5.lerp(g1, yellowG, 0.5 * intensity);
        let b = p5.lerp(b1, yellowB, 0.5 * intensity);

        // Create a color
        let c = p5.color(r, g, b);

        // Get RGBA values using p5.js functions
        const redValue = p5.red(c);
        const greenValue = p5.green(c);
        const blueValue = p5.blue(c);
        const alphaValue = 255; // Set alpha to fully opaque

        const pixelIndex = (x + y * p5.width) * 4; // Multiply by 4 for RGBA
        p5.pixels[pixelIndex] = redValue;     // Red
        p5.pixels[pixelIndex + 1] = greenValue; // Green
        p5.pixels[pixelIndex + 2] = blueValue; // Blue
        p5.pixels[pixelIndex + 3] = alphaValue; // Alpha
      }
    }
    p5.updatePixels();
  };

  const drawClouds = (p5: p5Types) => {
    for (let x = 0; x < cols; x++) {
      for (let y = 0; y < rows; y++) {
        let xoff = x * 0.05;
        let yoff = y * 0.05;
        let noiseValue = p5.noise(xoff, yoff, zoff);

        if (noiseValue > 0.5) {
          let bright = p5.map(noiseValue, 0.5, 1, 220, 255);
          p5.noStroke();
          p5.fill(bright);
          p5.rect(x * scl, y * scl, scl, scl);
        }
      }
    }
  };

  const setBaseBackgroundColor = (p5: p5Types) => {
    baseR = p5.random(180, 255);
    baseG = p5.random(180, 255);
    baseB = p5.random(180, 255);
  };

  // Handle resizing window
  const windowResized = (p5: p5Types) => {
    p5.resizeCanvas(window.innerWidth, window.innerHeight);
    cols = p5.width / scl;
    rows = p5.height / scl;
  };

  return (
    <Sketch
      setup={setup}
      draw={draw}
      windowResized={windowResized}
      style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
    />
  );
};

export default CloudBackground;
