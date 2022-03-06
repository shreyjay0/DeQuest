import React from 'react';
import TopicCard from './TopicCard';

const Topics = [
  {
    topic: 'Typescript',
    c1: 'bg-deq-blue-40',
    c2: 'text-deq-blue',
  },
  {
    topic: 'Angular',
    c1: 'bg-deq-red-40',
    c2: 'text-deq-red',
  },
];

const Suggestion = () => (
  <div className="grid-row-3 grid gap-5 rounded-deq bg-white p-4">
    <div className="heading text-d-18 mb-2 w-full border-b border-gray-200 pb-3 font-semibold">
      Suggested topics
    </div>
    {Topics.map((topic) => (
      <TopicCard topic={topic.topic} c1={topic.c1} c2={topic.c2} />
    ))}
    <a href="/" className="text-center text-deq-blue-lt">
      View more
    </a>
  </div>
);

export default Suggestion;
