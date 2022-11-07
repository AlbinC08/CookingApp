import React from "react";

const Card = ({ meal }) => {
  return (
    <div className="card">
      <details>
        <summary>
          <h3>{meal.strMeal}</h3>
          <h4>Origine :{meal.strArea}</h4>
          <img src={meal.strMealThumb} alt={"photo " + meal.strMeal} />
          <h5>Click on the card to see the instructions</h5>
        </summary>
        <p>{meal.strInstructions}</p>
      </details>
    </div>
  );
};

export default Card;
