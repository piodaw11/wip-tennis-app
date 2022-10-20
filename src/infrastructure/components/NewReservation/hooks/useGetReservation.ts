import { useEffect } from 'react'

import {
  useLazyGetReservationQuery
} from 'infrastructure/components/NewReservation/store/reservationApi'
import { setReservation } from 'infrastructure/components/NewReservation/store/reservationSlice'
import useAppDispatch from 'app/hooks/useAppDispatch'
import useAppSelector from 'app/hooks/useAppSelector'

const useGetReservation = () => {
  const dispatch = useAppDispatch()

  const [getReservation, { isLoading }] = useLazyGetReservationQuery()

  const { clickedDate } = useAppSelector((state) => state.reservation)

  const getReservations = (date: string) => {
    getReservation({
      date,
      filters: ['day', 'month', 'year']
    })
      .unwrap()
      .then((result) => {
        dispatch(setReservation(result))
      })
  }

  useEffect(() => {
    getReservations(clickedDate!)
  }, [])

  return {
    isLoading,
    getReservations
  }
}

export default useGetReservation
