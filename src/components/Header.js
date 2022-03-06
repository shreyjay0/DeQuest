import React from 'react';
import Button from './Button';
import { dequest } from '../constants/img';

const Header = () => {
  const onLoginClick = () => {
    console.log('opening identity');
  };
  return (
    <div className="header flex items-center justify-between p-m-20">
      <h1>
        <a href="/">
          <img src={dequest} alt="DeQuest" />
        </a>
      </h1>
      <ul>
        <li>
          <Button
            className="h-[45px] w-[88px] rounded-[24px] font-extrabold text-white"
            btnText="Login"
            onClick={onLoginClick}
          />
        </li>
      </ul>
    </div>
  );
};

export default Header;
