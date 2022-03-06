import React from 'react';

const Button = (props) => {
  const { btnText, onClick, className } = props;
  return (
    <div className="button">
      <button
        type="button"
        onClick={onClick}
        className={`transform bg-deq-blue transition duration-300 ease-in hover:scale-95 ${className}`}
      >
        {btnText}
      </button>
    </div>
  );
};

export default Button;
