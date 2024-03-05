import React from 'react';
import ExercisesSubcategoriesList from './ExercisesSubcategoriesList/ExercisesSubcategoriesList';
import ExercisesCategories from './ExercisesCategories/ExercisesCategories';

function App() {
  return (
    <div className="App">
      <h1>Exercise </h1>
      <ExercisesCategories />

      <ExercisesSubcategoriesList />
    </div>
  );
}

export default App;
