import { Table, TableBody } from '@mui/material'

import useMyMatchesTable
  from 'infrastructure/components/MyAccount/components/MyMatches/components/MyMatchesTable/hooks/useMyMatchesTable'
import TableBodyComponent
  from 'infrastructure/components/MyAccount/components/MyMatches/components/MyMatchesTable/components/TableBody'
import TableHeadComponent
  from 'infrastructure/components/MyAccount/components/MyMatches/components/MyMatchesTable/components/TableHead'
import { StyledTableContainer, StyledTableWrapper } from './MyMatchesTable.styled'

const MyMatchesTable = () => {
  const {
    rows
  } = useMyMatchesTable()

  return (
    <StyledTableWrapper>
      <StyledTableContainer>
        <Table>
          <TableHeadComponent />
          <TableBody>
            {rows.map((row) => (
              <TableBodyComponent key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </StyledTableWrapper>
  )
}

export default MyMatchesTable
