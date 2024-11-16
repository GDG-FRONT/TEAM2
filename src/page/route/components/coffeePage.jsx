import React from 'react';
import Table from './table';
import TopBar from './topBar';
import AddBtn from './addBtn';

const CoffeePage = () => {
  return (
    <div>
      <TopBar></TopBar>
      <div>커피</div>
      <div>150ml</div>
      <Table></Table>
      <AddBtn></AddBtn>
    </div>
  );
};

export default CoffeePage;
