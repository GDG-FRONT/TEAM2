import React from "react";
import FirstLoding from "./components/FirstLoding";
import Weight from "./components/WeightInput";

const index = () => {
  return(
    <div className="intro">
        <FirstLoding /> 
        <Weight />
    </div>
  ); 
};

export default index;
