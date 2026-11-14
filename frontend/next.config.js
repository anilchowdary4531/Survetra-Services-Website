/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "assets.survetra.com", "localhost"],
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/proxy/:path*",
        destination: "http://localhost:8080/api/v1/:path*",
      },
    ];
  },
};

module.exports = nextConfig;

