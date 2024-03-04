import React from 'react';

const ExercisesSubcategoriesItem = ({ subcategory }) => {
  return (
    <div>
      <h3>{subcategory.name}</h3>
      <p>{subcategory.filter}</p>
      <img src={subcategory.imgURL} alt={subcategory.name} />
    </div>
  );
};

export default ExercisesSubcategoriesItem;
