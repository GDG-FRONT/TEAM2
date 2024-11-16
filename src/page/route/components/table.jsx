import React from 'react';
import { useNavigate } from 'react-router-dom';

const Table = () => {
  const navigate = useNavigate();

  const handleDirectInputClick = () => {
    navigate('/keypad');
  };

  return (
    <div class="content">
      <div class="direct">1개 선택</div>
      <div class="table">
        <div class="row">
          <div class="amoutTable">30ml</div>
          <div class="amoutTable">50ml</div>
          <div class="amoutTable">100ml</div>
          <div class="amoutTable">150ml</div>
        </div>
        <div class="row">
          <div class="amoutTable">200ml</div>
          <div class="amoutTable">250ml</div>
          <div class="amoutTable">300ml</div>
          <div class="amoutTable">330ml</div>
        </div>
        <div class="row">
          <div class="amoutTable">400ml</div>
          <div class="amoutTable">500ml</div>
          <div class="amoutTable">600ml</div>
          <div class="amoutTable">800ml</div>
        </div>
        <div class="row">
          <div class="amoutTable">1000ml</div>
          <button class="directAmount" onClick={handleDirectInputClick}>
            직접 입력하기
          </button>
        </div>
      </div>
    </div>
  );
};
export default Table;
