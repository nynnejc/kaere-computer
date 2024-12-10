/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  reactStrictMode: true,
  swcMinify: false,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
