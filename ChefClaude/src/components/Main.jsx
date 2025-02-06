import React from "react";

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])

    const ingredientsListItems = ingredients.map( ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event){
        event.preventDefault();
        const formdata = new FormData(event.currentTarget)
        const newIngredient = formdata.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        event.currentTarget.reset()
    }

    return (
        <main>
            <form className="add-ingredients-form" onSubmit={handleSubmit}>
                <input type="text" aria-label="Add ingredient" placeholder="e.g. pepper" name="ingredient" />
                <button type="submit" >Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}