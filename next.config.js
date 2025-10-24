/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  turbopack: {}, 
};

module.exports = nextConfig;
