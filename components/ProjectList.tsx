/* ==========================================================
 * components/ProjectList.tsx — The list of project cards
 * ----------------------------------------------------------
 * PLAIN ENGLISH: Takes a list of projects and shows a
 *   ProjectCard for each one.
 * LOGIC: Receive a "projects" array → loop over it with map()
 *   → render one <ProjectCard> per project.
 * WHY WE NEED IT: The Home page just hands over the data, and
 *   this component handles the layout. Later in the course,
 *   this data will come from a database instead of a list.
 * LEARNING GAP: This is "component composition": a component
 *   built FROM other components (ProjectList uses ProjectCard).
 *   Server Component: no 'use client'.
 * ========================================================== */

/* ----------------------------------------------------------
 * Import ProjectCard
 * PLAIN ENGLISH: Bring in the card we just built.
 * LOGIC: './ProjectCard' = same folder (components/).
 * WHY WE NEED IT: We render one card per project.
 * LEARNING GAP: No ".tsx" ending is needed in Next.js imports
 *   (different from your CSE 341 Express code, which needs .js).
 * ---------------------------------------------------------- */
import ProjectCard from './ProjectCard';

/* ----------------------------------------------------------
 * Project + ProjectListProps — the data shapes
 * PLAIN ENGLISH: "Project" describes one project.
 *   "ProjectListProps" says this component receives an ARRAY
 *   of them.
 * LOGIC: Project[] = "a list of Project objects."
 * WHY WE NEED IT: TypeScript checks the Home page sends the
 *   right kind of data.
 * LEARNING GAP: Project matches ProjectCardProps on purpose, so
 *   each project can be passed straight into a card.
 * ---------------------------------------------------------- */
interface Project {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}

interface ProjectListProps {
    projects: Project[];
}

/* ----------------------------------------------------------
 * ProjectList component
 * PLAIN ENGLISH: For every project, make a card.
 * LOGIC:
 *   - projects.map(...) = loop and return a card for each.
 *   - {...project} ("spread") passes ALL of the project's
 *     fields as props at once (title, description, etc.).
 *   - key={project.title} gives each card a unique ID so React
 *     can keep track of it.
 * WHY WE NEED IT: Adding a project = adding data, not code.
 * LEARNING GAP:
 *   - Forgetting "key" causes a warning in the browser console.
 *   - grid gap-4 md:grid-cols-2 = 1 column on phones,
 *     2 columns on medium+ screens (responsive design).
 * ---------------------------------------------------------- */
export default function ProjectList({ projects }: ProjectListProps) {
    return (
        <section className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
            ))}
        </section>
    );
}