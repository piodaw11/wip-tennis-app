import { FunctionComponent } from 'react'
import { Typography } from '@mui/material'

import {
  StyledNewReservationDates, StyledDateBox, StyledDateBoxWrapper
} from 'infrastructure/components/NewReservation/components/SideDatePicker/SideDatePicker.styled'
import dateMapper from 'infrastructure/components/NewReservation/components/SideDatePicker/utils/dateMapper'
import useGetReservation from 'infrastructure/components/NewReservation/hooks/useGetReservation'
import useAppDispatch from 'app/hooks/useAppDispatch'
import { setClickedDate } from 'infrastructure/components/NewReservation/store/reservationSlice'
import useAppSelector from 'app/hooks/useAppSelector'

const SideDatePicker: FunctionComponent = () => {
  const dispatch = useAppDispatch()

  const { clickedDate } = useAppSelector((state) => state.reservation)

  const days = dateMapper()

  const {
    getReservations
  } = useGetReservation()

  const changeDayHandler = (date: any) => {
    dispatch(setClickedDate(date.format('YYYY-MM-DD')))
    getReservations(date.format('YYYY-MM-DD'))
  }

  return (
    <StyledNewReservationDates>
      <StyledDateBoxWrapper>
        {days.map(day => (
          <StyledDateBox
            key={day.format('DD')}
            onClick={() => changeDayHandler(day)}
            $today={clickedDate! === day.format('YYYY-MM-DD')}
          >
            <Typography variant="h6">{day.format('DD MMM')}</Typography>
            <Typography variant="body2">{day.format('YYYY')}</Typography>
          </StyledDateBox>
        ))}
      </StyledDateBoxWrapper>
    </StyledNewReservationDates>
  )
}

export default SideDatePicker
