import React, { useState, useEffect, useContext } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { traineeFormSchema } from '../../Validations/Validations';
import { AddDialog, EditDialog, RemoveDialog } from './components';
import { GenericTable } from '../../Components/index';
// import { callApi } from '../../lib/utils/api';
import { SnackbarContext } from '../../contexts/SnackbarProvider/SnackbarProvider';
import { GET_ALL_USER } from './query';
import { CREATE_USER, UPDATE_USER, DELETE_USER } from './mutation';
import { USER_UPDATED_SUBSCRIPTION, USER_DELETED_SUBSCRIPTION } from './subscription';

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
  const [open, setOpen] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openRemoveDialog, setOpenRemoveDialog] = useState(false);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState();
  const [page, setPage] = useState(0);
  const [actions, setActions] = useState(actionsInitialState);
  const history = useHistory();
  const handleOpen = useContext(SnackbarContext);
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [dataLength, setDataLength] = useState(0);
  const [limitSkipValue, setLimitSKipValue] = useState({ skip: 0, limit: 5 });
  const [getAllUser, { subscribeToMore }] = useLazyQuery(GET_ALL_USER, {
    variables: { skip: limitSkipValue.skip, limit: limitSkipValue.limit },
    fetchPolicy: 'cache-and-network',
    onCompleted: (data) => {
      const { getAllUser: { total, data: DATA } } = data;
      setTableData(DATA);
      setDataLength(total);
    },
  });
  const [createUser] = useMutation(CREATE_USER, {
    refetchQueries: [
      GET_ALL_USER,
    ],
  });
  const [updateUser] = useMutation(UPDATE_USER, {
    refetchQueries: [
      GET_ALL_USER,
    ],
  });
  const [deleteUser] = useMutation(DELETE_USER, {
    refetchQueries: [
      GET_ALL_USER,
    ],
  });

  useEffect(async () => {
    try {
      setLoading(true);
      await getAllUser();
      setTimeout(() => {
        setLoading(false);
      }, [200]);
    } catch (error) {
      setLoading(false);
      handleOpen(error.message, 'error');
    }
  }, [limitSkipValue]);

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
  const handleSubmit = async () => {
    try {
      setLoading(true);
      await createUser({
        variables: { name: inputs.name.input, email: inputs.email.input, role: 'Trainee' },
      });
    } catch (e) {
      handleOpen(e.message, 'error');
    }
    setTimeout(() => {
      setLoading(false);
      handleOpen('This is a success message!', 'success');
      setOpen(false);
    }, [100]);
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
    history.push({
      pathname: `/trainee/${id}`,
      state: {
        response: tableData,
      },
    });
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
    setLimitSKipValue({ ...limitSkipValue, skip: newPage * limitSkipValue.limit });
  };
  // Edit Button handlers
  const handleEditDialogOpen = (data) => {
    setActions({
      ...actions,
      id: data.originalId,
      name: data.name,
      email: data.email,
    });
    setOpenEditDialog(true);
  };
  const handleEditChange = (event) => {
    const { value, name: type } = event.target;
    setActions({ ...actions, [type]: value });
  };
  const handleEditSubmit = async (originalId) => {
    try {
      setLoading(true);
      await updateUser({
        variables: {
          originalId, name: actions.name, email: actions.email, role: 'Trainee',
        },
      });
      setTimeout(() => {
        setLoading(false);
        handleOpen('This is a success message!', 'success');
        setOpenEditDialog(false);
      }, [100]);
    } catch (e) {
      handleOpen(e.message, 'error');
      setOpenEditDialog(false);
    }
    console.log('Edited Item', { name: actions.name, email: actions.email });
  };
  const handleEditClose = () => {
    setActions(actionsInitialState);
    setOpenEditDialog(false);
  };

  // Delete Button handlers
  const handleRemoveDialogOpen = (data) => {
    setActions({
      ...actions,
      id: data.originalId,
      name: data.name,
      email: data.email,
      createdAt: data.createdAt,
    });
    setOpenRemoveDialog(true);
  };
  const handleDelete = async (originalId, createdAt) => {
    let message;
    let status;
    const date1 = new Date('2019-02-14');
    const date2 = new Date(createdAt);
    setLoading(true);
    if (date2 > date1) {
      await deleteUser({ variables: { originalId } });
      message = 'This is a success message!';
      status = 'success';
      console.log('Deleted Item', actions);
    } else {
      message = 'This is an error message!';
      status = 'error';
    }
    setTimeout(() => {
      setLoading(false);
      handleOpen(message, status);
      setOpenRemoveDialog(false);
    }, [100]);
  };
  const handleRemoveDialogClose = () => {
    setOpenRemoveDialog(false);
  };

  useEffect(() => {
    subscribeToMore({
      document: USER_UPDATED_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const { data: { userUpdated } } = subscriptionData;
        const { getAllUser: { data } } = prev;
        const newFeedItem = data.map((item) => {
          if (item.originalId === userUpdated.data.originalId) {
            return {
              ...item, ...userUpdated.data,
            };
          }
          return item;
        });
        const getAllUsers = {
          ...prev.getAllUser,
          data: [
            ...newFeedItem,
          ],

        };
        return {
          getAllUser: { getAllUsers },
        };
      },
    });
    subscribeToMore({
      document: USER_DELETED_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData) return prev;
        const { data: { userDeleted } } = subscriptionData;
        const { getAllUser: { data } } = prev;
        // eslint-disable-next-line max-len
        const deletedRecords = data.filter((record) => record.originalId !== userDeleted.originalId);
        const getAllUsers = {
          ...prev.getAllUser,
          data: [
            ...deletedRecords,
          ],
        };
        return {
          getAllUser: { getAllUsers },
        };
      },
    });
  }, []);

  return (
    <>
      <AddDialog
        open={open}
        loading={loading}
        onClick={handleClickOpen}
        onClose={handleClose}
        onSubmitClick={handleSubmit}
        onChange={handleChange}
        onBlur={handleBlur}
        value={inputs}
      />
      <GenericTable
        id="id"
        columns={column}
        data={tableData}
        order={order}
        orderBy={orderBy}
        onSelect={handleSelect}
        onSort={handleSort}
        count={dataLength}
        page={page}
        rowsPerPage={5}
        onChangePage={handleChangePage}
        dataLength={dataLength}
        loading={loading}
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
        loading={loading}
        value={{ name: actions.name, email: actions.email }}
        onChange={handleEditChange}
        onClose={handleEditClose}
        onSubmit={() => handleEditSubmit(actions.id)}
      />
      <RemoveDialog
        loading={loading}
        open={openRemoveDialog}
        onDelete={() => handleDelete(actions.id, actions.createdAt)}
        onClose={handleRemoveDialogClose}
      />
    </>
  );
};
export default TraineeList;
