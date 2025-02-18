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
  webpack(config, { isServer }) {
    if (!isServer) {
      // Exclude aws-sdk from being bundled into the frontend bundle
      config.externals = ['aws-sdk', '@aws-sdk/client-dynamodb', '@aws-sdk/lib-dynamodb'];
    }
    return config;
  },
};


