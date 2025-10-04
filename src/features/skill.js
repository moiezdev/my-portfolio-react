import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    skills: [
        {
            category: 'Programming Languages',
            items: ['JavaScript', 'TypeScript', 'C# (C Sharp)', 'Python'],
        },
        {
            category: 'Frameworks & Libraries',
            items: ['React', 'Vue', 'NextJs', 'NuxtJs', 'ASP.NET', 'DotNET', 'Node', 'Express', 'TailwindCSS', 'MaterialUI'],
        },
        {
            category: 'Databases',
            items: ['MongoDB', 'MySQL', 'PostGreSQL'],
        },
        {
            category: 'Tools & Platforms',
            items: ['Git', 'GitHub', 'GitLab', 'Vite', 'Vercel', 'Netlify'],
        },
        {
            category: 'Design & Prototyping',
            items: ['Figma', 'Adobe XD', 'Sketch'],
        },
        {
            category: 'Other Skills',
            items: ['HTML5', 'CSS3', 'Agile Methodologies', 'Test-Driven Development'],
        },
    ]
};

const skillSlice = createSlice({
    name: "skills",
    initialState,
    reducers: {}
});

export default skillSlice.reducer;