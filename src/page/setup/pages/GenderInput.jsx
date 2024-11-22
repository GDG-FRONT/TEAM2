import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GenderButton from '../components/GenderButton';
import StatusButton from '../components/StatusButton';

import "../../../scss/setup/_setupChooseGender.scss"; 

const SetupGender = () => {
  const [selectedGender, setSelectedGender] = useState(null);
  const navigate = useNavigate();

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  const handleNextClick = () => {
    console.log('선택된 성별 : ', selectedGender); // 선택된 성별 값 (selectedGender)
    navigate('/weight-input'); // 몸무게 입력 페이지로 라우팅
  };

  return (
    <div>
      <div className="choose-gender-container">
        <div className="choose-gender-title">성별을 선택해주세요</div>
        <div className="choose-gender-label">일일 수분 섭취 목표를 개별적으로 계산해 드립니다.</div>
      </div>
      <GenderButton onSelectGender={handleGenderSelect} />
      <StatusButton 
        isActive={selectedGender !== null} 
        onClick={handleNextClick}
      />
    </div>
  );
};

export default SetupGender;