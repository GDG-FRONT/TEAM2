import React from 'react';
import Table from './table';
import TopBar from './topBar';
import AddBtn from './addBtn';
import KeypadObj from './keypad-obj';

const Keypad = () => {
  return (
    <div>
      <TopBar></TopBar>
      <div class="titleContainer">
        <div class="titleName">물</div>
        <div class="titleA">키패드로 숫자 입력 ml</div>
      </div>

      <Table></Table>
      <AddBtn isStatic={true}></AddBtn>
      <KeypadObj></KeypadObj>
    </div>
  );
};
export default Keypad;

//추가하기 누르면 경고창 뜨는거로 ㄱ
