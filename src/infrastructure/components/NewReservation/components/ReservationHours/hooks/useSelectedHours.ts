import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

import Hours from 'infrastructure/components/NewReservation/components/ReservationHours/constants/Hours'
import { setCourtNo, setSelectedHours } from 'infrastructure/components/NewReservation/store/reservationSlice'
import useAppDispatch from 'app/hooks/useAppDispatch'
import useAppSelector from 'app/hooks/useAppSelector'
import usePostReservation from 'infrastructure/components/NewReservation/hooks/usePostReservation'
import useReservedHours
  from 'infrastructure/components/NewReservation/components/ReservationHours/hooks/useReservedHours'

const useSelectedHours = () => {
  const dispatch = useAppDispatch()

  const [clickedHours, setClickedHours] = useState<string[]>([])
  const [sortedHours, setSortedHours] = useState<string[]>([])

  const { clickedDate, courtId } = useAppSelector(state => state.reservation)

  const {
    createReservationHandler
  } = usePostReservation()

  const {
    unavailableHours
  } = useReservedHours()

  const SelectedHours = (hours: string, courtIds: number) => {
    dispatch(setCourtNo(courtIds))
    if (courtIds !== courtId) {
      setClickedHours([])
      setSortedHours([])
    }
    if (!clickedHours.includes(hours)) {
      setClickedHours((prevState) => [...prevState, hours])
    }
    if (sortedHours.includes(hours) && courtIds === courtId) {
      setClickedHours(sortedHours)
      setClickedHours((prevState) => prevState.filter((item) => item !== hours))
      setSortedHours((prevState) => prevState.filter((item) => item !== hours))
    }
  }

  const reservationHandler = () => {
    setClickedHours([])
    setSortedHours([])
    createReservationHandler()
  }

  const isClicked = (hour: string, courtIds: number) => (
    sortedHours.includes(hour) && courtIds === courtId
  )

  useEffect(() => {
    if (clickedHours.length) {
      const timeSort = clickedHours.sort((a, b) => (
        Date.parse(`01/01/2021 ${a}`) - Date.parse(`01/01/2021 ${b}`)
      ))
      const startTime = dayjs(timeSort[0], 'HH:mm')
      const endTime = dayjs(timeSort[timeSort.length - 1], 'HH:mm')

      const middleHours = Hours.filter((hour) => (
        dayjs(hour, 'HH:mm').isBetween(startTime, endTime)
      ))

      setSortedHours([timeSort[0], ...middleHours, timeSort[timeSort.length - 1]])

      const start = dayjs(clickedDate).set('hour', startTime.hour())
        .set('minute', startTime.minute())
        .format('YYYY-MM-DD HH:mm')

      const end = dayjs(clickedDate).set('hour', endTime.hour())
        .set('minute', endTime.minute())
        .format('YYYY-MM-DD HH:mm')

      dispatch(setSelectedHours({ start, end }))
    }
  }, [clickedHours])

  useEffect(() => {
    setClickedHours([])
    setSortedHours([])
  }, [clickedDate])

  useEffect(() => {
    unavailableHours.map((hours) => {
      if (sortedHours.some((hour) => hours.parsedTime.includes(hour) && hours.courtId === courtId)) {
        setClickedHours([])
        setSortedHours([])
      }
      return null
    })
  }, [sortedHours])

  return {
    SelectedHours,
    clickedHours,
    isClicked,
    reservationHandler
  }
}

export default useSelectedHours
