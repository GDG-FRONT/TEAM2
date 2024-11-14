import React from 'react';
import Table from './table';
import TopBar from '../../main/components/topBar';
import AddBtn from './addBtn';

const JuicePage = () => {
  return (
    <div>
      <TopBar></TopBar>
      <div>우유</div>
      <div>150ml</div>
      <Table></Table>
      <AddBtn></AddBtn>
    </div>
  );
};

export default JuicePage;
