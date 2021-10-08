import React from 'react';
import { TextField } from '../../Components';

const TextFieldDemo = () => (
  <div>
    <TextField heading="This is a disabled Input" value="Disabled Input" disabled />
    <TextField heading="A Valid Input" value="Accessible" />
    <TextField heading="An Input with errors" value="101" error="Could not be greater than" />
  </div>
);

export default TextFieldDemo;
