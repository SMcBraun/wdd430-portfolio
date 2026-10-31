/* ==========================================================
 * components/SkillCard.tsx — My custom component
 * PLAIN ENGLISH: A card showing a skill category and a list of
 *   skills in it (for example, "Front-End": HTML, CSS, React).
 * LOGIC: Receives props (title + skills array) → shows the
 *   title and a list of skills.
 * WHY WE NEED IT: Assignment requirement: my own reusable
 *   Server Component with typed props and Tailwind styling.
 * LEARNING GAP: The interface defines the props' types.
 *   skills.map() creates one <li> per skill, and each needs a
 *   unique "key". No 'use client' (Server Component).
 * ========================================================== */
interface SkillCardProps {
  title: string;
  skills: string[];
}

export default function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <article className="p-4 rounded border border-gray-200 bg-white shadow-sm">
      <h3 className="text-xl font-bold mb-2 text-blue-700">{title}</h3>
      <ul className="list-disc list-inside text-gray-700">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </article>
  );
}
