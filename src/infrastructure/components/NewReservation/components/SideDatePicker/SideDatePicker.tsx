import { FunctionComponent } from 'react'
import { Typography } from '@mui/material'

import {
  StyledNewReservationDates, StyledDateBox, StyledDateBoxWrapper
} from 'infrastructure/components/NewReservation/components/SideDatePicker/SideDatePicker.styled'
import dateMapper from 'infrastructure/components/NewReservation/components/SideDatePicker/utils/dateMapper'

const SideDatePicker: FunctionComponent = () => {
  const days = dateMapper()
  return (
    <StyledNewReservationDates>
      <StyledDateBoxWrapper>
        {days.map(day => (
          <StyledDateBox>
            <Typography variant="h6">{day.format('DD MMM')}</Typography>
            <Typography variant="body2">{day.format('YYYY')}</Typography>
          </StyledDateBox>
        ))}
      </StyledDateBoxWrapper>
    </StyledNewReservationDates>
  )
}

export default SideDatePicker
