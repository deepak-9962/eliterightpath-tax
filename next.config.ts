import type { NextConfig } from "next";

// Force redeploy after root directory & Next.js preset updates
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
