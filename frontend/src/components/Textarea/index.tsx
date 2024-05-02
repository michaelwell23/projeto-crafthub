import React, { TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}

const Textarea: React.FC<TextareaProps> = ({ name, ...rest }) => {
  return (
    <>
      <textarea id={name} {...rest} />
    </>
  );
};

export default Textarea;
