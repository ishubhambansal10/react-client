import * as yup from 'yup';

export const formValueSchema = yup.object().shape({
  name: yup.string().min(3, 'Minimum 3 characters required!').label('Name'),
  sport: yup.string().label('sport'),
  cricket: yup.string().label('What you do?'),
  football: yup.string().label('What you do?'),
});

export const traineeFormSchema = yup.object().shape({
  name: yup.string().min(3, 'Minimum 3 characters required!').label('Name').required(),
  email: yup.string().email().label('Email Address').required(),
  password: yup.string()
    .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, 'Must contains 8 characters, at least one uppercase letter,one lowercase letter and one number')
    .required('Password is a required field'),
  confirmPassword: yup.string().label('Confirm Password')
    .required()
    .when('password', {
      is: (password) => (!!(password && password.length > 0)),
      then: yup.string().oneOf([yup.ref('password')], "Password doesn't match"),
    }),
});
