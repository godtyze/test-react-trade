import React from 'react';
import './App.css';
import Timer from "./components/timer/timer";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className='table-wrapper'>
        <span className='table-tip'>Уважаемые участники, во время вашего хода вы можете изменить параметры торгов,
          указанных в таблице:</span>
        <div className='timer-wrapper'>
          <span className='timer-text'>ХОД</span>
          <Timer/>
        </div>
      </div>
    </div>
  );
}

export default App;
