import React from 'react';
import InfoCard from './rightarea/InfoCard';
import Suggestion from './rightarea/Suggestion';

const RightContent = () => (
  <div className="ml-auto max-w-per-30 items-center justify-center">
    <div className="items-center justify-center">
      <Suggestion />
    </div>
    <div className="mt-10 items-center justify-center">
      <InfoCard />
    </div>
  </div>
);

export default RightContent;
