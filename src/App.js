import "./App.css";
import React, { useState } from "react";
import AnimalCard from "./AnimalCard";

function App() {
  const getRandomAnimal = () => {
    const animals = ["bird", "dog", "cat", "cow", "horse", "gator"];
    return animals[Math.floor(Math.random() * animals.length)];
  };

  const [animals, setAnimals] = useState([]);
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderAnimals = () => {
    return animals.map((animal, index) => (
      <AnimalCard key={index} type={animal} />
    ));
  };

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <ul className="animal-list">{renderAnimals()}</ul>
    </div>
  );
}

export default App;
