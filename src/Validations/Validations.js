import * as yup from 'yup';

export const Schema = yup.object().shape({
  name: yup.string().min(3).required,
  sport: yup.string().required,
  role: yup.string().required,
});
