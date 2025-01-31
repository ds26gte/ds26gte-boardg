import { Fragment } from 'react';
import { recipes } from './recipes';

const recipeItems = recipes.map(function(recipe) {
  return (
    <Fragment key={recipe.id}>
    <h2>{recipe.name}</h2>
    <ul>
    {recipe.ingredients.map(function(ingred) {
      return (
        <li key={ingred}>
        {ingred}
        </li>
      );
    })}
    </ul>
    </Fragment>
  )
});

export default function RecipeListing() {
  return (
    <>
    <h1>Recipes</h1>
    List of lists. Make sure to add appropriate key attributes to every list element. Use the Fragment tag as a self-effacing list-item wrapper.
    <ul>{recipeItems}</ul>
    </>
  );
}
