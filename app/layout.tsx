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
 * LEARNING GAP: The root layout holds the shared structure
 *   (html, body, header, footer, global CSS) that wraps all
 *   pages. Server Component: no 'use client'.
 * ========================================================== */

/* ----------------------------------------------------------
 * Imports
 * PLAIN ENGLISH: Bring in the page-title type, my two brand
 *   fonts, global styles, and my Header and Footer.
 * LOGIC:
 *   - Metadata = the TypeScript type for page title/description.
 *   - Poppins (headings) and Open_Sans (body text) come from
 *     Google Fonts through Next.js's built-in font tool.
 *   - "./globals.css" = Tailwind + my color palette.
 * WHY WE NEED IT: Fonts give the site personality. Next.js
 *   downloads them at build time, so the page loads fast.
 * LEARNING GAP: A font with a space in its name uses an
 *   underscore in the import: Open Sans → Open_Sans.
 * ---------------------------------------------------------- */
import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ----------------------------------------------------------
 * Font setup
 * PLAIN ENGLISH: Load the fonts and give each one a CSS
 *   variable name.
 * LOGIC: variable "--font-poppins" is used in globals.css as
 *   --font-heading, which creates the class "font-heading".
 * WHY WE NEED IT: Lets Tailwind classes pick the right font.
 * LEARNING GAP: Poppins needs "weight" listed because it is not
 *   a variable font. Open Sans works without it.
 * ---------------------------------------------------------- */
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

/* ----------------------------------------------------------
 * Metadata (browser tab title + search description)
 * PLAIN ENGLISH: What shows on the browser tab and in Google.
 * LOGIC: Next.js reads this object and builds the <title> and
 *   <meta name="description"> tags for me.
 * WHY WE NEED IT: A clear title helps people find and remember
 *   the site. It also helps the Lighthouse SEO score.
 * LEARNING GAP: Exporting "metadata" only works in Server
 *   Components.
 * ---------------------------------------------------------- */
export const metadata: Metadata = {
  title: "Sina McBraun | Web Developer Portfolio",
  description:
    "Portfolio of Sina McBraun, a software development student building friendly, helpful web apps with Next.js and React.",
};

/* ----------------------------------------------------------
 * RootLayout component
 * PLAIN ENGLISH: The frame: Header, the page, then Footer.
 * LOGIC: The font variables go on <html> so every page can use
 *   them. "flex-1" on the middle <div> pushes the footer
 *   to the bottom, even on short pages.
 * WHY WE NEED IT: Every page gets the same look automatically.
 * LEARNING GAP: {children} = whatever page is being visited.
 * ---------------------------------------------------------- */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}