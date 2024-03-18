/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.x-kom.pl",
      },
      {
        hostname: "assets.x-kom.pl",
      },
    ],
  },
};

export default nextConfig;
