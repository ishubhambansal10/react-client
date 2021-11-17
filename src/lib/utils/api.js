import axios from 'axios';

const url = 'http://127.0.0.1:9000/api/';
export const callApi = async (email, password) => {
  try {
    const response = await axios.post(url, { email, password });
    console.log(response);
    // const { token } = response.data;
    console.log(response.data);
    // localStorage.setItem('token', token);
    return (response);
  } catch (error) {
    console.error(error);
    return ('error', error);
  }
};
