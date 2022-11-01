import { useState } from 'react'
import { FilterList } from '@mui/icons-material'
import {
  Tooltip,
  IconButton,
  Typography,
  Toolbar
} from '@mui/material'

import {
  StyledButton,
  StyledFiltersWrapper
} from
    // eslint-disable-next-line max-len
  'infrastructure/components/MyAccount/components/MyReservations/components/MyReservationsTable/components/TableTool/TableToolBar.styled'
import useGetMyReservations
  from 'infrastructure/components/MyAccount/components/MyReservations/hooks/useGetMyReservations'
import FilterOptions
  from
    // eslint-disable-next-line max-len
    'infrastructure/components/MyAccount/components/MyReservations/components/MyReservationsTable/components/TableTool/constants/FilterOptions'

const TableToolBar = () => {
  const [clicked, setClicked] = useState(false)

  const {
    selectedFilters
  } = useGetMyReservations()

  const handleFilterOptions = () => {
    setClicked(!clicked)
  }

  const onFilterChange = (filter: string) => {
    selectedFilters(filter)
    setClicked(false)
  }

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 }
      }}
    >
      <Typography
        sx={{ flex: '1 1 100%' }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Rezerwacje
      </Typography>
      <Tooltip title={!clicked ? 'Filtruj' : ''}>
        <IconButton onClick={handleFilterOptions}>
          <FilterList />
        </IconButton>
      </Tooltip>
      {clicked && (
        <StyledFiltersWrapper>
          {FilterOptions.map(filter => (
            <StyledButton onClick={() => onFilterChange(filter.value)} key={filter.value}>{filter.label}</StyledButton>
          ))}
        </StyledFiltersWrapper>
      )}
    </Toolbar>
  )
}

export default TableToolBar
