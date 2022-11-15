import { configureStore } from "@reduxjs/toolkit";
import { recipeSlice } from "./recipeSlice";
import { categorySlice } from "./categorySlice";
import { useDispatch } from "react-redux";
import {createRecipeSlice} from "./createRecipeSlice";

export const store = configureStore({
    reducer: {
        openRecipe: recipeSlice.reducer,
        changeCategory: categorySlice.reducer,
        createRecipe: createRecipeSlice.reducer
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
