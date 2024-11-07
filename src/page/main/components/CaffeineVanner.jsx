import React from "react";
import CoffeeImage from "../../../assets/Main/caffeineVanner.svg";
import "../../../scss/main/_caffeineVanner.scss"; 

const CaffeineVanner = () => {
    return (
        <div className="vannerBox">
            <div>
                <div className="vannerTitle">오늘의 카페인 섭취량</div>
                <div className="vannerContent">카페인 섭취 6시간 이후에 취침을 권장드립니다</div>
            </div>
            <img src={CoffeeImage} alt="커피 이미지" className="vanner-coffee-image" />
        </div>
    );
}

export default CaffeineVanner;
