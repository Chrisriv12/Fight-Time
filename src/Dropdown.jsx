import React, { useState } from 'react';

export default function Dropdown({ options, onSelect }) {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onSelect(selectedValue);
  };

  return (
    <select value={selectedOption} onChange={handleChange}>
    {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}