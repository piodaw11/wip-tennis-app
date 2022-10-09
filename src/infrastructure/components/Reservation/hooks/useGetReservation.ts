import { useGetReservationMutation } from 'infrastructure/components/Reservation/store/reservationApi'
import { setReservation } from 'infrastructure/components/Reservation/store/reservationSlice'
import useAppDispatch from 'app/hooks/useAppDispatch'

const useGetReservation = () => {
  const dispatch = useAppDispatch()

  const [getReservation, { isLoading }] = useGetReservationMutation()

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

  return {
    isLoading,
    getReservations
  }
}

export default useGetReservation
