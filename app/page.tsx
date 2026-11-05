/* ==========================================================
 * app/page.tsx — Home page (URL: "/")
 * ----------------------------------------------------------
 * PLAIN ENGLISH: The first page visitors see: a warm welcome,
 *   three things I bring, and the projects I have built.
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
 * Imports
 * PLAIN ENGLISH: Bring in Next.js Link and my list component.
 * LOGIC: "@/" = shortcut for the project's top folder
 *   (the import alias "@/*" set up when the app was created).
 * WHY WE NEED IT: The page reuses the component instead of
 *   rebuilding cards by hand.
 * LEARNING GAP: "@/components/ProjectList" works from ANY
 *   folder, so there's no counting "../../" levels. Link is
 *   imported for the "About me" button (a page in this app).
 * ---------------------------------------------------------- */
import Link from 'next/link';
import ProjectList from '@/components/ProjectList';

/* ----------------------------------------------------------
 * My projects (the data)
 * PLAIN ENGLISH: Real projects I built, each with a title,
 *   description, technologies, and a link to the LIVE site.
 * LOGIC: An array of objects. Each object's fields match the
 *   Project interface in ProjectList.tsx.
 * WHY WE NEED IT: The assignment requires at least two real
 *   projects with accurate descriptions and working links.
 *   Live links let visitors try the app, not just read code.
 * LEARNING GAP:
 *   - If a field name is misspelled (for example "techs"
 *     instead of "technologies"), TypeScript shows an error.
 *   - Render's free plan "sleeps" when unused, so the Service
 *     Projects site can take up to a minute to wake up.
 * ---------------------------------------------------------- */
const projects = [
  {
    title: 'Shuffle My Style',
    description:
      'A closet outfit shuffler that mixes and matches clothes you already own. Users add items by category and color, shuffle three outfit ideas, see style inspiration photos, save favorites, and track how often each outfit is worn.',
    technologies: ['HTML', 'CSS', 'JavaScript (ES Modules)', 'localStorage', 'Unsplash API'],
    link: 'https://smcbraun.github.io/shuffle-my-style/',
  },
  {
    title: 'Service Projects Website',
    description:
      'A full-stack site for organizations and their community service projects, with user registration and login, admin-only pages, and a volunteer sign-up feature.',
    technologies: ['Node.js', 'Express', 'EJS', 'PostgreSQL', 'bcrypt', 'Render'],
    link: 'https://cse340-smcbraun.onrender.com',
  },
  {
    title: 'Conference Compass',
    description:
      'A General Conference study guide that groups talks by what you are facing, such as grief, peace, or strength. Each talk has a 30-second summary, a supporting scripture, a modern-day application, and a link to the full talk in the Gospel Library.',
    technologies: ['HTML', 'CSS', 'JavaScript (ES Modules)', 'JSON', 'Fetch API', 'localStorage'],
    link: 'https://smcbraun.github.io/wdd231/project/',
  },
];

/* ----------------------------------------------------------
 * What I bring (the data for the three "strength" tiles)
 * PLAIN ENGLISH: Three short facts that show who I am, each
 *   with an emoji and a color.
 * LOGIC: An array of objects → map() turns each one into a
 *   tile, the same pattern as the projects list.
 * WHY WE NEED IT: Visitors remember a person, not just a list
 *   of projects. These tiles make the page personal.
 * LEARNING GAP: "tile" holds Tailwind class names as text. The
 *   full class names must be written out (like "bg-blush").
 *   Tailwind cannot find classes built from pieces like
 *   "bg-" + color.
 * ---------------------------------------------------------- */
const strengths = [
  {
    emoji: '🔍',
    title: 'Detail-minded',
    text: 'Years of reviewing medical records as a risk adjustment coder taught me to catch the small things.',
    tile: 'bg-blush',
  },
  {
    emoji: '🌺',
    title: 'Island-grown creativity',
    text: 'I love bright, friendly designs that make people feel welcome the moment a page loads.',
    tile: 'bg-sunny/30',
  },
  {
    emoji: '💡',
    title: 'Always learning',
    text: 'Back in school for software development and building something new every week.',
    tile: 'bg-mist',
  },
];

/* ----------------------------------------------------------
 * Home page component
 * PLAIN ENGLISH: The page layout: a welcome "hero" section,
 *   my three strengths, then my project cards.
 * LOGIC:
 *   - Hero: two soft color glows (decoration only), a welcome
 *     badge, my name in a sunrise gradient, an intro, and two
 *     buttons.
 *   - "See my projects" is an <a href="#projects"> because it
 *     jumps to a spot on THIS page (the section with
 *     id="projects").
 *   - "About me" uses <Link> because it goes to another page
 *     inside this app.
 *   - <ProjectList projects={projects} /> passes the array
 *     into the component as a prop.
 * WHY WE NEED IT: Next.js shows whatever this function returns
 *   at "/". A warm welcome makes visitors want to keep reading.
 * LEARNING GAP: Page text avoids plain apostrophes (I am, not
 *   I'm) on purpose. Next.js's ESLint rules flag a plain (') in
 *   page text as an error. bg-clip-text + text-transparent is
 *   how Tailwind fills TEXT with a gradient.
 * ---------------------------------------------------------- */
export default function Home() {
  return (
    <main>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-coral/30 blur-3xl" />
        <div aria-hidden="true" className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-lagoon/30 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 py-20 md:py-28 text-center">
          <p className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white shadow-sm font-heading font-semibold text-coral-dark">
            <span aria-hidden="true">🌺 </span>Aloha and welcome!
          </p>

          <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-ink leading-tight mb-6">
            Hi, I am{' '}
            <span className="bg-gradient-to-r from-coral-dark via-coral to-lagoon-dark bg-clip-text text-transparent">
              Sina McBraun
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed mb-10">
            I build friendly, helpful web apps that solve everyday problems, from picking
            an outfit to finding comfort in a General Conference talk. I am a software
            development student learning full-stack web development with Next.js and React.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="px-7 py-3 rounded-full bg-lagoon-dark text-white font-heading font-semibold shadow-lg hover:bg-ink hover:-translate-y-0.5 transition"
            >
              See my projects
            </a>
            <Link
              href="/about"
              className="px-7 py-3 rounded-full bg-white text-coral-dark font-heading font-semibold shadow-lg ring-2 ring-coral hover:bg-blush hover:-translate-y-0.5 transition"
            >
              About me
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- WHAT I BRING ---------- */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="sr-only">What I bring</h2>
        <ul className="grid gap-6 md:grid-cols-3">
          {strengths.map((item) => (
            <li key={item.title} className={`${item.tile} rounded-2xl p-6 shadow-sm`}>
              <span aria-hidden="true" className="text-4xl">{item.emoji}</span>
              <h3 className="font-heading text-xl font-bold text-ink mt-3 mb-2">{item.title}</h3>
              <p className="text-slate-700 leading-relaxed">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- PROJECTS ---------- */}
      <section id="projects" className="scroll-mt-24 max-w-5xl mx-auto px-4 pb-8">
        <div className="text-center mb-10">
          <p className="font-heading font-semibold text-lagoon-dark uppercase tracking-widest text-sm mb-2">
            My work
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink">
            Things I have built
          </h2>
        </div>
        <ProjectList projects={projects} />
      </section>
    </main>
  );
}