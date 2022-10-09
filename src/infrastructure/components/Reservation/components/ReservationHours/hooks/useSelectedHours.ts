import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

import { setCourtNo, setSelectedHours } from 'infrastructure/components/Reservation/store/reservationSlice'
import useAppDispatch from 'app/hooks/useAppDispatch'
import useAppSelector from 'app/hooks/useAppSelector'
import Hours from 'infrastructure/components/Reservation/components/ReservationHours/constants/Hours'

const useSelectedHours = () => {
  const dispatch = useAppDispatch()

  const [hours, setHours] = useState<string[]>([])
  const [clicked, setClicked] = useState<string[]>([])
  const [court, setCourt] = useState(0)

  const { clickedDate, courtId } = useAppSelector(state => state.reservation)

  const selectHourHandler = (hour: string, courtIds: number) => {
    if (!hours.includes(hour)) {
      setHours(prevState => [...prevState, hour])
      setCourt(courtIds)
    }
    if (clicked.includes(hour)) {
      setHours(prevState => prevState.filter(item => item !== hour))
      setClicked(prevState => prevState.filter(item => item !== hour))
    }
  }

  const isClicked = (hour: string, courtIds: number) => (
    clicked.includes(hour) && courtIds === courtId
  )

  useEffect(() => {
    if (hours.length) {
      const timeSort = hours.sort((a, b) => (
        Date.parse(`01/01/2021 ${a}`) - Date.parse(`01/01/2021 ${b}`)
      ))
      const startTime = dayjs(timeSort[0], 'HH:mm')
      const endTime = dayjs(timeSort[timeSort.length - 1], 'HH:mm')

      const middleHours = Hours.filter((hour) => (
        dayjs(hour, 'HH:mm').isBetween(startTime, endTime)
      ))

      setClicked([timeSort[0], ...middleHours, timeSort[timeSort.length - 1]])

      dispatch(setCourtNo(court))
      dispatch(setSelectedHours({ start: startTime.format('HH:mm'), end: endTime.format('HH:mm') }))
    }
  }, [hours, court])

  useEffect(() => {
    if (court !== courtId) {
      setHours([])
      setClicked([])
    }
  }, [courtId])

  useEffect(() => {
    setHours([])
    setClicked([])
  }, [clickedDate])

  return {
    selectHourHandler,
    isClicked
  }
}

export default useSelectedHours
