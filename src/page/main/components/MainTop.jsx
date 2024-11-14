import React from "react";
import warterImage from "../../../assets/Main/10pro.svg";
import "../../../scss/main/_mainTop.scss"; // SCSS 모듈을 불러오기

const MainTop = ({ title }) => {
  return (
    <div className="mainTopPage">
      <div className="main-title">물세레로 구원을 받으세요</div>
      <div className="target-water">오늘의 목표 섭취량: 2L</div>
      <img src={warterImage} alt="물 이미지" className="main-water-image" />
    </div>
  );
};

export default MainTop;