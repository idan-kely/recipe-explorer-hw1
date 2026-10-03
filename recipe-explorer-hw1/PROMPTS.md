
## Task 1 — show the list
Prompt: Create project structure with Vite, add PRD.md and tasks.md, and show initial recipes list from a local JSON file.
Agent did: Created PRD.md, tasks.md, src/mockRecipes.json, and configured src/App.jsx.
I checked: Ran npm run dev, verified 3 recipes are rendered properly on screen, and took a screenshot.

## Task 2 — recipe selection and detail panel
Prompt: Break down into 4 modular components and display recipe details in a side panel when a card is clicked.
Agent did: Created Header.jsx, RecipeList.jsx, RecipeCard.jsx, RecipeDetail.jsx, and updated App.jsx with selectedRecipe state.
I checked: Clicked on different recipe cards to ensure details panel opens with correct text and images, and verified the close button works.