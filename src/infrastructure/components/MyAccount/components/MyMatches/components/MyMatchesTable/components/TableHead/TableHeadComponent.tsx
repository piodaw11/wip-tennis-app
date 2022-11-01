import { TableRow, TableCell, TableHead } from '@mui/material'

import HeadItems
  // eslint-disable-next-line max-len
  from 'infrastructure/components/MyAccount/components/MyMatches/components/MyMatchesTable/components/TableHead/constants/HeadItems'

const TableHeadComponent = () => (
  <TableHead>
    <TableRow>
      <TableCell />
      {HeadItems.map((item) => (
        <TableCell key={item.id} align={!item.align ? 'left' : 'right'}>
          {item.label}
        </TableCell>
        ))}
    </TableRow>
  </TableHead>
  )

export default TableHeadComponent
