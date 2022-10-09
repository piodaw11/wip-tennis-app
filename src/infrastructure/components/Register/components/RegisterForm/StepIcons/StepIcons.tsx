import { FunctionComponent } from 'react'

import { AlternateEmail, ContactPageOutlined, GroupAdd, Check } from '@mui/icons-material'
import { StepIconProps } from '@mui/material/StepIcon'
import {
  StyledColorLibStepper
} from 'infrastructure/components/Register/components/RegisterForm/StepIcons/StepIcons.styled'
import Icons from 'infrastructure/components/Register/components/RegisterForm/StepIcons/types/Icons'

const StepIcon: FunctionComponent<StepIconProps> = ({ active, completed, icon }) => {
  const style = active ? { fill: '#fff' } : { fill: '' }

  const icons: Icons = {
    1: <AlternateEmail style={style} />,
    2: <ContactPageOutlined style={style} />,
    3: <GroupAdd style={style} />
  }

  return (
    <StyledColorLibStepper ownerState={{ completed, active }}>
      {completed ? (
        <Check style={{ fill: '#fff' }} />
      ) : (
        <>
          {icons[String(icon)]}
        </>
      )}
    </StyledColorLibStepper>
  )
}

export {
  StepIcon
}
