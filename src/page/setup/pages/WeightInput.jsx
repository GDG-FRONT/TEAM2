import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../scss/index/_weight.scss";
import status from "../../../assets/setup/status_page_2.svg";

const WeightInput = () => {
  const [weight, setWeight] = useState("00"); 
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleNextClick = () => {
    const weightValue = parseFloat(weight);
    // 1kg이하일떄 오류창
    if (weightValue < 1 || isNaN(weightValue)) {
      setShowError(true); 
    } 
    else {
      navigate("/Age-input"); // 나이 입력 페이지로 이동
    }
  };

  // 오류창 닫기
  const closeErrorModal = () => {
    setShowError(false); 
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    // 숫자만 입력 가능하도록 만듬!
    if (/^\d*$/.test(inputValue)) {
      setWeight(inputValue);
    }
  };

  return (
    <div className="weight-input-container">
      <div className="weight_content">
        <div className="weight_title">몸무게를 입력해주세요</div>
        <p className="weight_sub">정수로 입력해주세요</p>
        
        <input
          className="weight_info"
          value={weight}
          onChange={handleInputChange}
          placeholder="00kg"
        />

        <div className="indicator">
          <img src={status} alt="Status Indicator" />
        </div>

        <button className="weight_next-button" onClick={handleNextClick}>
          다음
        </button>
      </div>

      <div className="keypad">키패드</div>

      {showError && (
        <div className="error-modal">
          <div className="error-content">
            <div className="error_title">오류</div>
            <div className="error_sub">체중은 1KG 이상 이어야 합니다.</div>
            <button className="error_button" onClick={closeErrorModal}>
              <div className="error_text">다시 입력하기</div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeightInput;
