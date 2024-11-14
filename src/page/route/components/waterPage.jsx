import React from 'react';
import Table from './table';
import TopBar from '../../main/components/topBar';
import AddBtn from './addBtn';
import '../../../scss/route/table.scss';

const WaterPage = () => {
  return (
    <div>
      <TopBar></TopBar>
      <div>물</div>
      <div>150ml</div>
      <Table></Table>
      <AddBtn></AddBtn>
    </div>
  );
};

export default WaterPage;

//작성할때참고하려고썻습니다상관ㄴㄴ
// const App = () => {
//   return (
//     <TodoTemplate>
//       <TodoInsert />
//       <TodoList />
//     </TodoTemplate>
//   );
// };
