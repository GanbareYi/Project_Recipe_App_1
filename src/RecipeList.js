import React from "react";

function RecipeList({allRecipes}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  const handleDelete = (event) => {
    const parent = event.target.closest("tr");

    parent.remove();
  };

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allRecipes.map((recipe, index) => {
            return (
              <tr className="content_td" key={index}>
                <td name="name">{recipe.name}</td>
                <td name="cuisine">{recipe.cuisine}</td>
                <td name="photo"><img src={recipe.photo} /></td>
                <td name="ingredients" className="content_td">
                  <p>{recipe.ingredients}</p>
                </td>
                <td name="preparation" className="content_td">
                  <p>{recipe.preparation}</p>
                </td>
                <td>
                  <button name="delete" onClick={handleDelete}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
