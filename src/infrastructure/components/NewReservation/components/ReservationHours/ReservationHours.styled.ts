import styled, { css } from 'styled-components'
import { Button } from '@mui/material'

const StyledTableWrapper = styled.div`
  margin-top: 70px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  max-height: calc(100vh - 70px);
  overflow-y: scroll;

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

const StyledTable = styled.table`
  width: calc(100% - 150px);
  border-collapse: collapse;
`

const StyledTrHead = styled.tr`
  height: 60px;
`

const StyledIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledThIcon = styled.th`
  width: 90px;
  border: 1px solid #ddd;
`

const StyledTh = styled.th`
  border: 1px solid #ddd;
  font-weight: 500;
`

const StyledTbody = styled.tbody`
  background-color: #efefef;
  border: 1px solid #ddd;
`

const StyledTrBody = styled.tr``

const StyledHours = styled.td`
  border: 1px solid #ddd;
  text-align: center;
  color: #98978b;
`

const StyledCourts = styled.td`
  border: 1px solid #ddd;
  text-align: center;
  height: 36px;
`

const StyledButton = styled(Button)<{ $clicked: boolean, $reserved: boolean }>`
  width: 100%;
  height: 100%;
  color: #000 !important;
  border-radius: 0 !important;

  ${({ $clicked }) => $clicked && css`
    background-color: green !important;
    color: white !important;
    border-color: green !important;
  `}

  ${({ $reserved }) => $reserved && css`
    background-color: grey!important;
    color: lightgrey!important;
  `}
`

const StyledReservationButton = styled(Button)`
  position: absolute !important;
  bottom: 30px;
  left: 44%;
  width: 250px;
  height: 42px;
  background-color: #02d03d!important;
`

export {
  StyledTableWrapper,
  StyledTable,
  StyledTrHead,
  StyledThIcon,
  StyledTh,
  StyledTbody,
  StyledTrBody,
  StyledCourts,
  StyledHours,
  StyledButton,
  StyledReservationButton,
  StyledIconWrapper
}
