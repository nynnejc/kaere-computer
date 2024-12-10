/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export mode
  distDir: "public", // Specifies "public" as the output directory
  reactStrictMode: true,
  swcMinify: false, // Keeps SWC minification disabled
  images: {
    unoptimized: true, // Ensures images work in static export mode
  },
};

module.exports = nextConfig;
