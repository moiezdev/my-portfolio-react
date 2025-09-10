import TypingText from '../ui/TypingText';
import Button from '../ui/Button';
import Logo from '../ui/Logo';
import FloatingDotBox from '../ui/animatedSvgs/FloatingDotBox';
import Magnetic from '../ui/Magnetic';
import LazyImage from '../ui/LazyImage';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center lg:max-h-[800px] gap-6 px-4 overflow-visible">
      <div className="app-container mx-auto grid grid-cols-1 md:grid-cols-9 items-center justify-center gap-6 pt-[80px] md:pt-[123px] md:pb-[80px]">
        {/* right section */}
        <div className="md:col-span-5 flex flex-col gap-4 cursor-pointer cursor-white">
          <h1 className="text-xlarge font-semibold cursor-pointer cursor-white cursor-scale-2">
            Moiz Dev is a <br className="block lg:hidden" />{' '}
            <span className="text-primary">{'<Full Stack/>'}</span> <br />
            Developer
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl cursor-pointer cursor-white cursor-scale-1.5">
            Specialities: React, Vue, Tailwind CSS, Node.js, Express and more. Let's build together!
          </p>
          <div>
            <Button primary={true}>{'Contact me!!'}</Button>
          </div>
        </div>
        <div className="md:col-span-4 flex flex-col align-middle relative">
          {/* Floating SVGs and Image */}

          <div className="absolute top-1/3 left-0 translate-x -translate-y-1/2 cursor-pointer cursor-white cursor-scale-0">
            <Magnetic strength={0.2}>
              <Logo
                className={'w-[170px]'}
                size={170}
                animate={true}
                animationStyle="draw-floating"
                repeat={1}
                duration={2}
                floatDuration={4}
              />
            </Magnetic>
          </div>

          <div className="absolute bottom-1 right-0 translate-x -translate-y-1/2">
            <Magnetic strength={0.4}>
              <FloatingDotBox animate={true} dotSize={2} />
            </Magnetic>
          </div>

          {/* Floating SVGs and Image end */}

          <LazyImage
            src="/heroSection/hero-img.webp"
            alt="Moiz"
            className="w-[80%] ml-auto mr-[10%] aspect-square"
          />
          <div className="absolute top-full left-1/2 -translate-x-1/2 border border-gray-a inline-flex items-center p-1 mx-auto cursor-pointer cursor-white w-max">
            <span className="bg-primary h-[16px] aspect-square inline-block mb-[-2px] mr-1"></span>
            <p className="flex gap-1">
              Currently working on <span className="text-white">LMS project</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="border border-gray-a relative p-[32px] text-white text-large cursor-pointer cursor-white cursor-scale-3.7">
          <img
            className="bg-gray-b w-[41px] absolute top-[-15px] left-[10px]"
            src="commas.svg"
            alt=""
          />
          <Magnetic strength={0.02}>
            <p>Frontend is where dreams become screens.</p>
          </Magnetic>
          <img
            className="bg-gray-b w-[41px] absolute bottom-[-15px] right-[10px]"
            src="commas.svg"
            alt=""
          />
        </div>
        <div className="border border-gray-a p-[16px] inline-block mt-[-1px] cursor-pointer cursor-white cursor-scale-2">
          <p>--- Mr Unknown</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
