import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML in "out/" for GitHub Pages (no server)
  output: "export",
  // "/en" is saved as "/en/index.html": GitHub Pages serves it without a server rewrite
  trailingSlash: true,
  // Project pages live under "/<repo>". The deploy workflow sets this value.
  basePath: process.env.PAGES_BASE_PATH ?? "",
  poweredByHeader: false,
  images: {
    // GitHub Pages cannot run the Next.js image optimizer
    unoptimized: true,
  },
};

export default nextConfig;
