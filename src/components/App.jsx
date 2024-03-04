import React from 'react';
import ExercisesSubcategoriesList from './ExercisesSubcategoriesList';
import ExercisesCategories from './ExercisesCategories';

function App() {
  return (
    <div className="App">
      <ExercisesCategories />
      <h1>Exercise Subcategories</h1>
      <ExercisesSubcategoriesList />
    </div>
  );
}

export default App;
