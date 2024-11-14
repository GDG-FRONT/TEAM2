import React from 'react';
import { useNavigate } from 'react-router-dom';

const Table = () => {
  const navigate = useNavigate();

  const handleDirectInputClick = () => {
    navigate('/keypad');
  };

  return (
    <div class="table">
      <div class="amoutTable">30ml</div>
      <div class="amoutTable">50ml</div>
      <div class="amoutTable">100ml</div>
      <div class="amoutTable">150ml</div>
      <div class="amoutTable">200ml</div>
      <div class="amoutTable">250ml</div>
      <div class="amoutTable">300ml</div>
      <div class="amoutTable">300ml</div>
      <div class="amoutTable">330ml</div>
      <div class="amoutTable">400ml</div>
      <div class="amoutTable">500ml</div>
      <div class="amoutTable">600ml</div>
      <div class="amoutTable">800ml</div>
      <div class="amoutTable">1000ml</div>
      <button class="directAmount" onClick={handleDirectInputClick}>
        직접 입력하기
      </button>
    </div>
  );
};
export default Table;
