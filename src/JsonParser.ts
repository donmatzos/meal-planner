import { recipeSlice } from './recipeSlice';
import recipeData from "./db/recipes.json"
import dayEntryData from "./db/dayEntries.json"

type DayEntry = {
    day: string,
    recipeId: string,
}

export const addDayEntry = (value:DayEntry) => {
    dayEntryData.days.push(value);
}

export const deleteDayEntry = (id:string) => {
    dayEntryData.days = dayEntryData.days.filter(_ => _.recipeId !== id);
}

export const getDays = () => {
    return dayEntryData.days;
}

type Recipe = {
    name: string,
    id: string,
    description: string,
    tag: string[],
    image: string,
    ingredient: ({
        name: string,
        unit?: string,
        amount?: string,
        preparation?: undefined,
    })[],
    ingredientGroup: never[],
    step: {
        description: string,
    }[];
    notes?: undefined;
    forked?: undefined;
}

export const addRecipe = (value:Recipe) => {
    recipeData.recipe.push(value);
}

export const deleteRecipe = (id:string) => {
    recipeData.recipe = recipeData.recipe.filter(_ => _.id !== id);
}

export const getRecipes = () => {
    return recipeData.recipe;
}