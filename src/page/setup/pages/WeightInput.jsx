import React, { useState } from "react";
import '../../../scss/index/_weight.scss';
import status from '../../../assets/setup/status_page_2.svg';

const WeightInput = () => {
  const [weight] = useState("00");


  return (
    <div className="weight-input-container">
      <div className="weight_content">
        <div className="weight_title">몸무게를 입력해주세요</div>
        <p className="weight_sub">정수로 입력해주세요</p>
        <div className="weight_info"> {weight} KG </div>
        <div className="indicator" img = "status"></div>
        <button className="next-button" disabled>
          다음
        </button>
      </div>
      <div className="keypad">
        키패드  
      </div>
    </div>
  );
};

export default WeightInput;
