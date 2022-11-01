import styled from 'styled-components'

const StyledResultsTableWrapper = styled.div`
  width: 50%;
  height: 100%;
  background-color: #fff;
  border-radius: 8px 0 0 0;
  border-top: 1px solid lightgrey;
  border-left: 1px solid lightgrey;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 7px 0 0 0;
  }

  ::-webkit-scrollbar-thumb {
    background: #d4d4d4;
    height: 90%;
    border-radius: 7px 0 0 0;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #c0c0c0;
  }
`

export {
  StyledResultsTableWrapper
}
