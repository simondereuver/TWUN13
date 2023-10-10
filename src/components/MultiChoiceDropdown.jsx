import React from 'react';
import Select from 'react-select';

const MultiChoiceDropdown = (props) => {
  return (
    <div className="multi-choice-dropdown">
      <Select
        options={props.users}
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