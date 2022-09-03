import { FunctionComponent } from 'react'

import HeaderItems from 'infrastructure/components/Header/constants/HeaderItems'
import { StyledHeader, StyledVideoWrapper, StyledVideo, StyledBg } from 'infrastructure/components/Header/Header.styled'


const Header:FunctionComponent = () => (
  <StyledHeader>
    {HeaderItems.map((item) => (
      <StyledVideoWrapper key={item.id}>
        <StyledVideo
          src={item.src}
          autoPlay
          loop
          muted
          width="100%"
          height="100%"
        />
        <StyledBg />
      </StyledVideoWrapper>
        ))}
  </StyledHeader>
  )

export default Header
