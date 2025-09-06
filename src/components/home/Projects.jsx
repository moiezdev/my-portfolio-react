import Card from '../ui/Card';
import SectionTitle from '../ui/SectionTitle';
import { useSelector } from 'react-redux';

const Projects = () => {
  const projects = useSelector((state) => state.projects.projects);
  return (
    <section className="w-full px-4 py-12" id="projects">
      <div className="app-container mx-auto">
        {/* component title */}
        <SectionTitle title="projects" buttonText="View all" link="/projects" />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Example Card component usage */}
          {projects.slice(0, 3).map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.subtitle}
              techStack={project.technologies}
              liveLink={project.projectUrl}
              image={project.imageUrl}
              altText={`${project.title} image`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
