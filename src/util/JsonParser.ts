type DayEntry = {
    id?: string
    day: string
    recipeId: string
}

export const Days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
]

//var recipesCache: Recipe[] = []
//var daysCache: DayEntry[] = []

export const addDayEntry = (value: DayEntry) => {
    const requestOptions: RequestInit = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(value),
    }

    fetch("http://localhost:3000/days", requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data))
}

export const deleteDayEntry = async (id: string) => {
    const day:DayEntry = await getSingleDay(id)
    return fetch("http://localhost:3000/days/" + day.id, {
        method: "DELETE",
    })
        .then((res) => res.json())
        .then((res) => console.log(res))
}

export const getWeek: () => Promise<Map<string, Recipe>> = async () => {
    const weekPromise = await Promise.all(
        Days.map(async (day) => {
            const dayEntry = await getSingleDay(day)
            if (!dayEntry) {
                return { day: "", recipe: {} as Recipe }
            }
            const recipe = await getSingleRecipe(dayEntry.recipeId)
            if (!recipe) {
                return { day: "", recipe: {} as Recipe }
            }
            return { day: day, recipe: recipe }
        })
    )
    return new Map(weekPromise.map((entry) => [entry.day, entry.recipe]))
}

export const getDays = async (refresh: boolean = false) => {
    /*if (!refresh && daysCache.length !== 0) {
        return daysCache
    }*/

    return await jsonRequest("http://localhost:3000/days")
}

export const getSingleDay = async (day: string) => {
    const days = await getDays()
    return days.find((r: DayEntry) => r.day === day)
}

export type Recipe = {
    name: string
    id: string
    description?: string
    tag?: string[]
    image?: string
    ingredient?: {
        name: string
        unit?: string
        amount?: string
        preparation?: undefined
    }[]
    ingredientGroup?: never[]
    step?: {
        description: string
    }[]
    notes?: undefined
    forked?: undefined
}

export const addRecipe = (value: Recipe) => {
    const requestOptions: RequestInit = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(value),
    }

    fetch("http://localhost:3000/recipe", requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data))
}

export const deleteRecipe = (id: string) => {
    return fetch("http://localhost:3000/recipe" + id, {
        method: "DELETE",
    })
        .then((res) => res.json())
        .then((res) => console.log(res))
}

export const getSingleRecipe = async (id: string) => {
    const recipes = await getRecipes()
    return recipes.find((r: Recipe) => r.id === id)
}

const jsonRequest = (link: string) => {
    return fetch(link)
        .then((res) => res.json())
        .then(
            (result) => {
                return result
            },
            (error) => {
                console.log(error)
                return error
            }
        )
}

export const getRecipes = async (
    refresh: boolean = false
): Promise<Recipe[]> => {
    /*if (!refresh && recipesCache.length !== 0) {
        return recipesCache
    }*/

    return await jsonRequest("http://localhost:3000/recipe")
}
