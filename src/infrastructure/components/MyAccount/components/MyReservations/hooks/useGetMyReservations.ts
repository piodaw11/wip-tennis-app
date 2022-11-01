import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import Cookies from 'js-cookie'

import useAppDispatch from 'app/hooks/useAppDispatch'
import { useLazyGetMyReservationsQuery } from 'infrastructure/components/MyAccount/store/AccountApi'
import { useGetMeQuery } from 'infrastructure/components/Layout/store/user/userApi'
import CookiesName from 'infrastructure/enums/CookiesName'
import { setMyReservations } from 'infrastructure/components/MyAccount/store/accountSlice'

const useGetMyReservations = () => {
  const dispatch = useAppDispatch()

  const [filters, setFilters] = useState<string[]>(['booker_id', 'year', 'month', 'week'])

  const [getMyReservations, { isLoading }] = useLazyGetMyReservationsQuery()

  const { data } = useGetMeQuery({ authToken: Cookies.get(CookiesName.AUTH_TOKEN) })

  const selectedFilters = (filter: string) => {
    switch (filter) {
      case 'day': {
        setFilters(['booker_id', 'year', 'month', 'day'])
        break
      }
      case 'month': {
        setFilters(['booker_id', 'year', 'month'])
        break
      }
      case 'week': {
        setFilters(['booker_id', 'year', 'month', 'week'])
        break
      }
      case 'year': {
        setFilters(['booker_id', 'year'])
        break
      }
      default: {
        setFilters(['booker_id', 'year', 'month', 'week'])
        break
      }
    }
  }

  const getReservations = () => {
    getMyReservations({
      date: dayjs().format('YYYY-MM-DD'),
      filters,
      booker_id: data!.userId,
      limit: 10000
    })
      .unwrap()
      .then((res) => {
        console.log(res)
        dispatch(setMyReservations(res))
      })
  }

  useEffect(() => {
    getReservations()
  }, [])

  useEffect(() => {
    getReservations()
  }, [filters])

  return {
    isLoading,
    selectedFilters
  }
}

export default useGetMyReservations
