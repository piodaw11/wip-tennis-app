import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

import useAppSelector from 'app/hooks/useAppSelector'
import { ReservedHours, UnavailableHours } from 'infrastructure/components/NewReservation/types/Reservation'
import Hours from 'infrastructure/components/NewReservation/components/ReservationHours/constants/Hours'

const useReservedHours = () => {
  const [reservedHours, setReservedHours] = useState<ReservedHours[]>([])
  const [unavailableHours, setUnavailableHours] = useState<UnavailableHours[]>([])

  const { reservation, clickedDate } = useAppSelector(state => state.reservation)

  const isReserved = (hour: string, courtId: number) => (
    unavailableHours.some(item => item.parsedTime.includes(hour) && item.courtId === courtId)
    || dayjs().isAfter(dayjs(`${clickedDate} ${hour}`, 'YYYY-MM-DD HH:mm'))
  )

  useEffect(() => {
    if (reservation?.reservations?.length) {
      reservation?.reservations?.map((item) => {
        setReservedHours(
          prevState => [...prevState, { start: item.start, end: item.end, courtId: item.courtId, id: item.id }]
        )
        return null
      })
    }
  }, [reservation?.reservations])

  useEffect(() => {
    reservedHours.map((item) => {
      if (dayjs(item.start).isSame(clickedDate, 'day')) {
        const startParse = dayjs(item.start).utc().format('HH:mm')
        const startTime = dayjs(startParse, 'HH:mm')
        const endParse = dayjs(item.end).utc().format('HH:mm')
        const endTime = dayjs(endParse, 'HH:mm')
        const middleHours = Hours.filter((hour) => (
          dayjs(hour, 'HH:mm').isBetween(startTime, endTime)
        ))

        const hours = `${[startParse, ...middleHours, endParse]}`

        if (!unavailableHours.some(items => items.id === item.id)) {
          setUnavailableHours(prevState => [...prevState, { parsedTime: hours, courtId: item.courtId, id: item.id }])
        }
      }
      return null
    })
  }, [reservedHours])

  useEffect(() => {
    setUnavailableHours([])
  }, [clickedDate])

  return {
    isReserved,
    unavailableHours
  }
}

export default useReservedHours
