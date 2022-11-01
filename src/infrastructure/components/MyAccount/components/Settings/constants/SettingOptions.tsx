import { AccountBox, AlternateEmail, Password, Phone } from '@mui/icons-material'

const SettingOptions = [
  {
    id: 0,
    name: 'Użytkownik',
    icon: <AccountBox />
  },
  {
    id: 1,
    name: 'Adres e-mail',
    icon: <AlternateEmail />
  },
  {
    id: 2,
    name: 'Hasło',
    icon: <Password />
  },
  {
    id: 3,
    name: 'Telefon',
    icon: <Phone />
  }
]

export default SettingOptions
