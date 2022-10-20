import { usePostReservationMutation } from 'infrastructure/components/NewReservation/store/reservationApi'
import useAppSelector from 'app/hooks/useAppSelector'
import { toast } from 'react-toastify'

const usePostReservation = () => {
  const [postReservation, { isLoading }] = usePostReservationMutation()

  const { selectedHours, courtId } = useAppSelector(state => state.reservation)

  const createReservationHandler = () => {
    if (selectedHours && courtId) {
      postReservation({
        start: selectedHours.start,
        end: selectedHours.end,
        courtId,
        bookerId: 2,
        isPaid: true
      })
        .unwrap()
        .then((result) => {
          toast.success(`Pomyślnie zarezerwowano, id rezerwacji to: ${result.id}`)
        })
        .catch((err) => {
          toast.error(err.data.message)
        })
    }
  }

  return {
    createReservationHandler,
    isLoading
  }
}

export default usePostReservation
