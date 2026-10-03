import { useState } from 'react';
import mockData from './mockRecipes.json';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import './App.css';

function App() {
  const [recipes] = useState(mockData);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div className="app-container">
      <Header />
      <main className="main-layout">
        <RecipeList
          recipes={recipes}
          selectedRecipe={selectedRecipe}
          onSelectRecipe={setSelectedRecipe}
        />
        <RecipeDetail
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      </main>
    </div>
  );
}

export default App;