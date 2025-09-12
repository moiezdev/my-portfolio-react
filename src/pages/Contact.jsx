import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import ContactSection from '../components/home/Contact/ContactSection';
import Transition from '../components/functions/Transition';

const Contact = () => {
  return (
    <section className="w-full px-4 py-12" id="projects">
      <Transition>
        <div className="app-container mx-auto pt-[30px] md:py-[60px]">
          {/* component title */}
          <SectionTitle hash={'/'} title="contacts" />
          <p className="mt-[-20px] md:mb-[50px] max-md:mb-6">
            Contact me for professional advice, free of charge!
          </p>
          <ContactSection />
        </div>
      </Transition>
    </section>
  );
};

export default Contact;
