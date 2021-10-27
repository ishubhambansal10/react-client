import React, { useState } from 'react';
import { OPTIONS, OPTIONS_CRICKET, OPTIONS_FOOTBALL } from '../../configs/constants';
import {
  SelectField, TextField, RadioGroup, Button,
} from '../../Components/index';
import { hasError, isTouched, getError } from './helpers/helper';
import './style.css';
import { formValueSchema } from '../../Validations/Validations';

const InputDemo = () => {
  const [inputs, setInputs] = useState({
    name: {
      input: '',
      isTouched: false,
      hasError: false,
      getError: '',
    },
    sport: {
      input: '',
      isTouched: false,
      hasError: false,
      getError: '',
    },
    cricket: {
      input: '',
      isTouched: false,
      hasError: false,
      getError: '',
    },
    football: {
      input: '',
      isTouched: false,
      hasError: false,
      getError: '',
    },
  });
  const handleChange = (fieldName, event) => {
    const { value } = event.target;
    setInputs({ ...inputs, [fieldName]: { ...inputs[fieldName], input: value } });
  };
  const handleBlur = async (fieldName, event) => {
    const { value } = event.target;
    const isValid = await formValueSchema.isValid({ [fieldName]: value });
    console.log(isValid);
    if (isValid === false) {
      const errMsg = await formValueSchema.validate({ [fieldName]: value }, { abortEarly: false });
      console.log(errMsg);
    }
    // eslint-disable-next-line max-len
    setInputs({ ...inputs, [fieldName]: { ...inputs[fieldName], isTouched: true, hasError: !isValid } });
  };
  // useEffect(() => {
  //   const {
  //     name, sport, cricket, football,
  //   } = inputs;
  //   console.log({
  //     name, sport, cricket, football,
  //   });
  // }, [inputs]);

  const handlebuttonClick = (event) => {
    const { value } = event.target;
    console.log('Submit button clicked', value);
  };
  return (
    <div className="container">
      <TextField
        value={inputs.name.input}
        onChange={(event) => handleChange('name', event)}
        onBlur={(event) => handleBlur('name', event)}
        error={inputs.name.hasError ? getError() : ''}
      />
      <SelectField
        value={inputs.sport.input}
        onChange={(event) => handleChange('sport', event)}
        onBlur={(event) => handleBlur('sport', event)}
        options={OPTIONS}
        error={inputs.sport.hasError ? getError() : ''}
      />
      {inputs.sport.input && (
        <RadioGroup
          options={inputs.sport.input === 'cricket' ? OPTIONS_CRICKET : OPTIONS_FOOTBALL}
          onChange={inputs.sport.input === 'cricket' ? (event) => handleChange('cricket', event) : (event) => handleChange('football', event)}
          value={inputs.sport.input === 'cricket' ? inputs.cricket.input : inputs.football.input}
          onBlur={inputs.sport.input === 'cricket' ? (event) => handleBlur('cricket', event) : (event) => handleBlur('football', event)}
          error={(inputs.cricket.hasError || inputs.football.hasError) ? getError() : ''}
        />
      )}
      <div>
        <Button value="Cancel" color="default" onClick={() => { console.log('Cancel button Clicked'); }} />
        <Button value="Submit" color="primary" onClick={handlebuttonClick} disabled={hasError && isTouched} />
      </div>
    </div>
  );
};

export default InputDemo;
