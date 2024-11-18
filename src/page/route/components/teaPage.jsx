import React from 'react';
import Table from './table';
import TopBar from './topBar';
import AddBtn from './addBtn';

const TeaPage = () => {
  return (
    <div>
      <TopBar></TopBar>
      <div class="titleContainer">
        <div class="titleName">차</div>
        <div class="titleA">150ml</div>
      </div>
      <Table></Table>
      <AddBtn></AddBtn>
    </div>
  );
};

export default TeaPage;
