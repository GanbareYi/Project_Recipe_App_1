import React, { useState } from "react";

function RecipeCreate({onCreate}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const initialFormData = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;

    setFormData({
      ...formData,
      [name]: value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onCreate(formData);
    setFormData(initialFormData);
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input name="name" placeholder="Name" onChange={handleChange} value={formData.name} /> 
            </td>
            <td>
              <input name="cuisine" placeholder="Cuisine" onChange={handleChange} value={formData.cuisine} />
            </td>
            <td>
              <input name="photo" placeholder="URL" onChange={handleChange} value={formData.photo} />
            </td>
            <td>
              <textarea name="ingredients" placeholder="Ingredients" onChange={handleChange} value={formData.ingredients} />
            </td>
            <td>
              <textarea name="preparation" placeholder="Preparation" onChange={handleChange} value={formData.preparation} />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
