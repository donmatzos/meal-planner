type DayEntry = {
    day: string
    recipeId: string
}

var recipesCache: Recipe[] = []

export const addDayEntry = (value: DayEntry) => {
    //dayEntryData.days.push(value)
}

export const deleteDayEntry = (id: string) => {
    //dayEntryData.days = dayEntryData.days.filter((_) => _.recipeId !== id)
}

export const getDays = () => {
    //return dayEntryData.days
}

export type Recipe = {
    name: string
    id: string
    description: string
    tag: string[]
    image: string
    ingredient: {
        name: string
        unit?: string
        amount?: string
        preparation?: undefined
    }[]
    ingredientGroup: never[]
    step: {
        description: string
    }[]
    notes?: undefined
    forked?: undefined
}

export const addRecipe = (value: Recipe) => {
    //recipeData.recipe.push(value)
}

export const deleteRecipe = (id: string) => {
    //recipeData.recipe = recipeData.recipe.filter((_) => _.id !== id)
}

export const getSingleRecipe = async (id: string) => {
    const recipes = await getRecipes()
    return recipes.find((r: Recipe) => r.id === id)
}

export const getRecipes = (refresh: boolean = false) => {
    if (!refresh && recipesCache.length !== 0) {
        return recipesCache
    }

    return fetch("http://localhost:3000/recipe")
        .then((res) => res.json())
        .then(
            (result) => {
                recipesCache = result
                return result
            },
            (error) => {
                console.log(error)
                return error
            }
        )
}
