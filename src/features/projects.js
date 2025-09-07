import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    projects: [
        {
            title: "LMS",
            subtitle: "Learning Management System FullStack (Under Development)",
            description:
                "A personal portfolio website to showcase projects, skills, and experience.",
            technologies: ["Html", "SCSS", "JavaScript", "React", "Redux Toolkit", "Nodejs", "Express", "MongoDB"],
            imageUrl: "/projects-media/lms/main.png",
            projectUrl: "http://example.com/portfolio",
            githubUrl: "moizdev/portfolio-website",
            media: ['img1.png', 'img2.png']
        },
        {
            title: "AATourism",
            subtitle: "Flight Booking Platform",
            description:
                "A full-featured e-commerce website with product listings, shopping cart, and payment integration.",
            technologies: ["Nuxt", "Vuex", "Buefy", "JavaScript", "Bootstrap5", "SCSS", "Sabre", "Amadeus"],
            imageUrl: "/projects-media/aa-tourism/main.png",
            projectUrl: "http://aatourism.ca/",
            githubUrl: "http://aatourism.ca/",
            media: ['img1.png', 'img2.png', 'img3.png', 'img4.png', 'img5.png'],
        },
        {
            title: "Ain Saas",
            subtitle: "Ecommerce Website",
            description:
                "A personal portfolio website to showcase projects, skills, and experience.",
            technologies: ["Html", "SCSS", "JavaScript"],
            imageUrl: "/projects-media/ain-saas/main.png",
            projectUrl: "http://example.com/portfolio",
            githubUrl: "moizdev/portfolio-website",
            media: ['img1.png', 'img2.png', 'img3.png']
        },
        {
            title: "City Arrivals",
            subtitle: "Luxry Car Rental",
            description:
                "A personal portfolio website to showcase projects, skills, and experience.",
            technologies: ["Html", "SCSS", "JavaScript", "Jquery"],
            imageUrl: "/projects-media/city-arrivals/main.png",
            projectUrl: "http://example.com/portfolio",
            githubUrl: "moizdev/portfolio-website",
            media: ['img1.png', 'img2.png']
        },
        {
            title: "Portfolio Website",
            subtitle: "My Personal Portfolio",
            description:
                "A personal portfolio website to showcase projects, skills, and experience.",
            technologies: ["React", "TailwindCSS", "JavaScript", "Redux Toolkit"],
            imageUrl: "/projectImages/portfolio.png",
            projectUrl: "http://example.com/portfolio",
            githubUrl: "moizdev/portfolio-website",
            media: ['img1.png', 'img2.png', 'img3.png']
        },
    ],
};

const projectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {},
});

export default projectsSlice.reducer;