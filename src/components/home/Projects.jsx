import Card from '../ui/Card';
import SectionTitle from '../ui/SectionTitle';

const Projects = () => {
  return (
    <section className="w-full px-4 py-12" id="projects">
      <div className="app-container mx-auto">
        {/* component title */}
        <SectionTitle title="projects" buttonText="View all" link="/projects" />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Project Title"
            description="This is a brief description of the project."
            techStack={['React', 'TailwindCSS', 'Node.js']}
            liveLink="https://example.com"
            image="/projects-media/AAtourism/main.png"
            altText="Project image"
          />
          <Card
            title="Project Title"
            description="This is a brief description of the project."
            techStack={['React', 'TailwindCSS', 'Node.js']}
            liveLink="https://example.com"
            image="/projects-media/AAtourism/main.png"
            altText="Project image"
          />
          <Card
            title="Project Title"
            description="This is a brief description of the project."
            techStack={['React', 'TailwindCSS', 'Node.js']}
            liveLink="https://example.com"
            image="/projects-media/AAtourism/main.png"
            altText="Project image"
          />
        </div>
      </div>
    </section>
  );
};
export default Projects;
