import { usePostReservationMutation } from 'infrastructure/components/NewReservation/store/reservationApi'
import useAppSelector from 'app/hooks/useAppSelector'
import { toast } from 'react-toastify'
import { useGetMeQuery } from 'infrastructure/components/Layout/store/user/userApi'
import Cookies from 'js-cookie'
import CookiesName from 'infrastructure/enums/CookiesName'

const usePostReservation = () => {
  const [postReservation, { isLoading }] = usePostReservationMutation()

  const { selectedHours, courtId } = useAppSelector(state => state.reservation)

  const { data } = useGetMeQuery({ authToken: Cookies.get(CookiesName.AUTH_TOKEN) })

  const createReservationHandler = () => {
    if (selectedHours && courtId) {
      postReservation({
        start: selectedHours.start,
        end: selectedHours.end,
        courtId,
        bookerId: data!.userId,
        isPaid: true
      })
        .unwrap()
        .then((result) => {
          toast.success(`Pomyślnie zarezerwowano, id rezerwacji to: ${result.id}`)
          setTimeout(() => {
            window.location.reload()
          }, 2000)
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
