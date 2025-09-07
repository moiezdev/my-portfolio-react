import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import TypingText from '../ui/TypingText';
import Button from '../ui/Button';
import Logo from '../ui/Logo';
import FloatingDotBox from '../ui/animatedSvgs/FloatingDotBox';

const Hero = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Heading entrance
      tl.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
      });

      // Paragraph entrance
      tl.from(paragraphRef.current, { y: 20, opacity: 0, duration: 0.8 }, '-=0.5');

      // Button entrance
      tl.from(buttonRef.current, { y: 20, opacity: 0, duration: 0.8 }, '-=0.5');

      // Hover magnifying effect
      const headingEl = headingRef.current;
      const handleMouseMove = (e) => {
        const rect = headingEl.getBoundingClientRect();
        const offsetX = (e.clientX - (rect.left + rect.width / 2)) * 0.02;
        const offsetY = (e.clientY - (rect.top + rect.height / 2)) * 0.02;
        gsap.to(headingEl, {
          x: offsetX,
          y: offsetY,
          scale: 1.03,
          duration: 0.3,
          ease: 'power2.out',
        });
      };
      const handleMouseLeave = () => {
        gsap.to(headingEl, { x: 0, y: 0, scale: 1, duration: 0.5, ease: 'power3.out' });
      };

      headingEl.addEventListener('mousemove', handleMouseMove);
      headingEl.addEventListener('mouseleave', handleMouseLeave);

      // Cleanup
      return () => {
        headingEl.removeEventListener('mousemove', handleMouseMove);
        headingEl.removeEventListener('mouseleave', handleMouseLeave);
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="flex flex-col items-center justify-center lg:max-h-[800px] gap-6 px-4 overflow-visible">
      <div className="app-container mx-auto grid grid-cols-1 md:grid-cols-9 items-center justify-center gap-6 pt-[80px] md:pt-[123px] md:pb-[80px]">
        {/* right section */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <h1 ref={headingRef} className="text-xlarge font-semibold cursor-pointer">
            Moiz Dev is a <span className="text-primary">{'<Full Stack/>'}</span> <br />
            Developer
          </h1>
          <p ref={paragraphRef} className="text-lg md:text-2xl max-w-2xl">
            Specialities: React, Vue, Tailwind CSS, Node.js, Express and more. Let's build together!
          </p>
          <div ref={buttonRef}>
            <Button primary={true}>{'Contact me!!'}</Button>
          </div>
        </div>
        <div className="md:col-span-4 flex flex-col align-middle relative">
          {/* Floating SVGs and Image */}

          <div className="absolute top-1/4 left-0 translate-x -translate-y-1/2 z-0">
            <Logo
              size={170}
              animate={true}
              animationStyle="draw-floating"
              repeat={1}
              duration={2}
              floatDuration={4}
            />
          </div>
          <div className="absolute bottom-1 right-0 translate-x -translate-y-1/2">
            <FloatingDotBox animate={true} dotSize={2} />
          </div>

          {/* Floating SVGs and Image end */}

          <img
            src="/heroSection/hero-img.png"
            alt="Moiz"
            className="w-[80%] ml-auto mr-[10%] z-10"
          />
          <div className="border inline-block border-gray-a p-1 mx-auto">
            <span className="bg-primary h-[16px] aspect-square inline-block mb-[-2px] mr-1"></span>
            Currently working on <span className="text-white">LMS project</span>
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
