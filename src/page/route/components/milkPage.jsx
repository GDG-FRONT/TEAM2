import React from 'react';
import Table from './table';
import TopBar from './topBar';
import AddBtn from './addBtn';

const MilkPage = () => {
  return (
    <div>
      <TopBar></TopBar>
      <div class="titleContainer">
        <div class="titleName">우유</div>
        <div class="titleA">150ml</div>
      </div>
      <Table></Table>
      <AddBtn></AddBtn>
    </div>
  );
};

export default MilkPage;
