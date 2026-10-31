/* ==========================================================
 * app/layout.tsx — Root layout (the frame around every page)
 * ----------------------------------------------------------
 * PLAIN ENGLISH: The shared "frame" for the whole site: global
 *   styles, fonts, page title, Header at the top, Footer at the
 *   bottom, and each page's content in the middle.
 * LOGIC: Next.js wraps EVERY page inside this layout. Whatever
 *   page you visit (Home or About) is passed in as "children"
 *   and placed between <Header /> and <Footer />.
 * WHY WE NEED IT: Shared pieces are written ONCE here instead of
 *   being copied into every page.
 * LEARNING GAP: This is the answer to a Canvas question: the
 *   root layout holds the shared structure (html, body, header,
 *   footer, global CSS) that wraps all pages. Server Component:
 *   no 'use client'.
 * ========================================================== */

/* ----------------------------------------------------------
 * Imports
 * PLAIN ENGLISH: Bring in the page-title type, fonts, global
 *   styles, and my Header and Footer components.
 * LOGIC:
 *   - Metadata = the TypeScript type for page title/description.
 *   - Geist / Geist_Mono = fonts from Google, set up by Next.js.
 *   - "./globals.css" = Tailwind's global styles (required).
 *   - "@/components/..." = my reusable components.
 * WHY WE NEED IT: The layout uses all of these.
 * LEARNING GAP: "import type" brings in ONLY a type (used for
 *   checking), not real code that runs.
 * ---------------------------------------------------------- */
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ----------------------------------------------------------
 * Fonts (kept from the default setup)
 * PLAIN ENGLISH: Load two fonts and give each a CSS variable
 *   name.
 * LOGIC: The variables (--font-geist-sans, --font-geist-mono)
 *   are used by globals.css to style text.
 * WHY WE NEED IT: Clean, consistent text across the site.
 * LEARNING GAP: Next.js downloads and serves these fonts itself,
 *   so the page doesn't "jump" while fonts load.
 * ---------------------------------------------------------- */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ----------------------------------------------------------
 * Metadata (page title + description)
 * PLAIN ENGLISH: The text shown on the browser tab and in
 *   search results.
 * LOGIC: Next.js reads this object and adds <title> and
 *   <meta name="description"> to every page.
 * WHY WE NEED IT: A real title looks professional, and
 *   Lighthouse checks that pages have one.
 * LEARNING GAP: Changed from the default "Create Next App" so
 *   the site is clearly mine.
 * ---------------------------------------------------------- */
export const metadata: Metadata = {
  title: "Sina McBraun Portfolio",
  description: "Portfolio of web development projects by Sina McBraun, built with Next.js.",
};

/* ----------------------------------------------------------
 * RootLayout component
 * PLAIN ENGLISH: Build the page frame: <html> → <body> →
 *   Header, the current page, Footer.
 * LOGIC: { children } = the current page's content, passed in
 *   by Next.js. React.ReactNode = "anything React can display."
 * WHY WE NEED IT: Every page gets the same Header and Footer
 *   automatically.
 * LEARNING GAP:
 *   - lang="en" tells screen readers the page is English
 *     (an accessibility point Lighthouse checks).
 *   - "min-h-full flex flex-col" = stack Header, page, Footer
 *     top to bottom, at least the full screen height.
 * ---------------------------------------------------------- */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}