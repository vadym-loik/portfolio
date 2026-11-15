import type { NextConfig } from "next";

// Project pages live under "/<repo>". The deploy workflow sets this value.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Static HTML in "out/" for GitHub Pages (no server)
  output: "export",
  // "/en" is saved as "/en/index.html": GitHub Pages serves it without a server rewrite
  trailingSlash: true,
  basePath,
  // Same value for plain <a> links in the browser code (src/lib/base-path.ts)
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  poweredByHeader: false,
  images: {
    // GitHub Pages cannot run the Next.js image optimizer
    unoptimized: true,
  },
};

export default nextConfig;
