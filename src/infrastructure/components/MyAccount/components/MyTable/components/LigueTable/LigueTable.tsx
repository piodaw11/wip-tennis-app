import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import {
  StyledTableWrapper
} from 'infrastructure/components/MyAccount/components/MyTable/components/LigueTable/LigueTable.styled'

const LigueTable = () => (
  <StyledTableWrapper>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="center">Miejsce</TableCell>
          <TableCell align="center">Imię i nazwisko</TableCell>
          <TableCell align="center">Punkty</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell align="center">1</TableCell>
          <TableCell align="center">Jan Kowalski</TableCell>
          <TableCell align="center">100</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center">2</TableCell>
          <TableCell align="center">Jan Kowalski</TableCell>
          <TableCell align="center">100</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center">3</TableCell>
          <TableCell align="center">Jan Kowalski</TableCell>
          <TableCell align="center">100</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center">4</TableCell>
          <TableCell align="center">Jan Kowalski</TableCell>
          <TableCell align="center">100</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center">5</TableCell>
          <TableCell align="center">Jan Kowalski</TableCell>
          <TableCell align="center">100</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center">5</TableCell>
          <TableCell align="center">Jan Kowalski</TableCell>
          <TableCell align="center">100</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center">5</TableCell>
          <TableCell align="center">Jan Kowalski</TableCell>
          <TableCell align="center">100</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center">5</TableCell>
          <TableCell align="center">Jan Kowalski</TableCell>
          <TableCell align="center">100</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center">5</TableCell>
          <TableCell align="center">Jan Kowalski</TableCell>
          <TableCell align="center">100</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center">5</TableCell>
          <TableCell align="center">Jan Kowalski</TableCell>
          <TableCell align="center">100</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center">5</TableCell>
          <TableCell align="center">Jan Kowalski</TableCell>
          <TableCell align="center">100</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center">5</TableCell>
          <TableCell align="center">Jan Kowalski</TableCell>
          <TableCell align="center">100</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </StyledTableWrapper>
  )

export default LigueTable
