// Importing env files here to validate on build
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  /** Enables hot reloading for local packages without a build step */
  transpilePackages: [
    "@sanwel/api",
    "@sanwel/db",
    "@sanwel/ui",
    "@sanwel/validators",
  ],

  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
};

export default config;
