import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  // Add more options as needed
];

const MultiChoiceDropdown = () => {
  return (
    <div className="multi-choice-dropdown">
      <Select
        options={options}
        isMulti
        isSearchable
        closeMenuOnSelect={false}
        placeholder="Attendees"
        className="multi-choice-dropdown-select"
      />
    </div>
  );
};

export default MultiChoiceDropdown;