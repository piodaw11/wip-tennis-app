import styled from 'styled-components'

const StyledNewReservationDates = styled.div`
  position: absolute;
  margin-top: 70px;
  top: 0;
  left: 0;
  width: 150px;
  background-color: slategray;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-height: calc(100% - 70px);

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

const StyledDateBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const StyledDateBox = styled.button`
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid  lightgray;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background-color: pink;
  }
`

export {
  StyledNewReservationDates,
  StyledDateBox,
  StyledDateBoxWrapper
}
