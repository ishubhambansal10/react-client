import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {
  // eslint-disable-next-line max-len
  Grid, Paper, FormControl, Avatar, OutlinedInput, InputLabel, InputAdornment, FormHelperText,
} from '@mui/material';
import { pink } from '@mui/material/colors';
import { LoadingButton } from '@mui/lab';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailIcon from '@mui/icons-material/Email';

import { loginFormSchema } from '../../Validations/Validations';
import { isTouched } from '../Trainee/helper';
import { styles } from './style';
import { callApi } from '../../lib/utils/api';
import { SnackbarContext } from '../../contexts/SnackbarProvider/SnackbarProvider';

const Login = () => {
  const initialState = {
    email: {
      input: '',
      isTouched: false,
    },
    password: {
      input: '',
      isTouched: false,
    },
    error: {},
  };
  const [inputs, setInputs] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const handleOpen = useContext(SnackbarContext);

  const validation = async (value, data) => {
    try {
      await loginFormSchema.validate({
        ...Object.keys(inputs).reduce((acc, curr) => ({
          ...acc,
          [curr]: inputs[curr].input,
        }), {}),
        [data]: value,
      }, {
        abortEarly: false,
      });
      setInputs({
        ...inputs,
        [data]: {
          input: value,
          isTouched: true,
        },
        error: {},
      });
    } catch (err) {
      const errMsg = {};
      if (err) {
        err.inner.forEach((errItem) => {
          errMsg[errItem.path] = errItem.message;
        });
        setInputs({
          ...inputs,
          [data]: {
            input: value,
            isTouched: true,
          },
          error: errMsg,
        });
      }
    }
  };

  const handleBlur = (event) => {
    const { value, name: data } = event.target;
    validation(value, data);
  };
  const handleChange = (event) => {
    const { value, name: data } = event.target;
    validation(value, data);
  };
  const handleSubmit = async () => {
    setLoading(true);
    const { data } = await callApi('user/createToken', 'post', null, { email: inputs.email.input, password: inputs.password.input });
    console.log('Received data', data);
    setTimeout(() => {
      if (data) {
        setLoading(false);
        localStorage.setItem('token', data.data.token);
        history.push('./trainee');
      } else {
        setLoading(false);
        handleOpen('Invalid Login Credentials', 'error');
      }
    }, [1000]);
    console.log({
      email: inputs.email.input,
      password: inputs.password.input,
    });
  };
  return (
    <Grid>
      <Paper elevation={3} style={styles.body}>
        <Grid align="center" style={styles.login}>
          <Avatar sx={{ bgcolor: pink[500] }}>
            <LockOutlinedIcon fontSize="small" />
          </Avatar>
          <h2 style={styles.heading}>Login</h2>
        </Grid>
        <FormControl
          margin="dense"
          sx={{
            mt: '1rem',
            width: '90%',
          }}
          value={inputs.email.input}
          required
          error={(inputs.email.isTouched && inputs.error.email)}
          style={styles.textFields}
        >
          <InputLabel htmlFor="outlined-adornment-email">Email Address</InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"
            type="email"
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            startAdornment={(
              <InputAdornment position="start">
                <EmailIcon fontSize="small" sx={{ color: 'black', fontSize: '22px' }} />
              </InputAdornment>
            )}
            label="Email Address"
          />
          <FormHelperText
            id="outlined-email-helper-text"
            error={(inputs.email.isTouched && inputs.error.email)}
          >
            {inputs.error.email}
          </FormHelperText>
        </FormControl>
        <FormControl
          margin="dense"
          sx={{
            mt: '1rem',
            width: '90%',
          }}
          variant="outlined"
          value={inputs.password.input}
          error={(inputs.password.isTouched && inputs.error.password)}
          style={styles.textFields}
        >
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            type="password"
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            startAdornment={(
              <InputAdornment position="start">
                <VisibilityOffIcon fontSize="small" sx={{ color: 'black', fontSize: '22px' }} />
              </InputAdornment>
            )}
            label="Password"
          />
          <FormHelperText
            id="outlined-email-helper-text"
            error={(inputs.password.isTouched && inputs.error.password)}
          >
            {inputs.error.password}
          </FormHelperText>
        </FormControl>
        <LoadingButton
          type="submit"
          style={styles.button}
          loading={loading}
          sx={{
            mt: '2rem',
            width: '90%',
          }}
          onClick={handleSubmit}
          variant="contained"
          disabled={!(!isTouched(inputs) && !(Object.keys(inputs.error).length > 0))}
        >
          SIGN IN
        </LoadingButton>
      </Paper>
    </Grid>
  );
};

export default Login;
