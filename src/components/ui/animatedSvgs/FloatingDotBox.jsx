import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const DotGrid = ({
  rows = 5,
  cols = 5,
  dotSize = 4,
  spacing = 20,
  color = '#ABB2BF',
  animate = false,
  floatDistance = 5, // how far the whole grid floats
  duration = 2, // speed of floating cycle
}) => {
  const gridRef = useRef(null);

  useEffect(() => {
    if (!animate || !gridRef.current) return;

    gsap.to(gridRef.current, {
      y: `+=${floatDistance}`,
      x: `+=${floatDistance}`,
      duration: duration,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
    });
  }, [animate, floatDistance, duration]);

  return (
    <svg
      ref={gridRef}
      width={(cols - 1) * spacing + dotSize * 2}
      height={(rows - 1) * spacing + dotSize * 2}
      viewBox={`0 0 ${(cols - 1) * spacing + dotSize * 2} ${(rows - 1) * spacing + dotSize * 2}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: cols }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={col * spacing + dotSize}
            cy={row * spacing + dotSize}
            r={dotSize}
            fill={color}
          />
        ))
      )}
    </svg>
  );
};

export default DotGrid;
