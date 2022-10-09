import styled, { css } from 'styled-components'

const StyledColorLibStepper = styled.div<{ ownerState: { completed?: boolean, active?: boolean } }>`
  background-color: #CCCCCCFF;
  z-index: 1;
  color: #fff;
  width: 50px;
  height: 50px;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  
  ${({ ownerState }) => ownerState.completed && css`
    background-image: linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%);
  `
  }
  
  ${({ ownerState }) => ownerState.active && css`
    background-image: linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%);
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, .25);
  `}
`

export {
  StyledColorLibStepper
}
