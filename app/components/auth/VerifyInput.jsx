'use client'

import React, { useState, useRef } from 'react';

const VerifyInput = () => {
  const [inputs, setInputs] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const newValue = e.target.value;

    if (/[^0-9]/.test(newValue)) return;

    const newInputs = [...inputs];
    newInputs[index] = newValue;

    setInputs(newInputs);

    if (newValue && index < inputs.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && inputs[index] === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="flex justify-center gap-2 mt-5">
      {inputs.map((input, index) => (
        <input
          key={index}
          type="text"
          value={input}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          maxLength="1"
          ref={(el) => (inputRefs.current[index] = el)}
          className="w-16 h-16 text-center text-2xl border-[1px]  border-[#555555] mt-2 rounded-md
           focus:outline-none focus:ring-2 focus:ring-blue -500 bg-transparent"
        />
      ))}
    </div>
  );
};

export default VerifyInput;
