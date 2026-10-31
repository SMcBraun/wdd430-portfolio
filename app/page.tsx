/* ==========================================================
 * app/page.tsx — Home page (URL: "/")
 * ----------------------------------------------------------
 * PLAIN ENGLISH: The first page visitors see: a short intro and
 *   a list of projects I have built.
 * LOGIC: Store my projects in a list (array) → pass that list
 *   to <ProjectList>, which shows a <ProjectCard> for each one.
 * WHY WE NEED IT: Shows real work to teachers, teammates, and
 *   future employers.
 * LEARNING GAP:
 *   - In the App Router, the FILE LOCATION decides the URL:
 *     app/page.tsx = "/" (home).
 *   - The data lives here for now. In later weeks it will come
 *     from a database (the same idea as your CSE 341 Books API).
 *   - Server Component: no 'use client'.
 * ========================================================== */

/* ----------------------------------------------------------
 * Import ProjectList
 * PLAIN ENGLISH: Bring in the list component.
 * LOGIC: "@/" = shortcut for the project's top folder
 *   (the import alias "@/*" set up when the app was created).
 * WHY WE NEED IT: The page reuses the component instead of
 *   rebuilding cards by hand.
 * LEARNING GAP: "@/components/ProjectList" works from ANY
 *   folder, so there's no counting "../../" levels.
 * ---------------------------------------------------------- */
import ProjectList from '@/components/ProjectList';

/* ----------------------------------------------------------
 * My projects (the data)
 * PLAIN ENGLISH: Real projects I built, each with a title,
 *   description, technologies, and a link.
 * LOGIC: An array of objects. Each object's fields match the
 *   Project interface in ProjectList.tsx.
 * WHY WE NEED IT: The assignment requires at least two real
 *   projects with accurate descriptions and working links.
 * LEARNING GAP: If a field name is misspelled (for example
 *   "techs" instead of "technologies"), TypeScript shows an
 *   error. That's the type checking working for you.
 * ---------------------------------------------------------- */
const projects = [
  {
    title: 'Shuffle My Style',
    description:
      'A closet outfit shuffler that mixes and matches clothes you already own. Users add items by category and color, shuffle three outfit ideas, see style inspiration photos, save favorites, and track how often each outfit is worn.',
    technologies: ['HTML', 'CSS', 'JavaScript (ES Modules)', 'localStorage', 'Unsplash API'],
    link: 'https://github.com/SMcBraun/shuffle-my-style',
  },
  {
    title: 'Service Projects Website',
    description:
      'A full-stack site for organizations and their community service projects, with user registration and login, admin-only pages, and a volunteer sign-up feature.',
    technologies: ['Node.js', 'Express', 'EJS', 'PostgreSQL', 'bcrypt', 'Render'],
    link: 'https://github.com/SMcBraun/cse340-course-repo',
  },
];

/* ----------------------------------------------------------
 * Home page component
 * PLAIN ENGLISH: The page layout: heading, intro, project list.
 * LOGIC: <ProjectList projects={projects} /> passes the array
 *   into the component as a prop.
 * WHY WE NEED IT: Next.js shows whatever this function returns
 *   at "/".
 * LEARNING GAP: The intro says "I am" instead of "I'm" on
 *   purpose. Next.js's ESLint rules flag a plain apostrophe (')
 *   in page text as an error.
 * ---------------------------------------------------------- */
export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I am a software development student learning full-stack web development with Next.js and React. Here are some of the projects I have built.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}