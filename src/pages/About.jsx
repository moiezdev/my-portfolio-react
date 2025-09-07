import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { useSelector } from 'react-redux';

const About = () => {
  const skills = useSelector((state) => state.skills.skills);
  return (
    <section className="w-full px-4 py-12" id="projects">
      <div className="app-container mx-auto pt-[80px] md:py-[60px]">
        {/* component title */}
        <SectionTitle hash={'/'} title="about-me" buttonText="View all" link="/about" />
        <p className="mt-[-20px] mb-[50px]">List of projects</p>

        <div className="grid md:gap-[60px] lg:gap-[97px] md:grid-cols-9">
          <div className="md:col-span-5 order-2 md:order-1 flex flex-col justify-center">
            <h3 className="my-6">Moiz Dev</h3>
            <p className="mb-6">
              Hello, i’m Elias! I’m a self-taught front-end developer based in Kyiv, Ukraine. I can
              develop responsive websites from scratch and raise them into modern user-friendly web
              experiences.
            </p>
            <p className="mb-6">
              Transforming my creativity and knowledge into a websites has been my passion for over
              a year. I have been helping various clients to establish their presence online. I
              always strive to learn about the newest technologies and frameworks.
            </p>
          </div>
          <div className="md:col-span-4 order-1 md:order-2 relative">
            {/* <div className="absolute w-full h-full bg-gray-b/30"></div> */}
            <img className="w-full" src="/aboutSection/about-img.png" alt="" />
          </div>
        </div>

        <div className="mt-[80px]">
          <SectionTitle title="skills" />
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

export default About;
