/* ==========================================================
 * components/ProjectCard.tsx — One project "card"
 * ----------------------------------------------------------
 * PLAIN ENGLISH: Shows ONE project: its title, description,
 *   technologies used, and an optional link.
 * LOGIC: Define the expected inputs (props) with a TypeScript
 *   interface → read them → return the card markup.
 * WHY WE NEED IT: The same card design is reused for every
 *   project. Change it once, and every card updates.
 * LEARNING GAP: Props = information passed INTO a component,
 *   like filling in the blanks on a form. This is a Server
 *   Component: no 'use client'.
 * ========================================================== */

/* ----------------------------------------------------------
 * ProjectCardProps — the "shape" of the inputs
 * PLAIN ENGLISH: A checklist of what each card needs.
 * LOGIC: title, description = text. technologies = a LIST of
 *   text (string[]). link?: the "?" means OPTIONAL.
 * WHY WE NEED IT: TypeScript warns you if a card is missing
 *   something or gets the wrong type, before the app runs.
 * LEARNING GAP: string[] = "an array of strings," for example
 *   ['React', 'Tailwind CSS']. Without "?", link would be
 *   required on every project.
 * ---------------------------------------------------------- */
interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}

/* ----------------------------------------------------------
 * ProjectCard component
 * PLAIN ENGLISH: Build the card using the props.
 * LOGIC:
 *   - { title, description, technologies, link } pulls each
 *     value out of the props (called "destructuring").
 *   - technologies.join(', ') turns ['A', 'B'] into "A, B".
 *   - {link && (...)} = only show the link IF one was given
 *     (called "conditional rendering").
 * WHY WE NEED IT: Displays each project consistently.
 * LEARNING GAP: Use <a> here (not <Link>) because project links
 *   go to OUTSIDE websites like GitHub or Render.
 *   target="_blank" opens a new tab, and
 *   rel="noopener noreferrer" is a safety setting that goes
 *   with it.
 * ---------------------------------------------------------- */
export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
    return (
        <article className="p-4 border-l-4 border-blue-600 bg-gray-50 rounded">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-700 mb-3">{description}</p>
            <p className="text-sm text-gray-600">
                <strong>Technologies:</strong> {technologies.join(', ')}
            </p>
            {link && (
                <p className="mt-2">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                        View Project
                    </a>
                </p>
            )}
        </article>
    );
}