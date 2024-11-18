import React, { useState } from 'react';
import Table from './table';
import TopBar from './topBar';
import AddBtn from './addBtn';

const Warning = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true); // 팝업창 상태 관리

  const closePopup = () => {
    setIsPopupOpen(false); // 팝업 닫기
  };

  return (
    <div>
      <div class="page">
        <TopBar></TopBar>
        <div class="titleContainer">
          <div class="titleName">물</div>
          <div class="titleA">150ml</div>
        </div>
        <div class="main">
          <Table></Table>
          <AddBtn></AddBtn>
        </div>

        {isPopupOpen && (
          <div className="overlay">
            <div className="popup">
              <h2>오류</h2>
              <p>30ML 이상으로 입력해주세요.</p>
              <button className="close-btn" onClick={closePopup}>
                다시 입력하기
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Warning;
