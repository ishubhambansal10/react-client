import * as yup from 'yup';

export const formValueSchema = yup.object().shape({
  name: yup.string().min(3, 'Minimum 3 characters required!').label('Name'),
  sport: yup.string().label('sport'),
  cricket: yup.string().label('What you do?'),
  football: yup.string().label('What you do?'),
});

// formValueSchema.validate({ name: '', sport: '', role: '' }, { abortEarly: false });
