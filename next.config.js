/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [...config.externals, "next"];
    }
    return config;
  },
};


