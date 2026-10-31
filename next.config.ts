/* ==========================================================
 * next.config.ts — Next.js project settings
 * ----------------------------------------------------------
 * PLAIN ENGLISH: The settings file for how Next.js builds and
 *   runs this app.
 * LOGIC: Export one settings object (nextConfig) that Next.js
 *   reads when it starts.
 * WHY WE NEED IT: The newer create-next-app turned on
 *   "cacheComponents", which pre-builds pages and treats
 *   new Date() (the Footer's copyright year) as an error. The
 *   W01 assignment code is written for the standard behavior,
 *   so these two settings are turned OFF.
 * LEARNING GAP:
 *   - Without this change, the Footer shows a "Blocking Route"
 *     error, and the Vercel deploy could fail.
 *   - partialPrefetching works together with cacheComponents,
 *     so it's turned off too.
 *   - The turbopack/Tailwind section is the default setup that
 *     makes Tailwind CSS work. Leave it as is.
 * ========================================================== */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: false,
  partialPrefetching: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;