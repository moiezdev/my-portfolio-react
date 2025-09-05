import { useSelector } from 'react-redux';

export default function Projects() {
  const projects = useSelector((state) => state.portfolio.projects);

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.id} className="p-4 border rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
