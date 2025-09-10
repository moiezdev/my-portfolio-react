import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import ContactSection from '../components/home/Contact/ContactSection';
import Transition from '../components/functions/Transition';
import ParallaxBackground from '../components/ui/ParallaxBackground';

const Contact = () => {
  return (
    <section className="w-full px-4 py-12" id="projects">
      <ParallaxBackground imageUrl={'/background.png'} />
      <Transition>
        <div className="app-container mx-auto pt-[80px] md:py-[60px]">
          {/* component title */}
          <SectionTitle hash={'/'} title="contacts" />
          <p className="mt-[-20px] mb-[50px]">
            Contact me for professional advice, free of charge!
          </p>
          <ContactSection />
        </div>
      </Transition>
    </section>
  );
};

export default Contact;
