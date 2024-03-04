import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExercisesSubcategoriesItem from './ExercisesSubcategoriesItem';

const ExercisesSubcategoriesList = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const token =
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTQ1MzkzYmZjNWExMzNmOTExMDZiZCIsImlhdCI6MTcwOTU2MDM3OSwiZXhwIjoxNzA5NjQzMTc5fQ.eD-4y2r6SVQKgD5mv1DdDN148O2s5QPb8l15x3mI0ks';
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.get(
          'https://project-qwerty2024-back.onrender.com/api/exercises',
          config
        );
        setExercises(response.data.bodyPart);
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    };

    fetchExercises();
  }, []);

  return (
    <div>
      {exercises.map(exercise => (
        <ExercisesSubcategoriesItem key={exercise._id} subcategory={exercise} />
      ))}
    </div>
  );
};

export default ExercisesSubcategoriesList;
