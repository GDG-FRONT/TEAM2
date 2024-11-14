import React from 'react';
import TopBar from '../../main/components/topBar';
import Table from './table';
import AddBtn from './addBtn';

const SodaPage = () => {
  return (
    <div>
      <TopBar></TopBar>
      <div>탄산수</div>
      <div>150ml</div>
      <Table></Table>
      <AddBtn></AddBtn>
    </div>
  );
};
export default SodaPage;
