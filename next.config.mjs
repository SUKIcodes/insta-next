/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "logos-world.net",
      },
    ],
  },
};

export default nextConfig;
