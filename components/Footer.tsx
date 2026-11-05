/* ==========================================================
 * components/Footer.tsx — Site footer
 * ----------------------------------------------------------
 * PLAIN ENGLISH: The bottom bar on every page: a sunrise color
 *   stripe, a friendly sign-off, and a copyright line that
 *   always shows the current year.
 * LOGIC: new Date().getFullYear() gets this year automatically.
 * WHY WE NEED IT: Consistent page ending, and the year never
 *   needs to be updated by hand.
 * LEARNING GAP:
 *   - &copy; is the HTML code for the © symbol.
 *   - {...} inside JSX = "run this JavaScript and show the
 *     result."
 *   - The hibiscus emoji is wrapped in aria-hidden so screen
 *     readers skip it.
 *   - Server Component: no 'use client'.
 * ========================================================== */
export default function Footer() {
    return (
        <footer className="bg-ink text-white mt-16">
            <div aria-hidden="true" className="h-1.5 bg-gradient-to-r from-lagoon via-sunny to-coral" />
            <div className="max-w-5xl mx-auto px-4 py-8 text-center">
                <p className="font-heading text-lg font-semibold text-sunny">
                    Made with aloha <span aria-hidden="true">🌺</span>
                </p>
                <p className="mt-2 text-sm text-white/80">
                    Copyright &copy; {new Date().getFullYear()} | Sina McBraun | All rights reserved
                </p>
                <p className="mt-1 text-sm text-white/80">Built with Next.js and Tailwind CSS</p>
            </div>
        </footer>
    );
}