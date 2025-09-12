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
    if (loaded && imgRef.current && blurRef.current) {
      gsap.to(imgRef.current, { opacity: 1, duration: 0.6, ease: 'power2.out' });
      gsap.to(blurRef.current, { opacity: 0, duration: 0.6, ease: 'power2.out' });
    }
  }, [loaded]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${wrapperClass}`}>
      {/* Blur image - always present */}
      <img
        ref={blurRef}
        src={blurSrc}
        alt={`blur-${alt}`}
        className={`${className} absolute top-0 left-0 object-cover w-full h-full`}
        style={{ opacity: 1 }}
      />

      {/* Actual image - load lazily */}
      {isVisible && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className={`${className} absolute top-0 left-0 object-cover w-full h-full`}
          style={{ opacity: 0 }}
          onLoad={() => setLoaded(true)}
          loading="lazy"
        />
      )}
    </div>
  );
};

export default LazyImage;
