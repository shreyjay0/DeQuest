import React from 'react';

const TopicCard = ({ topic, c1, c2 }) => (
  <div className={`flex max-w-[290px] rounded-deq ${c1} p-3 font-bold ${c2}`}>
    <div>{topic}</div>
    <div className="ml-auto">
      <a
        href="/"
        className={`${c2} rounded-full bg-white p-1 px-3 font-bold no-underline`}
      >
        DeQuest
      </a>
    </div>
  </div>
);

export default TopicCard;
