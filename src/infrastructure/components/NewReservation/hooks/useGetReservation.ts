import { useGetReservationMutation } from 'infrastructure/components/NewReservation/store/reservationApi'
import { setReservation } from 'infrastructure/components/NewReservation/store/reservationSlice'
import useAppDispatch from 'app/hooks/useAppDispatch'
import { useEffect } from 'react'
import useAppSelector from 'app/hooks/useAppSelector'

const useGetReservation = () => {
  const dispatch = useAppDispatch()

  const [getReservation, { isLoading }] = useGetReservationMutation()

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
