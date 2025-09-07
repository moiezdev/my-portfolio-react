import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

const About = () => {
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
          <div className="md:col-span-4 order-1 md:order-2">
            <img className="w-full" src="/aboutSection/about-img.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
