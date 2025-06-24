import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*", // frontend call
        destination: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/:path*`, // actual backend endpoint
      },
    ];
  },
};

export default nextConfig;
