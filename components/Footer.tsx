/* ==========================================================
 * components/Footer.tsx — Site footer
 * ----------------------------------------------------------
 * PLAIN ENGLISH: The bottom bar on every page, with a copyright
 *   line that always shows the current year.
 * LOGIC: new Date().getFullYear() gets this year automatically.
 * WHY WE NEED IT: Consistent page ending, and the year never
 *   needs to be updated by hand.
 * LEARNING GAP:
 *   - &copy; is the HTML code for the © symbol.
 *   - {...} inside JSX = "run this JavaScript and show the
 *     result."
 *   - Server Component: no 'use client'.
 * ========================================================== */
export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4 mt-12">
            <div className="container mx-auto text-center">
                <p>Copyright &copy; {new Date().getFullYear()} | Sina McBraun | All rights reserved</p>
            </div>
        </footer>
    );
}