import TypingText from '../ui/TypingText';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center lg:max-h-[800px] gap-6 px-4 overflow-visible">
      <div className="app-container mx-auto grid grid-cols-1 md:grid-cols-9 items-center justify-center gap-6  pt-[80px] md:py-[123px]">
        <div className="md:col-span-5 flex flex-col gap-4">
          <h1 className="text-xlarge font-semibold">
            Moiz Dev is a{' '}
            <span className="text-primary">
              <TypingText text="<FullStack/>" />
            </span>{' '}
            <br />
            Developer
            {/* <span className="text-primary">#JavaScript Specialist</span> */}
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl">
            Specialities: React, Vue, Tailwind CSS, Node.js, Express and more. Let's build together!
          </p>
          <div>
            <Button primary={true}>{'Contact me!!'}</Button>
          </div>
        </div>
        <div className="md:col-span-4">
          <div className="flex flex-col align-middle">
            {/* image here */}
            <img src="/heroSection/hero-img.png" alt="Moiz" className="w-full" />
            <div className="border inline-block border-gray-a p-1 mx-auto">
              <span className="bg-primary h-[16px] aspect-square inline-block mb-[-2px] mr-1"></span>
              Currently working on <span className="text-white">LMS project</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="border border-gray-a relative p-[32px] text-white text-large">
          <img
            className="bg-gray-b w-[41px] absolute top-[-15px] left-[10px]"
            src="commas.svg"
            alt=""
          />
          <p>When life gives you lemons, order pizza instead.</p>
          <img
            className="bg-gray-b w-[41px] absolute bottom-[-15px] right-[10px]"
            src="commas.svg"
            alt=""
          />
        </div>
        <div className="border border-gray-a p-[16px] inline-block mt-[-1px]">
          <p>- Uncle Bob</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
