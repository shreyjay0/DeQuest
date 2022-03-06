import React from 'react';
import Button from '../components/Button';
import { qa_main } from '../constants/img';

const GoDequest = () => {
  const onGoDequestClick = () => {
    console.log('opening dequest');
    window.location.href = 'http://app.localhost:3000/';
  };

  return (
    <div className="">
      <div className="grid grid-cols-8 gap-3">
        <div className="col-span-3">
          <div className="ml-14 text-5xl">
            <div>Stuck on a problem while you’re working?</div>
            <div className="py-6 text-center">OR</div>
            <div>Want to share your knowledge with others?</div>
          </div>

          <div className="ml-14 pt-8 text-5xl">
            <Button
              className="h-[80px] rounded-[24px] px-[70px] font-extrabold text-white"
              btnText="Go DeQuest"
              onClick={onGoDequestClick}
            />
          </div>
        </div>
        <div className="col-span-5">
          <img src={qa_main} alt="qna" />
        </div>
      </div>
    </div>
  );
};

export default GoDequest;
