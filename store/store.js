import { configureStore } from "@reduxjs/toolkit";

// import galleryReducer from "./reducers/galleryReducer";
import gallerReducer from "./reducers/gallerReducer";
export const store = configureStore({
    reducer: {
       gallerReducer,
    },
});