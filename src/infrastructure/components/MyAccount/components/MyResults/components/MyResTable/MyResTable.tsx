import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { SentimentVeryDissatisfied, SentimentVerySatisfied } from '@mui/icons-material'

import { StyledResultsTableWrapper } from './MyResTable.styled'

const MyResTable = () => (
  <StyledResultsTableWrapper>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="center">Przeciwko</TableCell>
          <TableCell align="center">Wynik</TableCell>
          <TableCell align="center">Wynik Końcowy</TableCell>
          <TableCell align="center">Data</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell align="center">Jan Kowalski</TableCell>
          <TableCell align="center">6:2 6:3</TableCell>
          <TableCell align="center">
            <SentimentVerySatisfied sx={{ fill: '#01d401' }} />
          </TableCell>
          <TableCell align="center">2021-10-10</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center">Jan Kowalski</TableCell>
          <TableCell align="center">3:6 4:6</TableCell>
          <TableCell align="center">
            <SentimentVeryDissatisfied sx={{ fill: 'red' }} />
          </TableCell>
          <TableCell align="center">2021-10-10</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </StyledResultsTableWrapper>
  )

export default MyResTable
