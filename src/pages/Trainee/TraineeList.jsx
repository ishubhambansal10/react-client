import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { traineeFormSchema } from '../../Validations/Validations';
import { AddDialog } from './components';
import { GenericTable } from '../../Components/index';
import trainees from './data/trainee';

const getFormattedDate = (date) => moment(date).format('dddd, MMMM Do YYYY, h:mm:ss a');
const column = [
  {
    field: 'name',
    label: 'Name',
  }, {
    field: 'email',
    label: 'Email Address',
    format: (value) => value && value.toUpperCase(),
  },
  {
    field: 'createdAt',
    label: 'Date',
    align: 'right',
    format: getFormattedDate,
  },
];

const TraineeList = () => {
  const initialState = {
    name: {
      input: '',
      isTouched: false,
    },
    email: {
      input: '',
      isTouched: false,
    },
    password: {
      input: '',
      isTouched: false,
    },
    confirmPassword: {
      input: '',
      isTouched: false,
    },
    error: {},
  };

  const [inputs, setInputs] = useState(initialState);
  console.log('STATE:: ', JSON.stringify(inputs, null, 2));
  const [open, setOpen] = useState(false);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState();
  const history = useHistory();

  const validation = async (value, data) => {
    try {
      await traineeFormSchema.validate({
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
        console.log('error', err.inner);
        err.inner.forEach((errItem) => {
          errMsg[errItem.path] = errItem.message;
        });
        console.log(errMsg);
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setInputs(initialState);
  };
  const handleSubmit = () => {
    console.log({
      name: inputs.name.input,
      email: inputs.email.input,
      password: inputs.password.input,
    });
  };
  const handleChange = (event) => {
    const { value, name: data } = event.target;
    validation(value, data);
  };
  const handleBlur = (event) => {
    const { value, name: data } = event.target;
    validation(value, data);
  };
  const handleSelect = (id) => {
    history.push(`/trainee/${id}`);
  };
  const handleSort = (field) => {
    if (orderBy === field) {
      setOrder(order === 'desc' ? 'asc' : 'desc');
    } else {
      setOrder('asc');
      setOrderBy(field);
    }
  };

  useEffect(() => {
    const {
      name, email, password, confirmPassword,
    } = inputs;
    console.log({
      name, email, password, confirmPassword,
    });
  }, [inputs]);
  return (
    <>
      <AddDialog
        open={open}
        onClick={handleClickOpen}
        onClose={handleClose}
        onButtonClick={handleSubmit}
        onChange={handleChange}
        onBlur={handleBlur}
        value={inputs}
      />
      <GenericTable
        id="id"
        columns={column}
        data={trainees}
        order={order}
        orderBy={orderBy}
        onSelect={handleSelect}
        onSort={handleSort}
      />
      {/* <ul>
        {trainees.map((item) => (
          <li key={item.id}>
            <Link to={`/trainee/${item.id}`}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul> */}
    </>
  );
};
export default TraineeList;
