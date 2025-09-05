import Card from '../ui/Card';
import SectionTitle from '../ui/SectionTitle';

const Skills = () => {
  const skills = [
    {
      category: 'Programming Languages',
      items: ['JavaScript', 'TypeScript', 'Python'],
    },
    {
      category: 'Frameworks & Libraries',
      items: ['React', 'Vue', 'NextJs', 'NuxtJs', 'TailwindCSS', 'MaterialUI', 'Node', 'Express'],
    },
    {
      category: 'Databases',
      items: ['MongoDB', 'MySQL'],
    },
    {
      category: 'Tools & Platforms',
      items: ['Git', 'GitHub', 'GitLab', 'Vite', 'Vercel', 'Netlify'],
    },
    {
      category: 'Design & Prototyping',
      items: ['Figma', 'Adobe XD', 'Sketch'],
    },
    {
      category: 'Other Skills',
      items: ['HTML5', 'CSS3', 'Agile Methodologies', 'Test-Driven Development'],
    },
  ];
  return (
    <section className="w-full px-4 py-12" id="projects">
      <div className="app-container mx-auto">
        {/* Title */}
        <SectionTitle title="skills" />
        <div className="grid gap-8 lg:grid-cols-7">
          <div className="col-span-3 p-5 hidden lg:block">
            <img className="w-full" src="/skillsSection/skills-bg.png" alt="" />
          </div>
          <div className="lg:col-span-4 grid gap-[16px] md:grid-cols-3">
            {/* skill cards here */}
            {[1, 2, 3].map((box, i) => (
              <div className="flex gap-[16px] flex-col" key={i}>
                {skills.map((skill, index) => {
                  if (index % 3 !== i) return null;
                  return (
                    <div
                      className="border basis-1/3 border-gray-a hover:shadow-lg transition-shadow duration-300"
                      key={index}
                    >
                      <div className="flex flex-col">
                        <h2 className="font-semibold text-white border-b border-gray-a p-[8px]">
                          {skill.category}
                        </h2>
                        <div className="flex flex-wrap gap-[8px] p-[8px] mt-0">
                          {skill.items.map((item, idx) => (
                            <span className="px-2.5 py-0.5 bg-gray-a/20" key={idx}>
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
