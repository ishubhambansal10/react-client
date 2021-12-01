import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
  TablePagination,
  IconButton,
} from '@mui/material';
import PropTypes from 'prop-types';
import withLoaderAndMessage from '../HOC/withLoaderAndMessage';

const GenericTable = (props) => {
  const {
    id,
    columns,
    data,
    order,
    orderBy,
    onSort,
    onSelect,
    count,
    page,
    rowsPerPage,
    onChangePage,
    actions,
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
              key={item.originalId + id}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
                '&:nth-child(odd)': { background: 'rgb(240, 240, 240)' },
                '&:hover': { background: 'rgb(210, 210, 210)', cursor: 'pointer' },
              }}
            >
              {columns.map((column) => (
                <TableCell
                  align={column.align}
                  onClick={() => onSelect(item.originalId)}
                  key={column.field + item.id}
                  sx={{ fontSize: '1rem' }}
                >
                  {column.format ? column.format(item[column.field]) : item[column.field]}
                </TableCell>
              ))}
              <TableCell align="center">
                {actions.map((action, index) => (
                  <div>
                    <IconButton key={index.icon} size="small" onClick={() => action.handler(item)}>
                      {action.icon}
                    </IconButton>
                  </div>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[15]}
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={onChangePage}
      />
    </TableContainer>
  );
};

GenericTable.defaultProps = {
  order: 'asc',
  orderBy: '',
  page: 0,
  actions: [],
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
  count: PropTypes.number.isRequired,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  actions: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.element,
    handler: PropTypes.func,
  })),
};
export default withLoaderAndMessage(GenericTable);
