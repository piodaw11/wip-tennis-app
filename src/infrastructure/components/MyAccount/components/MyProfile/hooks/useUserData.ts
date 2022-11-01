import { useGetMeQuery } from 'infrastructure/components/Layout/store/user/userApi'
import Cookies from 'js-cookie'
import CookiesName from 'infrastructure/enums/CookiesName'

const useUserData = () => {
  const { data } = useGetMeQuery({ authToken: Cookies.get(CookiesName.AUTH_TOKEN) })
  const userInitials = data?.username.slice(0, 2).toUpperCase()

  return {
    data,
    userInitials
  }
}

export default useUserData
