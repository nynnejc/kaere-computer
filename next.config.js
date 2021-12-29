/** @type {import('next').NextConfig} */
const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages({
  /* config for next-optimized-images */
  handleImages: ["jpeg", "png", "svg", "webp", "gif"],
  reactStrictMode: true,
});
