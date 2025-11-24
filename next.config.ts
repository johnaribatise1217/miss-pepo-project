import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains : ["res.cloudinary.com", "lh3.googleusercontent.com", "photos.fife.usercontent.google.com"]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
