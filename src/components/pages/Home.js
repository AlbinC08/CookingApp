import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Card";

const Home = () => {
  const [mealsData, setMealsData] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  const getData = () => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputSearch}`

    axios.get(url).then((res) => setMealsData(res.data.meals));
    console.log(mealsData);
  };
  useEffect(() => getData(), [inputSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
    setInputSearch("");
    console.log(inputSearch);
  };

  return (
    <div className="home">
        <h1>My Cooking App</h1>
      <div className="search">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Enter an ingredient"
            onChange={(e) => setInputSearch(e.target.value)}
            value={inputSearch}
          />

          <input id="button" type="submit" value="Search" />
        </form>
      </div>

      <div className="list-card">
        {mealsData &&
        mealsData
        .slice(0, 24)
        .map((meal) => (
          <Card key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default Home;
