import React, { useState } from "react";
import warterImage from "../../../assets/Main/10pro.svg";
import "../../../scss/main/_mainTop.scss";  // SCSS 모듈을 불러오기

const MainTop = () => {
    const [title, setTitle] = useState("물세레로 구원을 받으세요");
    const [targetWater, setTargetWater] = useState("2L")

    return (
      <div className="mainTopPage">
        <div className="main-title">{title}</div>
        <div className="target-water">{targetWater}</div>
        <img src={warterImage} alt="물 이미지" className="main-water-image"></img>
      </div>  
    );
};

export default MainTop;