import React from 'react';
import { profile, answers } from '../../constants/img';

const CardBottom = () => {
  const uname = 'Alan';
  const time = '2 hr ago';
  const answerCount = 21;
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <img
          src={profile}
          alt="profile"
          className="mr-2 h-8 w-8 rounded-full"
        />
        <div className="flex flex-col">
          <div className="flex">
            <span className="text-sm italic">quest by </span>
            <span className="ml-1 text-sm font-bold">{uname}</span>
          </div>
          <span className="text-xs italic text-gray-600">{time}</span>
        </div>
      </div>
      <div className="mr-2 flex items-center">
        <div className="flex flex-col text-right">
          <span className="text-sm font-bold">{answerCount}</span>
          <span className="font-regular text-sm">answers</span>
        </div>
        <span className="ml-2 text-sm text-gray-600">
          <img src={answers} alt="answers" />
        </span>
      </div>
    </div>
  );
};

export default CardBottom;
