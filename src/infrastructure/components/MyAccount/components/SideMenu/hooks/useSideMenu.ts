import { useState } from 'react'

import useAppDispatch from 'app/hooks/useAppDispatch'
import useAppSelector from 'app/hooks/useAppSelector'
import { setSideMenu } from 'infrastructure/components/MyAccount/store/accountSlice'

const useSideMenu = () => {
  const dispatch = useAppDispatch()

  const [open, setOpen] = useState(false)

  const { sideMenu } = useAppSelector(state => state.myaccount)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const selectedSideMenuItem = (id: number) => {
    dispatch(setSideMenu(id))
  }

  return {
    open,
    handleOpen,
    handleClose,
    selectedSideMenuItem,
    sideMenu
  }
}

export default useSideMenu
