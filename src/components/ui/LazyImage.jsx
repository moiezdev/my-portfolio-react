import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const LazyImage = ({
  src,
  blurSrc = `${src.split('.').slice(0, -1).join('.')}-blur.webp`,
  alt,
  className = 'w-full h-full',
  wrapperClass = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef();
  const blurRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // GSAP fade-in once image loads
  useEffect(() => {
    if (loaded && imgRef.current) {
      gsap.to(imgRef.current, { opacity: 1, duration: 0, ease: 'power2.out' });
      gsap.to(blurRef.current, {
        opacity: 0,
        duration: 0.6, // how smooth the fade is
        delay: 0.3, // wait before starting fade
        ease: 'power2.out',
      });
    }
  }, [loaded]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden w-full h-full ${wrapperClass}`}>
      {/* Shimmer placeholder */}
      <div ref={blurRef} className="absolute bg-transparent top-0 left-0 w-full h-full z-10">
        <img className={`${className} opacity-0 object-cover`} src={blurSrc} alt={blurSrc} />
      </div>

      {/* Actual image */}
      {isVisible && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className={`${className} opacity-0 object-cover`}
          onLoad={() => setLoaded(true)}
          loading="lazy"
        />
      )}
    </div>
  );
};

export default LazyImage;
