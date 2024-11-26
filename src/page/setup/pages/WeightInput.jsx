import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../../../scss/index/_weight.scss';
import status from '../../../assets/setup/status_page_2.svg'; 
import StatusButton from '../components/StatusButton';

const WeightInput = () => {
  const [weight, setWeight] = useState("00"); 
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/Age-input'); // 나이 입력 페이지로 이동
  };

  return (
    <div className="weight-input-container">
      <div className="weight_content">
        <div className="weight_title">몸무게를 입력해주세요</div>
        <p className="weight_sub">정수로 입력해주세요</p>
        <div className="weight_info">{weight} KG</div>


        <div className="indicator">
          <img src={status} />
        </div>

        <button className="next-button" onClick={handleNextClick}>
          <StatusButton />
        </button>
      </div>
      <div className="keypad">
        키패드
      </div>
    </div>
  );
};

export default WeightInput;
