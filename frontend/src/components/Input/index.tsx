import React from 'react';

const Input: React.FC = () => {
  return (
    <>
      <fieldset>
        <input type='name' name='name' id='name' placeholder='Name' required />
      </fieldset>
    </>
  );
};

export default Input;
