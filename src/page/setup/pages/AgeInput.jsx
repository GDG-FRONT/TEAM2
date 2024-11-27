import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../../scss/setup/_setupChooseAge.scss";


const SetupAge = () => {
  const navigate = useNavigate();

  // 버튼 클릭 시 라우팅 처리
  const handleAgeSelect = (age) => {
    console.log('선택된 나이: ', age);
    navigate('/weather-input'); // 선택 후 바로 날씨 입력 페이지로 라우팅
  };

  return (
    <div className='choose-age-container'>
      <div className="choose-age-title-container">
        <div className="choose-age-title">65세 이상인가요?</div>
        <div className="choose-age-label">
          65세를 기준으로 수분섭취 권장량을<br />
          추천해주고 있습니다.
        </div>
      </div>
      <div className="choose-age-buttons">
        <button className="choose-age-button no-button" onClick={() => handleAgeSelect('no')}>
          아니요
        </button>
        <button className="choose-age-button yes-button" onClick={() => handleAgeSelect('yes')}>
          예
        </button>
      </div>
     
      
    </div>
  );
};

export default SetupAge;