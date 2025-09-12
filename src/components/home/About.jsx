import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';
import { useSelector } from 'react-redux';
import LazyImage from '../ui/LazyImage';
import Floating from '../ui/Floating';

const About = () => {
  const about = useSelector((state) => state.about.about);
  return (
    <section className="w-full px-4 py-12" id="projects">
      <div className="app-container mx-auto">
        <SectionTitle title="about me" />
        <div className="grid md:gap-[60px] lg:gap-[97px] md:grid-cols-9">
          <div className="md:col-span-5 order-2 md:order-1 flex flex-col">
            <h3 className="my-6 cursor-pointer cursor-white cursor-scale-1.2 text-large">
              {about.title}
            </h3>
            {about.description.map((p, idx) => (
              <p className="mb-6 cursor-pointer cursor-white cursor-scale-1.2" key={idx}>
                {p}
              </p>
            ))}
          </div>
          <div className="md:col-span-4 order-1 md:order-2 relative">
            <Floating className="w-full h-full">
              <LazyImage
                wrapperClass="w-full h-full"
                className="w-full object-cover grayscale-100 cursor-pointer cursor-white cursor-scale-3"
                src="/aboutSection/about-img.webp"
                alt=""
              />
            </Floating>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
