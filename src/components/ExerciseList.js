import React from 'react';
import SubCategories from './SubCategories';
import exercises from '../json/exersises.json'; // Імпорт змінної exercises з файлу

const ExerciseList = () => {
  return (
    <div>
      <ul>
        {exercises.map(exercise => (
          <li key={exercise._id.$oid}>
            <SubCategories exercise={exercise} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseList;
