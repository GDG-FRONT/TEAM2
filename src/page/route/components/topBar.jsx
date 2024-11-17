import React from 'react';
import arrow from '../img/left-arrow.svg';
import '../../../scss/route/Btn.scss';

const TopBar = () => {
  return (
    <div class="topText">
      <img src={arrow} alt="" />
      <div>몇 ml 섭취하셨나요?</div>
    </div>
  );
};

export default TopBar;
