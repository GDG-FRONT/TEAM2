import React from 'react';
import '../../../scss/route/Btn.scss';
import { useNavigate } from 'react-router-dom';

const AddBtn = ({ isStatic }) => {
  const navigate = useNavigate();

  const warningGo = () => {
    navigate('/warning');
  };
  return (
    <div className={`addContainer ${isStatic ? 'staticPosition' : ''}`}>
      <button class="add" onClick={warningGo}>
        추가하기
      </button>
    </div>
  );
};

export default AddBtn;
