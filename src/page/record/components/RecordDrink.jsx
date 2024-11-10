import React from "react";
import "../../../scss/record/_recordDrink.scss"; 
import water from "../../../assets/record/water.svg";
import coffee from "../../../assets/record/coffee.svg";
import tea from "../../../assets/record/tea.svg";
import milk from "../../../assets/record/milk.svg";
import soda from "../../../assets/record/soda.svg";
import juice from "../../../assets/record/juice.svg";

const RecordDrink = () => {
  return (
    <div className="recordDrink">
        <button>
            <img src={water} alt="물" className="drink" /> 
            <img src={milk} alt="우유" className="drink" />
        </button>
    </div>
  );
};

export default RecordDrink;