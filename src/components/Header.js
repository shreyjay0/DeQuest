import React from 'react';
import Button from './Button';
import { dequest } from '../constants/img';

const Header = () => {
  const onLoginClick = () => {
    console.log('Verify identity, a pop up will appear');
    console.log('Make sure the popup url starts with: ');
    console.log(
      '%c https://identity.deso.org',
      'color: blue; font-weight: bold; font-size: 20px;'
    );
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
