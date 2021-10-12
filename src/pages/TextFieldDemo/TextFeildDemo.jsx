import React from 'react';
import { TextField } from '../../Components';

const TextFieldDemo = () => (
  <div>
    <TextField heading="This is a disabled Input" value="Disabled Input" disabled inputStyle="disabledInput" />
    <TextField heading="A Valid Input" value="Accessible" inputStyle="validInput" />
    <TextField heading="An Input with errors" value="101" error="Could not be greater than" inputStyle="inputWithErrors" />
  </div>
);

export default TextFieldDemo;
