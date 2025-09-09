import Card from '../ui/Card';
import SectionTitle from '../ui/SectionTitle';
import { useSelector } from 'react-redux';
import FloatingDotBox from '../ui/animatedSvgs/FloatingDotBox';
import Logo from '../ui/Logo';
// import { useEffect, useState } from 'react';
import Floating from '../ui/Floating';
import Magnetic from '../ui/Magnetic';

const Skills = () => {
  // const [colors, setColors] = useState({});
  // // Get root element
  // const root = document.documentElement;

  // const getVar = (name) => getComputedStyle(root).getPropertyValue(name).trim();

  // useEffect(() => {
  //   setColors({
  //     primaryColor: getVar('--color-primary'),
  //   });
  //   console.log(colors.primaryColor, 'primaryColor');
  // }, []);

  const skills = useSelector((state) => state.skills.skills);
  return (
    <section className="w-full px-4 py-12" id="projects">
      <div className="app-container mx-auto">
        {/* Title */}
        <SectionTitle title="skills" />
        <div className="grid gap-8 lg:grid-cols-7">
          <div className="col-span-3 p-5 hidden lg:block relative">
            <div className="border inline-block border-gray-a p-1 mx-auto mb-4 cursor-pointer cursor-white cursor-scale-1.7">
              <span className="bg-primary h-[16px] aspect-square inline-block mb-[-2px] mr-1"></span>
              These are my technical skills
            </div>

            {/* Floating SVGs and Image */}

            <div className="absolute bottom-1 left-0 translate-x -translate-y-1/2 z-0 cursor-pointer cursor-white cursor-scale-0">
              <Magnetic strength={0.2}>
                <Logo
                  size={170}
                  animate={true}
                  animationStyle="draw-floating"
                  repeat={1}
                  duration={2}
                  floatDuration={5}
                />
              </Magnetic>
            </div>

            <div className="absolute bottom-1/5 right-1/3 translate-x -translate-y-1/2">
              <Magnetic strength={0.1} duration={0.5}>
                <FloatingDotBox animate={true} dotSize={2} rows={4} cols={5} duration={9} />
              </Magnetic>
            </div>

            <div className="absolute top-1/3 left-2 translate-x -translate-y-1/2">
              <Magnetic strength={0.1} duration={0.5}>
                <FloatingDotBox
                  animate={true}
                  dotSize={2}
                  rows={7}
                  cols={7}
                  duration={12}
                  floatDistance={8}
                />
              </Magnetic>
            </div>

            <div className="absolute top-1/3 right-1/7 translate-x -translate-y-1/2">
              <Magnetic strength={0.1} duration={0.5}>
                <Floating duration={8}>
                  <div className="w-[100px] h-[100px] border border-gray-a hover:bg-gray-a/10 transition-colors"></div>
                </Floating>
              </Magnetic>
            </div>

            <div className="absolute bottom-1/14 right-4 translate-x -translate-y-1/2">
              <Magnetic strength={0.1} duration={0.5}>
                <Floating duration={8}>
                  <div className="w-[65px] h-[65px] border border-gray-a hover:bg-gray-a/10 transition-colors"></div>
                </Floating>
              </Magnetic>
            </div>
            {/* Floating SVGs and Image end */}
            {/* <img className="w-full" src="/skillsSection/skills-bg.png" alt="" /> */}
          </div>
          <div className="lg:col-span-4 grid gap-[16px] md:grid-cols-3">
            {/* skill cards here */}
            {[1, 2, 3].map((box, i) => (
              <div className="flex gap-[16px] flex-col" key={i}>
                {skills.map((skill, index) => {
                  if (index % 3 !== i) return null;
                  return (
                    <Floating duration={5} key={index}>
                      <Magnetic strength={0.1} duration={0.5}>
                        <div className="border basis-1/3 border-gray-a hover:shadow-lg transition-shadow duration-300 w-full">
                          <div className="flex flex-col">
                            <h2 className="font-semibold text-white border-b border-gray-a p-[8px] cursor-pointer cursor-white cursor-scale-1">
                              {skill.category}
                            </h2>
                            <div className="flex flex-wrap gap-[8px] p-[8px] mt-0">
                              {skill.items.map((item, idx) => (
                                <span
                                  className="px-2.5 py-0.5 bg-gray-a/20 hover:scale-110 transition-all cursor-pointer cursor-scale-0 hover:bg-primary/20"
                                  key={idx}
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Magnetic>
                    </Floating>
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
