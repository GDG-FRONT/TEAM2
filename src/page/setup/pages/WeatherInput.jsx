import React, { useState } from 'react';
import cold from '../../../assets/setup/cold.png';
import common from '../../../assets/setup/common.png';
import sun from '../../../assets/setup/sun.png';
import '../../../scss/index/Weather.scss';
import { useNavigate } from 'react-router-dom';

const Weather = () => {
  const navigate = useNavigate();
  const pressNext = () => {
    navigate('/MainPage');
  };
  const [selectedAmount, setSelectedAmount] = useState(null);
  const handleAmountClick = (amount) => {
    setSelectedAmount((prev) => (prev === amount ? null : amount)); // 동일한 값이면 해제
  };

  return (
    <div>
      <div className="w-main">
        <p className="w-title">오늘 날씨는 어떤가요?</p>
        <div
          className={`w-item ${selectedAmount === 'cold' ? 'selected' : ''}`}
          onClick={() => handleAmountClick('cold')}>
          <div className="w-text">
            <p className="w-subTitle"> 추움</p>
            <p className="w-subbTitle">바람이 많고 비 오는 날</p>
          </div>
          <img src={cold} alt="" />
        </div>
        <div
          className={`w-item ${selectedAmount === 'common' ? 'selected' : ''}`}
          onClick={() => handleAmountClick('common')}>
          <div className="w-text">
            <p className="w-subTitle"> 보통</p>
            <p className="w-subbTitle">온대 기후</p>
          </div>
          <img src={common} alt="" />
        </div>
        <div
          className={`w-item ${selectedAmount === 'sun' ? 'selected' : ''}`}
          onClick={() => handleAmountClick('sun')}>
          <div className="w-text">
            <p className="w-subTitle"> 더움</p>
            <p className="w-subbTitle">햇빛이 많고 더운 날</p>
          </div>
          <img src={sun} alt="" />
        </div>
        <button className="w-next" onClick={pressNext}>
          다음
        </button>
      </div>
    </div>
  );
};

export default Weather;
