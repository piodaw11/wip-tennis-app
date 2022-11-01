import { FunctionComponent } from 'react'
import { TableContainer, Table } from '@mui/material'

import {
  StyledPaper,
  StyledReservationsTableWrapper,
  StyledTablePagination
}
  from 'infrastructure/components/MyAccount/components/MyReservations/components/MyReservationsTable/MyTable.styled'
import TableBodyComponent
  from
    'infrastructure/components/MyAccount/components/MyReservations/components/MyReservationsTable/components/TableBody'
import TableHeadComponent
  from
    'infrastructure/components/MyAccount/components/MyReservations/components/MyReservationsTable/components/TableHead'
import TableToolBar
  from
    'infrastructure/components/MyAccount/components/MyReservations/components/MyReservationsTable/components/TableTool'
import useReservationsTable
  from 'infrastructure/components/MyAccount/components/MyReservations/components/MyReservationsTable/hooks'

const MyReservationsTable: FunctionComponent = () => {
  const {
    order,
    orderBy,
    page,
    rowsPerPage,
    rows,
    emptyRows,
    handleRequestSort,
    handleChangePage,
    handleChangeRowsPerPage,
    getComparator
  } = useReservationsTable()

  return (
    <StyledReservationsTableWrapper>
      <StyledPaper>
        <TableToolBar />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <TableHeadComponent
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBodyComponent
              comparator={getComparator(order, orderBy)}
              rows={rows}
              page={page}
              rowsPerPage={rowsPerPage}
              emptyRows={emptyRows}
            />
          </Table>
        </TableContainer>
      </StyledPaper>
      <StyledTablePagination
        rowsPerPageOptions={[10, 25, 50, 100]}
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </StyledReservationsTableWrapper>
  )
}

export default MyReservationsTable
