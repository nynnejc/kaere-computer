/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.externals = ['aws-sdk', '@aws-sdk/client-dynamodb', '@aws-sdk/lib-dynamodb'];
    }
    return config;
  },
};

module.exports = nextConfig;
