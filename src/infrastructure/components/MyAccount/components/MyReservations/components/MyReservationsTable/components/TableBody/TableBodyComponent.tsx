import { TableBody, TableCell, TableRow } from '@mui/material'
import { FunctionComponent } from 'react'

type Props = {
  comparator: (a: { [key in any]: number | string }, b: { [key in any]: number | string }) => number
  rows: any[]
  page: number
  rowsPerPage: number
  emptyRows: number
}

const TableBodyComponent: FunctionComponent<Props> = ({ comparator, page, rowsPerPage, rows, emptyRows }) => (
  <TableBody>
    {rows.sort(comparator)
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row, index) => {
          const labelId = `table-${index}`

          return (
            <TableRow
              hover
              tabIndex={-1}
              key={row.id}
            >
              <TableCell
                component="th"
                id={labelId}
                scope="row"
                padding="none"
                align="center"
              >
                {row.date}
              </TableCell>
              <TableCell align="center">{row.start}</TableCell>
              <TableCell align="center">{row.end}</TableCell>
              <TableCell align="center">{row.duration}</TableCell>
              <TableCell align="center">{row.court}</TableCell>
            </TableRow>
          )
        })}
    {emptyRows > 0 && (
    <TableRow
      style={{
            height: 53 * emptyRows
          }}
    >
      <TableCell colSpan={6} />
    </TableRow>
      )}
  </TableBody>
  )

export default TableBodyComponent
