import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "../features/portfolioSlice";
import contactsReducer from "../features/contacts";
import projectsReducer from "../features/projects";
import skillReducer from "../features/skill";
import aboutReducer from "../features/about";

export const store = configureStore({
    reducer: {
        portfolio: portfolioReducer,
        contacts: contactsReducer,
        projects: projectsReducer,
        skills: skillReducer,
        about: aboutReducer
    },
});
