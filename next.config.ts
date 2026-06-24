import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.wilmingtonlawyers.com",
      },
    ],
  },
};

export default nextConfig;
