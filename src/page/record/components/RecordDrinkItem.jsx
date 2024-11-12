import React from "react";
import "../../../scss/record/_recordDrink.scss";

const DrinkItem = ({ drink, isSelected, onClick }) => {
  return (
    <div
      className={`drink-item ${isSelected ? "selected" : ""}`}
      onClick={() => onClick(drink)}
    >
      <img src={drink.img} alt={drink.text} className="drink-icon" />
      <div className="drink-name">{drink.text}</div>
    </div>
  );
};

export default DrinkItem;