import React from 'react';
import arrow from '../img/left-arrow.svg';
import '../../../scss/route/Btn.scss';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {
  const navigate = useNavigate();

  const before = () => {
    navigate(-1);
  };
  return (
    <div class="topText">
      <img src={arrow} alt="" onClick={before} />
      <div>몇 ml 섭취하셨나요?</div>
    </div>
  );
};

export default TopBar;
