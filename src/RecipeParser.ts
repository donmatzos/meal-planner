import data from "./db/recipes.json"

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
    data.recipe.push(value);
}

export const deleteRecipe = (id:string) => {
    data.recipe = data.recipe.filter(_ => _.id !== id);
}

export const getRecipes = () => {
    return data.recipe;
}