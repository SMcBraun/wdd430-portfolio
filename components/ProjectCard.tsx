/* ==========================================================
 * components/ProjectCard.tsx — One project "card"
 * ----------------------------------------------------------
 * PLAIN ENGLISH: Shows ONE project: a color stripe, its title,
 *   description, technology "pills", and a button link.
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
 * PLAIN ENGLISH: Builds the card from the props.
 * LOGIC:
 *   - The top stripe is a coral → sunny → lagoon gradient.
 *   - "hover:-translate-y-1 hover:shadow-xl" lifts the card a
 *     little when the mouse is over it.
 *   - technologies.map() turns each technology into its own
 *     rounded "pill". Each pill needs a unique key.
 *   - {link && (...)} shows the button ONLY if a link exists.
 * WHY WE NEED IT: Pills and a real button are easier to scan
 *   and more inviting than a plain comma list and text link.
 * LEARNING GAP: The "sr-only" span is hidden on screen but read
 *   by screen readers, so each button has a unique name ("View
 *   Project: Shuffle My Style") even though every button LOOKS
 *   the same. Regular <a> (not Link) because these go to
 *   OUTSIDE websites. rel="noopener noreferrer" keeps the new
 *   tab from controlling this page.
 * ---------------------------------------------------------- */
export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
    return (
        <article className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md hover:-translate-y-1 hover:shadow-xl transition duration-300">
            <div aria-hidden="true" className="h-2 bg-gradient-to-r from-coral via-sunny to-lagoon" />
            <div className="flex flex-col flex-1 p-6">
                <h3 className="font-heading text-2xl font-bold text-ink mb-3">{title}</h3>
                <p className="text-slate-600 leading-relaxed mb-5">{description}</p>
                <ul className="flex flex-wrap gap-2 mb-6" aria-label={`Technologies used in ${title}`}>
                    {technologies.map((tech) => (
                        <li key={tech} className="px-3 py-1 rounded-full bg-mist text-lagoon-dark text-sm font-semibold">
                            {tech}
                        </li>
                    ))}
                </ul>
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto self-start px-5 py-2.5 rounded-full bg-lagoon-dark text-white font-heading font-semibold shadow hover:bg-ink transition"
                    >
                        View Project<span className="sr-only">: {title} (opens in a new tab)</span>
                        <span aria-hidden="true"> →</span>
                    </a>
                )}
            </div>
        </article>
    );
}