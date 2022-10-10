import styled from 'styled-components'

const StyledLoginWrapper = styled.div`
  height: calc(100vh - 70px);
  margin-top: 70px;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row-reverse;
`

const StyledRegisterImage = styled.div`
  height: 100%;
  flex: 1;
  background-image: url("/Images/forms-bg.jpg");
  transform: rotateY(180deg);
  background-size: cover;
  background-repeat: no-repeat;
  filter: hue-rotate(330deg);
`

export {
  StyledLoginWrapper,
  StyledRegisterImage
}
