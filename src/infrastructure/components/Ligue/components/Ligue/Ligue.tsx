import { MouseEvent } from 'react'
import { Button, Typography } from '@mui/material'

import { StyledLigue,
  StyledLigueWrapper,
  StyledDescWrapper,
  StyledVideo, StyledVideoWrapper } from 'infrastructure/components/Ligue/components/Ligue/Ligue.styled'
import LigueItems from 'infrastructure/components/Ligue/components/Ligue/constants/LigueItems'

const Ligue = () => {
  const handlePlay = (event: MouseEvent<HTMLVideoElement>) => {
    (event.target as HTMLVideoElement).play()
  }

  const handlePause = (event: MouseEvent<HTMLVideoElement>) => {
    (event.target as HTMLVideoElement).pause()
  }

  return (
    <StyledLigueWrapper>
      <StyledLigue>
        {LigueItems.map((item) => (
          <StyledVideoWrapper key={item.id}>
            <StyledVideo
              onMouseOver={handlePlay}
              onMouseOut={handlePause}
              src={item.src}
              muted
              controls={false}
            />
            <StyledDescWrapper>
              <Typography variant="h5">{item.title}</Typography>
              <Button variant="contained">Wejdź</Button>
            </StyledDescWrapper>
          </StyledVideoWrapper>
        ))}
      </StyledLigue>
    </StyledLigueWrapper>
  )
}

export default Ligue
