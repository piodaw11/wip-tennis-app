import { useEffect, useState, MouseEvent } from 'react'
import dayjs from 'dayjs'

import useAppDispatch from 'app/hooks/useAppDispatch'
import { setClickedDate } from 'infrastructure/components/Reservation/store/reservationSlice'
import { week } from 'infrastructure/utils/day'
import usePostReservation from 'infrastructure/components/Reservation/hooks/usePostReservation'
import useGetReservation from 'infrastructure/components/Reservation/hooks/useGetReservation'

const useDate = () => {
  const dispatch = useAppDispatch()

  const [reservationsWeek, setReservationsWeek] = useState(week)
  const [weekDay, setWeekDay] = useState<number>(dayjs().day())

  const firstDateOfWeek = dayjs().isoWeek(reservationsWeek).isoWeekday(1)
  const lastDateOfWeek = dayjs().isoWeek(reservationsWeek).isoWeekday(7)

  const getDate = dayjs().isoWeek(reservationsWeek).isoWeekday(weekDay).format('YYYY-MM-DD')

  const {
    createReservationHandler
  } = usePostReservation()

  const {
    getReservations
  } = useGetReservation()

  const prevWeekHandler = () => {
    setReservationsWeek(prevState => prevState - 1)
  }

  const nextWeekHandler = () => {
    setReservationsWeek(prevState => prevState + 1)
  }

  const weekDayHandler = (event: MouseEvent<HTMLButtonElement>) => {
    setWeekDay(parseInt(event.currentTarget.value, 10))
  }

  const reservationHandler = () => {
    createReservationHandler(getDate)
  }

  const navDate = `${firstDateOfWeek.format('DD.MM.YY')} - ${lastDateOfWeek.format('DD.MM.YY')}`

  useEffect(() => {
    getReservations(getDate)
    dispatch(setClickedDate(getDate))
  }, [getDate, reservationsWeek])

  return {
    prevWeekHandler,
    nextWeekHandler,
    weekDayHandler,
    reservationHandler,
    navDate,
    weekDay
  }
}

export default useDate
