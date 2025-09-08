import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';

const About = () => {
  return (
    <section className="w-full px-4 py-12" id="projects">
      <div className="app-container mx-auto">
        <SectionTitle title="about me" />
        <div className="grid md:gap-[60px] lg:gap-[97px] md:grid-cols-9">
          <div className="md:col-span-5">
            <h3 className="my-6 cursor-pointer cursor-white cursor-scale-2">Moiz Dev</h3>
            <p className="mb-6 cursor-pointer cursor-white cursor-scale-2">
              Hello, i’m Elias! I’m a self-taught front-end developer based in Kyiv, Ukraine. I can
              develop responsive websites from scratch and raise them into modern user-friendly web
              experiences.
            </p>
            <p className="mb-6 cursor-pointer cursor-white cursor-scale-2">
              Transforming my creativity and knowledge into a websites has been my passion for over
              a year. I have been helping various clients to establish their presence online. I
              always strive to learn about the newest technologies and frameworks.
            </p>
            <Link to={'/about'}>
              <Button primary={true}>Read More ~~{'>'}</Button>
            </Link>
          </div>
          <div className="md:col-span-4">
            <img className="w-full" src="/aboutSection/about-img.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
