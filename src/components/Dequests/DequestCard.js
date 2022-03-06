import React from 'react';
import { diamond, upvote, share } from '../../constants/img';

const DequestCard = () => {
  const upvoteCount = Math.floor(Math.random() * 100);
  const title = 'Css animations.';
  const desc =
    'My doubt is regarding css animations.How can we animate an object for an infinite time. So, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum sit elementum volutpat velit fermentum mollis rhoncus. Varius quam orci, vulputate id eget ac, diam enim natoque. Fringilla aliquet molestie amet purus. Id morbi vehicula consequat elit aliquam ut.';
  const onUpvote = () => {
    console.log('upvoted');
  };
  return (
    <div className="dequest-card mb-4 flex border-b-2 pb-6">
      <div className="dequest-card_upvote m-auto flex flex-col">
        <button
          type="button"
          className="duration-450 translate my-1 transform ease-in-out hover:scale-105 hover:text-deq-blue"
          onClick={onUpvote()}
        >
          <img src={upvote} alt="upvote" className="h-6 w-6" />
        </button>
        <span className=" my-1">{upvoteCount}</span>
      </div>
      <div className="dequest-card__body max-w-[480px]">
        <div className="dequest-card__body__header">
          <p>{title}</p>
        </div>
        <div className="dequest-card__body__description">
          <p>{desc}</p>
        </div>
      </div>
      <div className="dequest-card__actions m-auto flex flex-col">
        <button
          type="button"
          className="duration-450 translate my-3 transform ease-in-out hover:scale-105"
          onClick={() => {}}
        >
          <img src={share} alt="share" />
        </button>
        <button
          type="button"
          className="dequest-card__actions__item duration-450 translate my-3 transform ease-in-out hover:scale-105"
        >
          <img src={diamond} alt="diamonds" />
        </button>
      </div>
    </div>
  );
};

export default DequestCard;
