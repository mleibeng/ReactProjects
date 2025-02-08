import React from "react";
import Recipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "./ai";

export default function Main() {
    const [ingredients, setIngredients] = React.useState([]);
    const [recipe, setRecipe] = React.useState(false);

    async function fetchRecipe() {
        try {
            const generatedRecipe = await getRecipeFromMistral(ingredients);
            setRecipe(generatedRecipe);
        } catch (err) {
            console.log(err.message);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        const formdata = new FormData(event.currentTarget);
        const newIngredient = formdata.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
        event.currentTarget.reset();
    }

    return (
        <main>
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
                <input type="text" aria-label="Add ingredient" placeholder="e.g. pepper" name="ingredient" />
                <button type="submit">Add ingredient</button>
            </form>
            <section>
                <IngredientsList fetchRecipe={fetchRecipe} ingredients={ingredients} />
            </section>
            {recipe && <Recipe recipe={recipe} />}
        </main>
    );
}
