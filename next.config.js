/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `https://api.vworld.kr/:path*`,
      },
    ];
  },
};
module.exports = nextConfig;
