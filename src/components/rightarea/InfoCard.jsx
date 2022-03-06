import React from 'react';

const InfoCard = () => (
  <div className="grid-row-3 grid gap-5 rounded-deq bg-white p-4">
    <div className="heading text-d-18 mb-2 w-full border-b border-gray-200 pb-3 font-semibold">
      What is DeSo?
    </div>
    <div className="max-w-[290px] rounded-deq bg-deq-blue-sug-40 p-3 font-bold text-deq-blue-sug">
      DeSo is the first and only blockchain custom-built from the ground up to
      power and scale a new category of decentralized social applications to one
      billion users. Ultimate Vision: Today, a post submitted to Instagram,
      TikTok, or Twitter belongs to these corporations, rather than the creator
      who posted it. And the monetization goes predominantly to these
      corporations as a result which DeSo aims at solving.
    </div>
    <a href="/deso" className="text-center text-deq-blue-lt">
      Learn more
    </a>
  </div>
);

export default InfoCard;
