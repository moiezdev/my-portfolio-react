import { useEffect, useRef } from 'react';

const ParallaxBackground = ({ imageUrl }) => {
  const bgRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const offset = window.scrollY * 0.3; // slower scroll
        bgRef.current.style.transform = `translateY(${offset}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={bgRef}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
  );
};

export default ParallaxBackground;
