import React, { useState } from 'react';

const InputDemo = () => {
  const [firstName, setfirstName] = useState();
  const handleChange = (event) => {
    const { value } = event.target;
    console.log('Valueofinput', value);
    setfirstName(value);
  };
  return (
    <label htmlFor="firstName">
      FirstName
      <input id="firstName" name="firstName" type="text" onChange={handleChange} value={firstName} />
    </label>
  );
};

export default InputDemo;
