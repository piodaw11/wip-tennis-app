import { useState, MouseEvent } from 'react'
import Cookies from 'js-cookie'

import CookiesName from 'infrastructure/enums/CookiesName'

const useAccountMenu = () => {
  const [open, setOpen] = useState<null | HTMLElement>(null)

  const handleOpenAccountMenu = (event: MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget)
  }

  const handleClose = () => {
    setOpen(null)
  }

  const handleLogout = () => {
    Cookies.remove(CookiesName.AUTH_TOKEN)
    // tymczasowo
    window.location.reload()
  }

  return {
    handleOpenAccountMenu,
    handleClose,
    handleLogout,
    open
  }
}

export default useAccountMenu
