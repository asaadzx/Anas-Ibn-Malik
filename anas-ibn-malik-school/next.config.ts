import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  allowedDevOrigins: [
    "http://localhost:3001", 
  ],
};

export default nextConfig;
