import React from 'react';
import CardBottom from './CardBottom';
import DequestCard from './DequestCard';

const CardView = () => (
  <div className="mt-8 rounded-deq bg-white p-8">
    <DequestCard />
    <CardBottom />
  </div>
);

export default CardView;
