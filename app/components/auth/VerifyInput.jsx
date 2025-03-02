'use client'

import React, { useState, useRef } from 'react';

const VerifyInput = ({code, setCode}) => {
  const inputRefs = useRef([]);
  const handleChange = (e, index) => {
    const newValue = e.target.value;

    if (/[^0-9]/.test(newValue)) return;

    const newInputs = [...code];
    newInputs[index] = newValue;

    setCode(newInputs);

    if (newValue && index < code.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && code[index] === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="flex justify-center gap-2 mt-5 max-w-[100%]">
      {code.map((input, index) => (
        <input
          key={index}
          type="text"
          value={input}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          maxLength="1"
          ref={(el) => (inputRefs.current[index] = el)}
          className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 text-center text-xl md:text-2xl border-[1px]  border-[#555555] mt-2 rounded-md
           focus:outline-none focus:ring-2 focus:ring-blue -500 bg-transparent"
        />
      ))}
    </div>
  );
};

export default VerifyInput;
