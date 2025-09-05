import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "../features/portfolioSlice";

export const store = configureStore({
    reducer: {
        portfolio: portfolioReducer,
    },
});
