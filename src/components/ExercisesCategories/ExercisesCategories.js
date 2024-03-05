import React from 'react';
import {
  CategoryLists,
  CategoryExercisesStyle,
} from './ExercisesCategories.styled';

const ExercisesCategories = () => {
  return (
    <div>
      <CategoryLists>
        <li>
          <CategoryExercisesStyle>Body parts</CategoryExercisesStyle>
        </li>
        <li>
          <CategoryExercisesStyle>Muscles</CategoryExercisesStyle>
        </li>
        <li>
          <CategoryExercisesStyle>Equipment</CategoryExercisesStyle>
        </li>
      </CategoryLists>
    </div>
  );
};

export default ExercisesCategories;
