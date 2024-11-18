import React from 'react';
import TopBar from './topBar';
import Table from './table';
import AddBtn from './addBtn';

const SodaPage = () => {
  return (
    <div>
      <TopBar></TopBar>
      <div class="titleContainer">
        <div class="titleName">탄산수</div>
        <div class="titleA">150ml</div>
      </div>
      <Table></Table>
      <AddBtn></AddBtn>
    </div>
  );
};
export default SodaPage;
