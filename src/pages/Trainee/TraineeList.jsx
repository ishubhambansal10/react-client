import React, { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
// import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { traineeFormSchema } from '../../Validations/Validations';
import { AddDialog, EditDialog, RemoveDialog } from './components';
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
  const actionsInitialState = {
    id: '',
    name: '',
    email: '',
    createdAt: '',
  };

  const [inputs, setInputs] = useState(initialState);
  console.log('STATE:: ', JSON.stringify(inputs, null, 2));
  const [open, setOpen] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openRemoveDialog, setOpenRemoveDialog] = useState(false);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState();
  const [page, setPage] = useState(0);
  const [actions, setActions] = useState(actionsInitialState);
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
  // Add Dialog Handlers
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
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  // Edit Button handlers
  const handleEditDialogOpen = (data) => {
    setActions({
      ...actions,
      name: data.name,
      email: data.email,
    });
    setOpenEditDialog(true);
    console.log('data', data);
  };
  const handleEditChange = (event) => {
    const { value, name: type } = event.target;
    setActions({ ...actions, [type]: value });
  };
  const handleEditSubmit = () => {
    console.log('Edited Item', { name: actions.name, email: actions.email });
    setOpenEditDialog(false);
  };
  const handleEditClose = () => {
    setActions(actionsInitialState);
    setOpenEditDialog(false);
  };

  // Delete Button handlers
  const handleRemoveDialogOpen = (data) => {
    setActions({
      ...actions,
      id: data.id,
      name: data.name,
      email: data.email,
      createdAt: data.createdAt,
    });
    setOpenRemoveDialog(true);
  };
  const handleDelete = () => {
    console.log('Deleted Item', actions);
    setOpenRemoveDialog(false);
  };
  const handleRemoveDialogClose = () => {
    setOpenRemoveDialog(false);
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
        count={100}
        page={page}
        rowsPerPage={10}
        onChangePage={handleChangePage}
        actions={[
          {
            icon: <EditIcon sx={{ color: 'black', fontSize: 'inherit' }} />,
            handler: handleEditDialogOpen,
          },
          {
            icon: <DeleteIcon sx={{ color: 'black', fontSize: 'inherit' }} />,
            handler: handleRemoveDialogOpen,
          },
        ]}
      />
      <EditDialog
        open={openEditDialog}
        value={{ name: actions.name, email: actions.email }}
        onChange={handleEditChange}
        onClose={handleEditClose}
        onSubmit={handleEditSubmit}
      />
      <RemoveDialog
        open={openRemoveDialog}
        onDelete={handleDelete}
        onClose={handleRemoveDialogClose}
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
