import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';
import { ThemeProvider, FloatingLabel, createTheme } from 'flowbite-react';
import { useSelector } from 'react-redux';

const Contact = () => {
  const input = createTheme({
    input: {
      default: {
        outlined: {
          sm: 'border border-gray-a text-normal focus:border-primary focus:outline-none focus:ring-0 dark:border-gray-a text-white dark:text-white dark:focus:border-primary rounded-none',
          md: 'border border-gray-a text-normal focus:border-primary focus:outline-none focus:ring-0 dark:border-gray-a text-white dark:text-white dark:focus:border-primary rounded-none',
        },
      },
    },
    label: {
      default: {
        outlined: {
          sm: 'peer-focus:text-primary dark:peer-focus:text-primary dark:bg-gray-b dark:text-gray-a text-normal',
          md: 'peer-focus:text-primary dark:peer-focus:text-primary dark:bg-gray-b dark:text-gray-a text-normal',
        },
      },
    },
  });
  const contacts = useSelector((state) => state.contacts.contacts);
  return (
    <section className="w-full px-4 py-12" id="projects">
      <div className="app-container mx-auto">
        <SectionTitle title="contacts" />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col justify-between">
            <p className="my-6">
              I’m interested in freelance opportunities. However, if you have other request or
              question, don’t hesitate to contact me.
            </p>
            <div>
              <div className="border border-gray-a inline-flex flex-col gap-4 p-[16px]">
                <h3>Message Me Directly</h3>
                {contacts.map((contact, index) => (
                  <a
                    className="flex items-center gap-2 cursor-pointer"
                    href={contact.url}
                    target="_blank"
                    key={index}
                  >
                    <img src={contact.icon} alt="" />
                    {contact.handle}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div>
            <ThemeProvider theme={input}>
              <form action="">
                <div className="flex flex-col gap-4">
                  <FloatingLabel theme={input} variant="outlined" label="Your Name" />
                  <FloatingLabel theme={input} variant="outlined" label="Your Email" type="email" />
                  <FloatingLabel theme={input} variant="outlined" label="Subject" />
                  <div className="relative">
                    <textarea
                      id="contactMessage"
                      className="peer block w-full h-50 p-3 appearance-none border bg-transparent px-2.5 pb-2.5 pt-4 text-sm focus:outline-none focus:ring-0 dark:text-white border-gray-a focus:border-primary dark:border-gray-a text-white dark:focus:border-primary rounded-none"
                      placeholder=" "
                    ></textarea>
                    <label
                      htmlFor="contactMessage"
                      className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-sm transition-transform duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-primary dark:peer-focus:text-primary dark:bg-gray-b dark:text-gray-a text-normal"
                    >
                      Your Message Here
                    </label>
                  </div>
                  <div>
                    <Button primary={true}>Send Message</Button>
                  </div>
                </div>
              </form>
            </ThemeProvider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
