import useAppDispatch from 'app/hooks/useAppDispatch'
import { setSettingsMenu } from 'infrastructure/components/MyAccount/store/accountSlice'
import useAppSelector from 'app/hooks/useAppSelector'

const useSettingsMenu = () => {
  const dispatch = useAppDispatch()

  const selectedOption = useAppSelector(state => state.myaccount.settingsMenu)

  const selectedOptionsMenuItem = (id: number) => {
    dispatch(setSettingsMenu(id))
    console.log(id)
  }

  return {
    selectedOptionsMenuItem,
    selectedOption
  }
}

export default useSettingsMenu
