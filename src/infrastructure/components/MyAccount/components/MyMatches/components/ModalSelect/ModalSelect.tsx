import { useState, SyntheticEvent } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle,
  InputLabel, OutlinedInput, FormControl, Select, SelectChangeEvent } from '@mui/material'

import gems from 'infrastructure/components/MainNavbar/AccountMenu/constants/gems'
import {
  StyledFormWrapper,
  StyledHeaderText
} from './ModalSelect.styled'

const ModalSelect = () => {
  const [open, setOpen] = useState(false)
  const [set1Zaw1, setSet1Zaw1] = useState<string>('')
  const [set1Zaw2, setSet1Zaw2] = useState<string>('')

  const handleChangeSet1Zaw1 = (event: SelectChangeEvent) => {
    setSet1Zaw1(event.target.value)
  }

  const handleChangeSet1Zaw2 = (event: SelectChangeEvent) => {
    setSet1Zaw2(event.target.value)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = (event: SyntheticEvent<unknown>, reason?: string) => {
    if (reason !== 'backdropClick') {
      setOpen(false)
    }
  }

  return (
    <div>
      <Button onClick={handleClickOpen}>Wpisz Wynik</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle align="center">Zawodnik 1 : Zawodnik 2</DialogTitle>
        <DialogContent>
          <div>
            <StyledHeaderText variant="h5">Set 1</StyledHeaderText>
            <StyledFormWrapper>
              <FormControl sx={{ m: 1, minWidth: 50, display: 'flex' }}>
                <InputLabel htmlFor="demo-dialog-native">Zaw 1</InputLabel>
                <Select
                  native
                  value={set1Zaw1}
                  onChange={handleChangeSet1Zaw1}
                  input={<OutlinedInput label="Set1zaw1" id="demo-dialog-native" />}
                >
                  <option aria-label="None" value="" />
                  {gems.map((gem) => (
                    <option key={gem} value={gem}>{gem}</option>
                  ))}
                </Select>
              </FormControl>
              :
              <FormControl sx={{ m: 1, minWidth: 50, display: 'flex' }}>
                <InputLabel htmlFor="demo-dialog-native">Zaw 2</InputLabel>
                <Select
                  native
                  value={set1Zaw2}
                  onChange={handleChangeSet1Zaw2}
                  input={<OutlinedInput label="Set1zaw2" id="demo-dialog-native" />}
                >
                  <option aria-label="None" value="" />
                  {gems.map((gem) => (
                    <option key={gem} value={gem}>{gem}</option>
                  ))}
                </Select>
              </FormControl>
            </StyledFormWrapper>
          </div>
          <div>
            <StyledHeaderText variant="h5">Set 2</StyledHeaderText>
            <StyledFormWrapper>
              <FormControl sx={{ m: 1, minWidth: 50, display: 'flex' }}>
                <InputLabel htmlFor="demo-dialog-native">Zaw 1</InputLabel>
                <Select
                  native
                  value={set1Zaw1}
                  onChange={handleChangeSet1Zaw1}
                  input={<OutlinedInput label="Set1zaw1" id="demo-dialog-native" />}
                >
                  <option aria-label="None" value="" />
                  {gems.map((gem) => (
                    <option key={gem} value={gem}>{gem}</option>
                  ))}
                </Select>
              </FormControl>
              :
              <FormControl sx={{ m: 1, minWidth: 50, display: 'flex' }}>
                <InputLabel htmlFor="demo-dialog-native">Zaw 2</InputLabel>
                <Select
                  native
                  value={set1Zaw2}
                  onChange={handleChangeSet1Zaw2}
                  input={<OutlinedInput label="Set1zaw2" id="demo-dialog-native" />}
                >
                  <option aria-label="None" value="" />
                  {gems.map((gem) => (
                    <option key={gem} value={gem}>{gem}</option>
                  ))}
                </Select>
              </FormControl>
            </StyledFormWrapper>
          </div>
          <div>
            <StyledHeaderText variant="h5">Set 3</StyledHeaderText>
            <StyledFormWrapper>
              <FormControl sx={{ m: 1, minWidth: 50, display: 'flex' }}>
                <InputLabel htmlFor="demo-dialog-native">Zaw 1</InputLabel>
                <Select
                  native
                  value={set1Zaw1}
                  onChange={handleChangeSet1Zaw1}
                  input={<OutlinedInput label="Set1zaw1" id="demo-dialog-native" />}
                >
                  <option aria-label="None" value="" />
                  {gems.map((gem) => (
                    <option key={gem} value={gem}>{gem}</option>
                  ))}
                </Select>
              </FormControl>
              :
              <FormControl sx={{ m: 1, minWidth: 50, display: 'flex' }}>
                <InputLabel htmlFor="demo-dialog-native">Zaw 2</InputLabel>
                <Select
                  native
                  value={set1Zaw2}
                  onChange={handleChangeSet1Zaw2}
                  input={<OutlinedInput label="Set1zaw2" id="demo-dialog-native" />}
                >
                  <option aria-label="None" value="" />
                  {gems.map((gem) => (
                    <option key={gem} value={gem}>{gem}</option>
                  ))}
                </Select>
              </FormControl>
            </StyledFormWrapper>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Anuluj</Button>
          <Button onClick={handleClose}>Wpisz</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ModalSelect
