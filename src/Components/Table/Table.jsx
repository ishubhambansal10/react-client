import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableSortLabel,
} from '@mui/material';
import PropTypes from 'prop-types';

const GenericTable = (props) => {
  const {
    id, columns, data, order, orderBy, onSort, onSelect,
  } = props;
  return (
    <TableContainer component={Paper} sx={{ mt: 2, boxShadow: 4 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.field + id} variant="footer" align={column.align}>
                <TableSortLabel
                  active={orderBy === column.field}
                  direction={order}
                  // hideSortIcon
                  onClick={() => onSort(column.field)}
                >
                  {column.label}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item.id + id}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
                '&:nth-child(odd)': { background: 'rgb(240, 240, 240)' },
                '&:hover': { background: 'rgb(210, 210, 210)', cursor: 'pointer' },
              }}
            >
              {columns.map((column) => (
                <TableCell
                  align={column.align}
                  onClick={() => onSelect(item.id)}
                  sx={{ fontSize: '1rem' }}
                >
                  {column.format ? column.format(item[column.field]) : item[column.field]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

GenericTable.defaultProps = {
  order: 'asc',
  orderBy: '',
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
  order: PropTypes.oneOf(['asc', 'desc']),
  orderBy: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,

};
export default GenericTable;
