/* ==========================================================
 * components/Header.tsx — Site header with navigation
 * ----------------------------------------------------------
 * PLAIN ENGLISH: The top bar on every page. Shows my name and
 *   links to the Home and About pages.
 * LOGIC: Import Next.js Link → return a <header> with my name
 *   and a <nav> list of two links.
 * WHY WE NEED IT: Visitors need a consistent way to move
 *   between pages. Built once, used on every page through
 *   app/layout.tsx.
 * LEARNING GAP: Use <Link> (not <a>) for pages INSIDE this app.
 *   Link switches pages without a full reload, so it's faster.
 *   Use a regular <a> only for outside websites (like GitHub).
 *   This is a Server Component: no 'use client' at the top.
 * ========================================================== */

/* ----------------------------------------------------------
 * Import Link
 * PLAIN ENGLISH: Bring in Next.js's special link tool.
 * LOGIC: Default import from the 'next/link' package.
 * WHY WE NEED IT: Fast page-to-page navigation inside the app.
 * LEARNING GAP: href="/" = app/page.tsx (Home).
 *   href="/about" = app/about/page.tsx (About).
 *   The folder name decides the URL (App Router).
 * ---------------------------------------------------------- */
import Link from 'next/link';

/* ----------------------------------------------------------
 * Header component
 * PLAIN ENGLISH: Returns the header's HTML-like markup (JSX).
 * LOGIC: "export default function" makes it importable by name
 *   in other files (import Header from '@/components/Header').
 * WHY WE NEED IT: Reusable across every page.
 * LEARNING GAP:
 *   - JSX uses className (not class) for CSS classes.
 *   - Tailwind classes, plain English:
 *     bg-blue-600 = blue background, text-white = white text,
 *     py-4 = padding top/bottom, shadow-md = soft shadow,
 *     text-2xl font-bold = big bold text,
 *     max-w-4xl mx-auto = limit width and center it,
 *     flex gap-6 = put items in a row with space between.
 *   - Semantic tags (<header>, <nav>, <ul>/<li>) help screen
 *     readers and accessibility scores (Lighthouse).
 * ---------------------------------------------------------- */
export default function Header() {
    return (
        <header className="bg-blue-600 text-white py-4 shadow-md">
            <div id="header-title" className="max-w-4xl mx-auto px-4 text-2xl font-bold">Sina McBraun</div>
            <nav className="max-w-4xl mx-auto px-4 mt-2 flex justify-between items-center">
                <ul className="flex gap-6">
                    <li><Link href="/" className="hover:underline">Home</Link></li>
                    <li><Link href="/about" className="hover:underline">About</Link></li>
                </ul>
            </nav>
        </header>
    );
}