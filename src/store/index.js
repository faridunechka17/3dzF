import {configureStore} from "@reduxjs/toolkit";
import PostSlice from "./PostSlice";
import fetchSlice from "./FetchSlice";

export const store = configureStore({
    reducer: {
        PostSlice,
        fetchSlice
    }
})