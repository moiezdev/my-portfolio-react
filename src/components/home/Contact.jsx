import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';
import { ThemeProvider, FloatingLabel } from 'flowbite-react';
import ContactSection from './Contact/ContactSection';

const Contact = () => {
  return (
    <section className="w-full px-4 py-12" id="projects">
      <div className="app-container mx-auto">
        <SectionTitle title="contacts" />
        <ContactSection />
      </div>
    </section>
  );
};

export default Contact;
