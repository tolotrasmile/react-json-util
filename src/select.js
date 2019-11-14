import React from "react";

function Select({ options = [], ...props }) {
  return (
    <select {...props}>
      {options.map((option, key) => (
        <option key={key} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
