import React, { InputHTMLAttributes } from 'react';

import './style.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  return (
    <>
      <input type='text' id={name} {...rest} />
    </>
  );
};

export default Input;
