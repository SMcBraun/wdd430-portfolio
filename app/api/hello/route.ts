/* ==========================================================
 * app/api/hello/route.ts — A simple API route
 * URL: /api/hello
 * ----------------------------------------------------------
 * PLAIN ENGLISH: When someone visits /api/hello, send back a
 *   small JSON message instead of a web page.
 * LOGIC: Exporting a function named GET makes Next.js run it
 *   for GET requests to this folder's URL.
 *   Response.json({...}) sends JSON with status 200.
 * WHY WE NEED IT: Shows that Next.js has a BACKEND layer too,
 *   not just pages. Later, routes like this will read from a
 *   database.
 * LEARNING GAP:
 *   - Connect the dots: this is the same idea as your CSE 341
 *     Express route: return res.status(200).json({ ... }).
 *     Here, the folder path (app/api/hello) decides the URL,
 *     and the function NAME (GET) decides the method.
 *   - The file is route.ts (not page.tsx). route.ts = data,
 *     page.tsx = a web page.
 * ========================================================== */
export async function GET() {
    return Response.json({ message: 'Hello from Next.js API!' });
}