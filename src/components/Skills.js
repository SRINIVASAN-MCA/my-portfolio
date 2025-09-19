export default function Skills() {
  const skills = [
    "PHP", "Laravel", "Python", ".NET", "JavaScript", "React JS", "Vue JS",
    "HTML", "CSS", "Tailwind CSS", "Material UI",
    "MySQL", "SQL", "Git", "API Integration"
  ];

  return (
    <section id="skills" className="py-16 bg-gray-100 text-gray-900">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
      <div className="max-w-3xl mx-auto flex flex-wrap gap-3 justify-center">
        {skills.map((s, i) => (
          <span key={i} className="px-4 py-2 bg-blue-500 text-white rounded-full">{s}</span>
        ))}
      </div>
    </section>
  );
}
