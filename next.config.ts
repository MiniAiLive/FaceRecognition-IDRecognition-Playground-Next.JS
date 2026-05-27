import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/proxy/face/:path*",
        destination: `${process.env.NEXT_PUBLIC_FACE_RECOG_API_URL}/:path*`,
      },
      {
        source: "/api/proxy/id/:path*",
        destination: `${process.env.NEXT_PUBLIC_ID_RECOG_API_URL}/:path*`,
      },
      {
        source: "/api/proxy/face-live/:path*",
        destination: `${process.env.NEXT_PUBLIC_FACE_LIVE_API_URL}/:path*`,
      },
      {
        source: "/api/proxy/id-live/:path*",
        destination: `${process.env.NEXT_PUBLIC_ID_LIVE_API_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;
