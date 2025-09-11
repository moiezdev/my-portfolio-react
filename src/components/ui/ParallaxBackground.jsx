import { useEffect, useRef } from 'react';

const ParallaxBackground = ({ imageUrl, className }) => {
  const bgRef = useRef(true);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const offset = window.scrollY * 0.2; // slower scroll
        bgRef.current.style.transform = `translateY(${offset}px)`;
      }
    };
    window.scrollTo({
      top: 1,
      left: 0,
      behavior: 'smooth', // or "auto" if you don’t want animation
    });
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={bgRef}
      className={`absolute top-0 left-0 w-full h-full -z-10 bg-no-repeat bg-cover ${className}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
  );
};

export default ParallaxBackground;
