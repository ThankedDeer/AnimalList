//svg animals
import "./AnimalCard.css";
import React, { useState } from "react";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import horse from "./svg/horse.svg";
import heart from "./svg/heart.svg";
import gator from "./svg/gator.svg";

const animalSVG = {
  bird,
  dog,
  cat,
  cow,
  horse,
  gator,
};

const AnimalCard = ({ type }) => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" src={animalSVG[type]} alt={type} />
      <img
        className="heart"
        src={heart}
        alt="heart"
        style={{ width: 10 + 10 * clicks + "px" }}
      />
      <p>{type}</p>
    </div>
  );
};

export default AnimalCard;
