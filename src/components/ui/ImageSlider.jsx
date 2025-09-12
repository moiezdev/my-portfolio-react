import { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import LazyImage from './LazyImage';
import Button from './Button';

export default function ImageSlider({ images = [] }) {
  const [idx, setIdx] = useState(0);
  const trackRef = useRef();
  const containerRef = useRef();
  const timeoutRef = useRef();
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const go = useCallback((newIndex, direction = 'next') => {
    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;

    const slides = trackRef.current.children;
    const currentSlide = slides[idx];
    const nextSlide = slides[newIndex];

    const offset = direction === 'next' ? 100 : -100;

    gsap.set(nextSlide, { xPercent: offset, opacity: 1, scale: 0.95 });

    const tl = gsap.timeline();
    tl.to(currentSlide, {
      xPercent: -offset,
      opacity: 0,
      scale: 0.95,
      duration: 0.6,
      ease: 'power3.inOut',
    }).to(nextSlide, { xPercent: 0, scale: 1, duration: 0.6, ease: 'power3.inOut' }, '<');

    setIdx(newIndex);
  });

  // Initialize slides
  useEffect(() => {
    const slides = trackRef.current.children;
    gsap.set(slides, { opacity: 0, scale: 0.95, xPercent: 100 });
    if (slides[0]) gsap.set(slides[0], { opacity: 1, scale: 1, xPercent: 0 });
  }, []);

  // Auto-slide
  useEffect(() => {
    if (!images || images.length <= 1) return;
    timeoutRef.current = setTimeout(() => go(idx + 1, 'next'), images.length === 1 ? 0 : 7000);
    return () => clearTimeout(timeoutRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx]);

  // Swipe gesture
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let currentSlide, nextSlide;

    const handleTouchStart = (e) => {
      if (images.length <= 1) return;
      touchStartX.current = e.touches[0].clientX;
      currentSlide = trackRef.current.children[idx];
    };

    const handleTouchMove = (e) => {
      if (images.length <= 1) return;
      touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
      const percent = (touchDeltaX.current / el.clientWidth) * 100;
      gsap.set(currentSlide, { xPercent: percent });
      // prepare next slide
      let newIndex = touchDeltaX.current < 0 ? idx + 1 : idx - 1;
      if (newIndex < 0) newIndex = images.length - 1;
      if (newIndex >= images.length) newIndex = 0;
      nextSlide = trackRef.current.children[newIndex];
      gsap.set(nextSlide, {
        xPercent: percent + (touchDeltaX.current < 0 ? 100 : -100),
        opacity: 1,
      });
    };

    const handleTouchEnd = () => {
      const threshold = el.clientWidth * 0.15;
      if (Math.abs(touchDeltaX.current) > threshold) {
        go(touchDeltaX.current < 0 ? idx + 1 : idx - 1, touchDeltaX.current < 0 ? 'next' : 'prev');
      } else {
        // snap back
        gsap.to(currentSlide, { xPercent: 0, duration: 0.3, ease: 'power3.out' });
        if (nextSlide)
          gsap.to(nextSlide, {
            xPercent: touchDeltaX.current < 0 ? 100 : -100,
            duration: 0.3,
            ease: 'power3.out',
          });
      }
      touchDeltaX.current = 0;
    };

    el.addEventListener('touchstart', handleTouchStart, { passive: true });
    el.addEventListener('touchmove', handleTouchMove, { passive: true });
    el.addEventListener('touchend', handleTouchEnd);

    return () => {
      el.removeEventListener('touchstart', handleTouchStart);
      el.removeEventListener('touchmove', handleTouchMove);
      el.removeEventListener('touchend', handleTouchEnd);
    };
  }, [go, idx, images.length]);

  return (
    <div className="relative w-full overflow-hidden select-none" ref={containerRef}>
      <div className="relative w-full h-[360px] md:h-[420px]">
        <div className="absolute inset-0 w-full h-full flex" ref={trackRef}>
          {images.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-full h-full flex items-center justify-center bg-[var(--color-white)] courser-pointer cursor-white cursor-scale-3"
              style={{ position: 'absolute', top: 0, left: 0 }}
            >
              <LazyImage
                src={src}
                alt={`Slide ${i + 1}`}
                className="object-cover"
                wrapperClass="w-full h-full"
              />
            </div>
          ))}
        </div>

        {/* Arrows */}
        {images.length > 1 && (
          <>
            <span className="absolute left-3 top-1/2 -translate-y-1/2 z-20">
              <Button
                className={'bg-gray-b/50 hover:bg-gray-b transition-colors border-0'}
                onClick={() => go(idx - 1, 'prev')}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 6L9 12l6 6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="square"
                  />
                </svg>
              </Button>
            </span>

            <span className="absolute right-3 top-1/2 -translate-y-1/2 z-20">
              <Button
                className={'bg-gray-b/50 hover:bg-gray-b transition-colors border-0'}
                onClick={() => go(idx + 1, 'next')}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="square"
                  />
                </svg>
              </Button>
            </span>
          </>
        )}

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i, i > idx ? 'next' : 'prev')}
                  className={`w-3 h-3 ${
                    i === idx ? 'bg-[var(--color-gray-b)]' : 'bg-[var(--color-gray-a)]'
                  }`}
                  style={{ borderRadius: 0 }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
