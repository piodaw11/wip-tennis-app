import styled from 'styled-components'

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
`

const StyledRegisterImage = styled.div`
  height: 100%;
  flex: 1;
  background-image: url("/Images/forms-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  filter: hue-rotate(330deg);
`

export {
  StyledWrapper,
  StyledRegisterImage
}
