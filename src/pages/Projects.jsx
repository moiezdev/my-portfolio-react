import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card from '../components/ui/Card';
import SectionTitle from '../components/ui/SectionTitle';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projects = useSelector((state) => state.projects.projects);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (!projects || projects.length === 0) return;
    cardsRef.current = cardsRef.current.slice(0, projects.length);

    // Kill old triggers
    ScrollTrigger.getAll().forEach((t) => t.kill());

    // Entrance animation (from bottom-center with stagger)
    gsap.fromTo(
      cardsRef.current,
      {
        yPercent: 100, // slide up from below
        xPercent: -50, // start horizontally centered
        opacity: 0,
        scale: 0.8,
        transformOrigin: 'center bottom',
      },
      {
        yPercent: 0,
        xPercent: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'back.out(1.7)',
        stagger: 0.2,
        scrollTrigger: {
          trigger: cardsRef.current[0]?.parentNode,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Floating loop effect after entrance
    cardsRef.current.forEach((card, i) => {
      gsap.to(card, {
        y: '+=8',
        duration: 2 + i * 0.3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1.5 + i * 0.2,
      });
    });

    // Magnetic hover effect
    cardsRef.current.forEach((card) => {
      const handleMouseMove = (e) => {
        const rect = card.getBoundingClientRect();
        const offsetX = (e.clientX - (rect.left + rect.width / 2)) * 0.15;
        const offsetY = (e.clientY - (rect.top + rect.height / 2)) * 0.15;
        gsap.to(card, {
          x: offsetX,
          y: offsetY,
          duration: 0.3,
          ease: 'power3.out',
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'power3.out',
        });
      };

      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);

      // Cleanup
      return () => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      };
    });

    ScrollTrigger.refresh();
  }, [projects]);

  return (
    <section className="w-full px-4 py-12" id="projects">
      <div className="app-container mx-auto pt-[80px] md:py-[60px]">
        {/* component title */}
        <SectionTitle hash={'/'} title="projects" />
        <p className="mt-[-20px] mb-[50px]">List of projects</p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="will-change-transform"
            >
              <Card
                title={project.title}
                description={project.subtitle}
                techStack={project.technologies}
                liveLink={project.projectUrl}
                image={project.imageUrl}
                altText={`${project.title} image`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
