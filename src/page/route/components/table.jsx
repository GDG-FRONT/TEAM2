import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Table = () => {
  const navigate = useNavigate();
  const [selectedAmount, setSelectedAmount] = useState(null);

  const handleDirectInputClick = () => {
    navigate('/keypad');
  };

  const handleAmountClick = (amount) => {
    setSelectedAmount((prev) => (prev === amount ? null : amount)); // 동일한 값이면 해제
  };

  return (
    <div class="content">
      <div class="direct">1개 선택</div>
      <div class="table">
        <div class="row">
          <div
            className={`amoutTable ${
              selectedAmount === '30ml' ? 'selected' : ''
            }`}
            onClick={() => handleAmountClick('30ml')}>
            30ml
          </div>
          <div
            className={`amoutTable ${
              selectedAmount === '50ml' ? 'selected' : ''
            }`}
            onClick={() => handleAmountClick('50ml')}>
            50ml
          </div>
          <div
            className={`amoutTable ${
              selectedAmount === '100ml' ? 'selected' : ''
            }`}
            onClick={() => handleAmountClick('100ml')}>
            100ml
          </div>
          <div
            className={`amoutTable ${
              selectedAmount === '150ml' ? 'selected' : ''
            }`}
            onClick={() => handleAmountClick('150ml')}>
            150ml
          </div>
        </div>
        <div class="row">
          <div
            className={`amoutTable ${
              selectedAmount === '200ml' ? 'selected' : ''
            }`}
            onClick={() => handleAmountClick('200ml')}>
            200ml
          </div>
          <div
            className={`amoutTable ${
              selectedAmount === '250ml' ? 'selected' : ''
            }`}
            onClick={() => handleAmountClick('250ml')}>
            250ml
          </div>
          <div
            className={`amoutTable ${
              selectedAmount === '300ml' ? 'selected' : ''
            }`}
            onClick={() => handleAmountClick('300ml')}>
            300ml
          </div>
          <div
            className={`amoutTable ${
              selectedAmount === '330ml' ? 'selected' : ''
            }`}
            onClick={() => handleAmountClick('330ml')}>
            330ml
          </div>
        </div>
        <div class="row">
          <div
            className={`amoutTable ${
              selectedAmount === '400ml' ? 'selected' : ''
            }`}
            onClick={() => handleAmountClick('400ml')}>
            400ml
          </div>
          <div
            className={`amoutTable ${
              selectedAmount === '500ml' ? 'selected' : ''
            }`}
            onClick={() => handleAmountClick('500ml')}>
            500ml
          </div>
          <div
            className={`amoutTable ${
              selectedAmount === '600ml' ? 'selected' : ''
            }`}
            onClick={() => handleAmountClick('600ml')}>
            600ml
          </div>
          <div
            className={`amoutTable ${
              selectedAmount === '800ml' ? 'selected' : ''
            }`}
            onClick={() => handleAmountClick('800ml')}>
            800ml
          </div>

          {/* <div class="amoutTable">400ml</div>
          <div class="amoutTable">500ml</div>
          <div class="amoutTable">600ml</div>
          <div class="amoutTable">800ml</div> */}
        </div>
        <div class="row">
          <div
            className={`amoutTable ${
              selectedAmount === '1000ml' ? 'selected' : ''
            }`}
            onClick={() => handleAmountClick('1000ml')}>
            1000ml
          </div>
          <button class="directAmount" onClick={handleDirectInputClick}>
            직접 입력하기
          </button>
        </div>
      </div>
    </div>
  );
};
export default Table;
