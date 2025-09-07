import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import ContactSection from '../components/home/Contact/ContactSection';

const Contact = () => {
  return (
    <section className="w-full px-4 py-12" id="projects">
      <div className="app-container mx-auto pt-[80px] md:py-[60px]">
        {/* component title */}
        <SectionTitle hash={'/'} title="contacts" />
        <p className="mt-[-20px] mb-[50px]">List of projects</p>
        <ContactSection />
      </div>
    </section>
  );
};

export default Contact;
