import Cookies from 'js-cookie'
import { toast } from 'react-toastify'

import { LoginForm } from 'infrastructure/components/Login/store/types/LoginForm'
import { useLoginMutation } from 'infrastructure/components/Login/store/loginApi'
import { useState } from 'react'
import useRouter from 'app/hooks/useRouter'
import CookiesName from 'infrastructure/enums/CookiesName'
import Routing from 'infrastructure/enums/Routing'

const useManageLoginUser = () => {
  const [isChecked, setIsChecked] = useState(false)
  const { replace } = useRouter()

  const [loginUser, { isLoading }] = useLoginMutation()

  const onSubmit = (data: LoginForm) => {
    loginUser({
      password: data.password,
      username: data.username
    })
      .unwrap()
      .then((res) => {
        Cookies.set(CookiesName.AUTH_TOKEN, res.accessToken, {
          expires: 1
        })
        if (isChecked) {
          Cookies.set(CookiesName.USERNAME, data.username)
        } else {
          Cookies.remove(CookiesName.USERNAME)
        }
        replace(Routing.Home)
      })
      .catch((err) => {
        toast.error(err.data.message)
      })
    }

  const checked = () => {
    setIsChecked(!isChecked)
  }

  return {
    onSubmit,
    isLoading,
    checked
  }
}

export default useManageLoginUser
