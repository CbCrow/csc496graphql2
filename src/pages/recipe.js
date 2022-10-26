import * as React from "react"

// recipe page template to store data from graphql query
const RecipePage = ({ data }) => {
    const recipe = data.nodeRecipes
    return (
        <main>
        <title>{recipe.title}</title>
        <h1>{recipe.title}</h1>
        <p>{recipe.cookingTime}</p>
        </main>
    )
    }