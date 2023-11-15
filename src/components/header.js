import React from 'react';
import '../assets/Header.scss';

const Header = () => {
  return (
    <header>
      <h1>내 개인 홈페이지</h1>
      <nav>
        <ul>
          <li><a href="#about">소개</a></li>
          <li><a href="#projects">프로젝트</a></li>
          <li><a href="#contact">연락</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;