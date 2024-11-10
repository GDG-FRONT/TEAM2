import React from "react";
import RecordText from "./components/RecordText";
import RecordDrink from "./components/RecordDrink";
import "../../scss/record/_recordHome.scss";

const index = () => {
  return (
    <div classname="recordHome">
      <RecordText />
      <RecordDrink />
    </div>
  )
};

export default index;
