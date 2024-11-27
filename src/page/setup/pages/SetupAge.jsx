import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StatusButton from '../components/StatusButton';

// import "../../../scss/setup/_setupChooseAge.scss"; 

const SetupAge = () => {
  const [selectedAge, setSelectedAge] = useState(null);
  const navigate = useNavigate();

  const handleAgeSelect = (age) => {
    setSelectedAge(age);
  };

  const handleNextClick = () => {
    console.log('선택된 나이: ', selectedAge); // 선택된 나이
    navigate('/weather-input'); // 날씨 입력 페이지로 라우팅
  };

  return (
    <div>
      <div className="choose-age-container">
        <div className="choose-age-title">65세 이상인가요?</div>
        <div className="choose-age-label">
          65세를 기준으로 수분섭취 권장량을 추천해주고 있습니다.
        </div>
      </div>
      <StatusButton 
        isActive={selectedAge !== null} 
        onClick={handleNextClick}
      />
    </div>
  );
};

export default SetupAge;