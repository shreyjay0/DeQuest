import React from 'react';

const AddPost = ({ addPost }) => {
  let input;
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addPost(input.value);
          input.value = '';
        }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default AddPost;
