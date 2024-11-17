import React from "react";

import WeekSwitch from "./components/WeekSwitch";
import WaterChart from "./components/WaterChart";
import CaffeineIntake from "./components/CaffeineIntake";

import "../../scss/statistic/_statisticHome.scss"; 

const StatisticPage = () => {
  return (  
    <div className="statisticHome">
      <WeekSwitch />
      <WaterChart/>
      <CaffeineIntake/>
    </div>
  );
};

export default StatisticPage;