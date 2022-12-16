import React from 'react';
import './App.css';
import Timer from "./components/timer/timer";
import Table from "./components/table/table";
import Header from "./components/header/header";

const App: React.FC = () => {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
