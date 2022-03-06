import React from 'react';
import { profile } from '../constants/img';
import Button from './Button';

const AddPost = ({ addPost }) => {
  let input;
  return (
    <div className="flex max-h-[150px] flex-col rounded-deq bg-white p-4">
      <div className="flex justify-between">
        <div className="ml-[-35px] flex min-w-[550px] items-center justify-evenly">
          <img src={profile} alt="profile" className="mx-1" />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addPost(input.value);
              input.value = '';
            }}
          >
            <input
              className="min-w-[30vw] rounded-deq bg-deq-bg-light p-2"
              placeholder="What are you stuck on?"
              ref={(node) => {
                input = node;
              }}
            />
          </form>
        </div>
        <Button
          btnText="DeQuest"
          className="text-d-18 h-[34px] w-[100px] rounded-deq font-bold text-white"
        />
      </div>
    </div>
  );
};

export default AddPost;
