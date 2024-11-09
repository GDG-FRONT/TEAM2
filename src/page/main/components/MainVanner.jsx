import React from "react";
import weatherVanner from "../../../assets/Main/weatherVannersvg.svg";
import CaffeineVanner from "./CaffeineVanner";
import "../../../scss/main/_mainVanner.scss"; 


const MainVanner = () => {

    return (
      <div className="mainVanner">
        <div className="weather-vanner">
          <div className="todayWeather">오늘의 날씨</div>
          <img src={weatherVanner} alt="날씨 배너" className="weather-vanner-img"></img>
        </div>
        <div className="caffeineVanner">
          <div className="todayCaffeine">오늘의 카페인</div>
          <CaffeineVanner/>
        </div>
      </div>  
    );
};

export default MainVanner;