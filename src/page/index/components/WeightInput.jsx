import '../../../scss/index/_weight.scss';
import React from 'react';

const Weight = ({ onDone }) => {
  const handleComplete = () => {
    if (onDone) onDone(); // onDone 호출
  };

  return (
    <div className="weight">
      <div className="recordText">
        <div className="title"> 몸무게를 입력해주세요. </div>
        <div className="subtitle"> 정수로 입력해주세요. </div>{' '}
      </div>
      <button onClick={handleComplete}>완료</button> {/* 버튼 클릭 시 완료 */}
    </div>
  );
};

export default Weight;
