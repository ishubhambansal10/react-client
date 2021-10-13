import React from 'react';
import { Slider, TextField } from '../../Components/index';
import { BANNERS, DEFAULT_BANNER_IMAGE } from '../../configs/constants';

const TextFieldDemo = () => (
  <div>
    <div>
      <Slider altText="Default Banner" defaultBanner={DEFAULT_BANNER_IMAGE} banners={BANNERS} height="200" random />
    </div>
    <div>
      <TextField heading="This is a disabled Input" value="Disabled Input" disabled inputStyle="disabledInput" />
      <TextField heading="A Valid Input" value="Accessible" inputStyle="validInput" />
      <TextField heading="An Input with errors" value="101" error="Could not be greater than" inputStyle="inputWithErrors" />
    </div>
  </div>
);

export default TextFieldDemo;
