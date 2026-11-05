/* ==========================================================
 * components/Header.tsx — Site header with navigation
 * ----------------------------------------------------------
 * PLAIN ENGLISH: The top bar on every page. A sunrise color
 *   stripe, my "SM" logo bubble and name, and links to the Home
 *   and About pages.
 * LOGIC: Import Next.js Link → return a <header> with my logo
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
 * WHY WE NEED IT: Fast page-to-page navigation.
 * LEARNING GAP: "next/link" is built into Next.js, so there is
 *   nothing extra to install.
 * ---------------------------------------------------------- */
import Link from 'next/link';

/* ----------------------------------------------------------
 * Header component
 * PLAIN ENGLISH: Stripe on top, logo on the left, links on the
 *   right.
 * LOGIC:
 *   - The thin top <div> uses a gradient: coral → sunny → lagoon.
 *   - "sticky top-0" keeps the header visible while scrolling.
 *   - "bg-white/90 backdrop-blur" = slightly see-through white
 *     with a soft blur behind it.
 * WHY WE NEED IT: A friendly, branded first impression.
 * LEARNING GAP: aria-hidden="true" hides decoration (the stripe)
 *   from screen readers, so they only read real content.
 * ---------------------------------------------------------- */
export default function Header() {
    return (
        <header className="sticky top-0 z-20 bg-white/90 backdrop-blur shadow-sm">
            <div aria-hidden="true" className="h-1.5 bg-gradient-to-r from-coral via-sunny to-lagoon" />
            <nav className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-3 group">
                    <span className="grid place-items-center w-10 h-10 rounded-full bg-gradient-to-br from-coral to-sunny text-ink font-heading font-bold shadow-md group-hover:scale-110 transition">
                        SM
                    </span>
                    <span className="font-heading text-xl font-bold text-ink">Sina McBraun</span>
                </Link>
                <ul className="flex gap-2 font-heading font-semibold">
                    <li>
                        <Link href="/" className="px-4 py-2 rounded-full text-ink hover:bg-mist hover:text-lagoon-dark transition">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="px-4 py-2 rounded-full text-ink hover:bg-blush hover:text-coral-dark transition">
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}