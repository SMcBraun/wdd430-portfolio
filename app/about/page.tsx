import SkillCard from '@/components/SkillCard';

/* About page (URL: /about). File-based routing: app/about/page.tsx = /about.
   Uses my custom SkillCard component 3 times with different props. */
export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700 mb-8">
        I am a software development student at BYU-Pathway, building my skills in front-end and back-end web development. I also work as a risk adjustment medical coder, which taught me to pay close attention to detail and accuracy.
      </p>
      <section className="grid gap-4 md:grid-cols-3">
        <SkillCard title="Front-End" skills={['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS']} />
        <SkillCard title="Back-End" skills={['Node.js', 'Express', 'Next.js API routes']} />
        <SkillCard title="Databases" skills={['PostgreSQL', 'MongoDB', 'MySQL']} />
      </section>
    </main>
  );
}
