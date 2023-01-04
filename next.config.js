/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: ["error", "warn"],
  },
};

module.exports = nextConfig;
