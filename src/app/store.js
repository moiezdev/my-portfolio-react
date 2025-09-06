import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "../features/portfolioSlice";
import contactsReducer from "../features/contacts";
import projectsReducer from "../features/projects";

export const store = configureStore({
    reducer: {
        portfolio: portfolioReducer,
        contacts: contactsReducer,
        projects: projectsReducer,
    },
});
