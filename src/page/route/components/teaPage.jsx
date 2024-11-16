import React from 'react';
import Table from './table';
import TopBar from './topBar';
import AddBtn from './addBtn';

const TeaPage = () => {
  return (
    <div>
      <TopBar></TopBar>
      <div>차</div>
      <div>150ml</div>
      <Table></Table>
      <AddBtn></AddBtn>
    </div>
  );
};

export default TeaPage;
