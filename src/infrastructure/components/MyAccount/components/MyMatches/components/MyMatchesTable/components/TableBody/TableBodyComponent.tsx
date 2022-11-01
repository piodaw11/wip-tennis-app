import { FunctionComponent, useState } from 'react'
import { TableRow, TableCell, IconButton, Collapse, Box, Typography, Table, TableHead, TableBody } from '@mui/material'
import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material'

import { Row } from 'infrastructure/components/MyAccount/components/MyMatches/components/MyMatchesTable/types/Table'
import ModalSelect from 'infrastructure/components/MyAccount/components/MyMatches/components/ModalSelect/ModalSelect'

type Props = {
  row: Row
}

const TableBodyComponent: FunctionComponent<Props> = ({ row }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' }, cursor: 'pointer' }} onClick={() => setOpen(!open)}>
        <TableCell>
          <IconButton
            size="small"
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.lastRes}</TableCell>
        <TableCell align="right">{row.result}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div" sx={{ display: 'flex', gap: '10px' }}>
                <div>
                  kontakt
                </div>
                <div>
                  Wynik
                </div>
              </Typography>
              <Table size="medium">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Numer Telefonu</TableCell>
                    <TableCell align="center">Wynik</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.phone}>
                      <TableCell align="center" component="th" scope="row">
                        {historyRow.phone}
                      </TableCell>
                      <TableCell align="center">
                        <ModalSelect />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

export default TableBodyComponent
