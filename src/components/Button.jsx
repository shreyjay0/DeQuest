import React from 'react';

const Button = (props) => {
  const { btnText, onClick, className } = props;
  return (
    <div className="btn">
      <button onClick={onClick} className={`bg-deq-blue ${className}`}>
        {btnText}
      </button>
    </div>
  );
};

export default Button;
