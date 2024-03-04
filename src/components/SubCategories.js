import React from 'react';

const SubCategories = ({ exercise }) => {
  const { name, burnedCalories } = exercise;

  return (
    <div>
      <div>
        <span>Workout</span>
        <button>Add</button>
      </div>

      <p>{name}</p>

      <div>
        <p>Calories:</p> <p>{burnedCalories}</p>
      </div>
    </div>
  );
};

export default SubCategories;
