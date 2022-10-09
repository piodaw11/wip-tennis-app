import Cookies from 'js-cookie'
import { toast } from 'react-toastify'

import { LoginForm } from 'infrastructure/components/Login/store/types/LoginForm'
import { useLoginMutation } from 'infrastructure/components/Login/store/loginApi'

const useManageLoginUser = () => {
  const [loginUser, { isLoading }] = useLoginMutation()

  const onSubmit = (data: LoginForm) => {
    loginUser({
      password: data.password,
      username: data.username
    })
      .unwrap()
      .then((res) => {
        Cookies.set('authToken', res.accessToken, {
          expires: 1
        })
      })
      .catch(err => {
        toast.error(err)
    })
  }

  return {
    onSubmit,
    isLoading
  }
}

export default useManageLoginUser
