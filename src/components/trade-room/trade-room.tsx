import React from 'react';
import Header from "../header/header";
import Timer from "../timer/timer";
import Table from "../table/table";

const TradeRoom: React.FC = () => {
  return (
    <>
      <Header/>
      <div className='table-wrapper'>
        <span className='table-tip'>Уважаемые участники, во время вашего хода вы можете изменить параметры торгов,
          указанных в таблице:</span>
        <div className='timer-wrapper'>
          <span className='timer-text'>ХОД</span>
          <Timer/>
        </div>
        <Table/>
      </div>
    </>
  );
};

export default TradeRoom;