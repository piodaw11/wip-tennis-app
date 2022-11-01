import styled from 'styled-components'
import { Typography } from '@mui/material'

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  & > div {
    width: 50%;
  }
`

const StyledHeaderText = styled(Typography)`
  text-align: center;
`

export {
  StyledFormWrapper,
  StyledHeaderText
}
