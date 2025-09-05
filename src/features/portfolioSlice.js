import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    projects: [
        {
            id: 1,
            title: "Portfolio Website",
            description: "Built with React, Tailwind CSS, and GSAP animations.",
            link: "https://example.com",
        },
        {
            id: 2,
            title: "Task Manager App",
            description: "A task management app using Redux Toolkit.",
            link: "https://example.com",
        },
    ],
    milestones: [
        {
            year: "2023",
            achievement: "Started working as Frontend Developer",
        },
        {
            year: "2024",
            achievement: "Built first full-stack application",
        },
    ],
};

const portfolioSlice = createSlice({
    name: "portfolio",
    initialState,
    reducers: {
        addProject: (state, action) => {
            state.projects.push(action.payload);
        },
        addMilestone: (state, action) => {
            state.milestones.push(action.payload);
        },
    },
});

export const { addProject, addMilestone } = portfolioSlice.actions;
export default portfolioSlice.reducer;
