import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
} from '@mui/material';
import PropTypes from 'prop-types';

const GenericTable = (props) => {
  const { id, columns, data } = props;
  return (
    <TableContainer component={Paper} sx={{ mt: 2, boxShadow: 4 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell variant="footer" align={column.align}>{column.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item.id + id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {columns.map((column) => (
                <TableCell align={column.align} sx={{ fontSize: '1rem' }}>
                  {item[column.field]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

GenericTable.propTypes = {
  id: PropTypes.string.isRequired,
  columns: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    createdAt: PropTypes.string,
  })).isRequired,
};
export default GenericTable;
