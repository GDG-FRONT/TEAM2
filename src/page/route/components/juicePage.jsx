import React from 'react';
import Table from './table';
import TopBar from './topBar';
import AddBtn from './addBtn';

const JuicePage = () => {
  return (
    <div>
      <TopBar></TopBar>
      <div class="titleContainer">
        <div class="titleName">주스</div>
        <div class="titleA">150ml</div>
      </div>
      <Table></Table>
      <AddBtn></AddBtn>
    </div>
  );
};

export default JuicePage;
