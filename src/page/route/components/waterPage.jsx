import React from 'react';
import Table from './table';
import TopBar from './topBar';
import AddBtn from './addBtn';
import '../../../scss/route/titleContainer.scss';

const WaterPage = () => {
  return (
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
    </div>
  );
};

export default WaterPage;
