import React from 'react';
import { Link } from 'react-router-dom'; // Якщо ви використовуєте React Router

export const Categories = () => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to="/">Body parts</Link>
          </li>
          <li>
            <Link to="/muscles">Muscles</Link>
          </li>
          <li>
            <Link to="/equipment">Equipment</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};
