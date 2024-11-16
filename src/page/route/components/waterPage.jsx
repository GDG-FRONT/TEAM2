import React from 'react';
import Table from './table';
import TopBar from './topBar';
import AddBtn from './addBtn';
import '../../../scss/route/titleContainer.scss';

const WaterPage = () => {
  return (
    <div>
      <TopBar></TopBar>
      <div className="titleContainer">
        <div class="titleName">물</div>
        <div class="titleA">150ml</div>
      </div>
      <Table></Table>
      <AddBtn></AddBtn>
    </div>
  );
};

export default WaterPage;
