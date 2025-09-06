import Card from '../components/ui/Card';
import SectionTitle from '../components/ui/SectionTitle';
import { useSelector } from 'react-redux';

const Projects = () => {
  const projects = useSelector((state) => state.projects.projects);
  return (
    <section className="w-full px-4 py-12" id="projects">
      <div className="app-container mx-auto pt-[80px] md:py-[60px]">
        {/* component title */}
        <SectionTitle hash={'/'} title="projects" buttonText="View all" link="/projects" />
        <p className="mt-[-20px] mb-[50px]">List of projects</p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Example Card component usage */}
          {projects.map((project, index) => (
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
