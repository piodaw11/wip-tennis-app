import styled from 'styled-components'
import { Paper, TablePagination } from '@mui/material'

const StyledReservationsTableWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  height: 100%;
  padding: 40px;
  flex-direction: column;
  gap: 10px;
`

const StyledPaper = styled(Paper)`
  height: 95%;
  width: 100%;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #d4d4d4;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #c0c0c0;
  }
`

const StyledTablePagination = styled(TablePagination)`
  background-color: #ffffff;
  position: absolute;
  right: 39%;
  width: 400px;
  left: 37%;
  bottom: 7px;
  border-radius: 8px;
  border: 1px solid lightgray;
  display: flex!important;
  align-items: center;
  justify-content: center;
`

export {
  StyledReservationsTableWrapper,
  StyledPaper,
  StyledTablePagination
}
