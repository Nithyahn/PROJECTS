import React from 'react';

const RenewablesInput = ({ name, value, onChange }) => {
  return (
    <div>
      <label>Renewables %:</label>
      <input
        type="number"
        name={name}
        value={value}
        onChange={onChange}
        min="0"
        max="100"
      />
    </div>
  );
};

export default RenewablesInput;
