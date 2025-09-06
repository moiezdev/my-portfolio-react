import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "../features/portfolioSlice";
import contactsReducer from "../features/contacts";

export const store = configureStore({
    reducer: {
        portfolio: portfolioReducer,
        contacts: contactsReducer,
    },
});
