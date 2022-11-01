import styled from 'styled-components'
import { Paper } from '@mui/material'

const StyledTableWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  height: 100%;
  padding: 40px;
`

const StyledTableContainer = styled(Paper)`
  width: 100%;
  height:100%;
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

export {
  StyledTableWrapper,
  StyledTableContainer
}
