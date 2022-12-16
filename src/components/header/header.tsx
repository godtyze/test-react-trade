import React from 'react';
import './header.css';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <h1 className='header__title'>
        Ход торгов <span>Тестовые торги на аппарат ЛОТОС №2033564 (16.12.2022 10:00)</span>
      </h1>
    </header>
  );
};

export default Header;