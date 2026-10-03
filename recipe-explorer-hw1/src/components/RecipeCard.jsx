export default function RecipeCard({ recipe, isSelected, onSelectRecipe }) {
  return (
    <div
      className={`recipe-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelectRecipe(recipe)}
    >
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h3>{recipe.strMeal}</h3>
      <p>{recipe.strCategory} | {recipe.strArea}</p>
    </div>
  );
}