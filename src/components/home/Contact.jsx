import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';

const Contact = () => {
  const contacts = [
    {
      platform: 'LinkedIn',
      handle: '@moizdev',
      url: 'https://www.linkedin.com/in/moizdev/',
      icon: '/socialMediaIcons/Linkedin.svg',
    },
    {
      platform: 'Gmail',
      handle: 'moiezdev@gmail',
      url: 'mailto:moiezdev@gmail',
      icon: '/socialMediaIcons/Email.svg',
    },
    // Add more contacts as needed
  ];
  return (
    <section className="w-full px-4 py-12" id="projects">
      <div className="app-container mx-auto">
        <SectionTitle title="contacts" />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="">
            <p className="mb-6">
              I’m interested in freelance opportunities. However, if you have other request or
              question, don’t hesitate to contact me.
            </p>
            <div className="border border-gray-a inline-flex flex-col gap-4 p-[16px]">
              <h3>Message Me Directly</h3>
              {contacts.map((contact, index) => (
                <a
                  className="flex items-center gap-2 cursor-pointer"
                  href={contact.url}
                  key={index}
                >
                  <img src={contact.icon} alt="" />
                  {contact.handle}
                </a>
              ))}
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
