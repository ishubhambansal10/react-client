import axios from 'axios';

const baseUrl = 'http://127.0.0.1:9000/api/';
export const callApi = async (endPoint, route, header, PARAMS, values) => {
  const args = {
    url: `${baseUrl}${endPoint}`,
    method: route,
    headers: header || {},
    params: PARAMS || {},
    data: values || {},
  };

  try {
    const response = await axios(args);
    console.log(response);
    return (response);
  } catch (error) {
    console.error(error);
    return ('error', error);
  }
};
