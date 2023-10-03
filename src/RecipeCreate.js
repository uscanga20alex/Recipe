import React, { useState } from "react";

function RecipeCreate({createRecipe}) {
  const initialStateForm={
    name:"",
    cuisine:"",
    photo:"",
    ingredients:"",
    preparation:"",
  };
  const [formData, setFormData] = useState({...initialStateForm});
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData);
    setFormData({...initialStateForm});
  }
  const handleChange = ({target}) => {
    setFormData({...formData, [target.name]:target.value})
  }

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                type="text"
                name="name"
                required={true}
                onChange={handleChange}
                value={formData.name}
                placeholder="Name"
                />
            </td>
            <td>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                required={true}
                placeholder="Cuisine"
                value={formData.cuisine}
                onChange={handleChange}
                />
            </td>
            <td>
              <input
                id="photo"
                name="photo"
                type="text"
                required={true}
                onChange={handleChange}
                value={formData.photo}
                placeholder="URL"
                />
            </td>
            <td>
              <textarea
                id="ingredients"
                type="text"
                name="ingredients"
                required={true}
                rows={2}
                placeholder="Ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                />
            </td>
            <td>
              <textarea
                id="preparation"
                type="text"
                name="preparation"
                required={true}
                rows={2}
                placeholder="Preparation"
                value={formData.preparation}
                onChange={handleChange}
                />
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
