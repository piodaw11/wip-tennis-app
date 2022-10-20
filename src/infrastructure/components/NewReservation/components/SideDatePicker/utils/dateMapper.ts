import dayjs from 'infrastructure/utils/day'

const dateMapper = () => {
  const days = []
  const SITE_DAYS_COUNT = 14

  const today = dayjs()

  days.push(today)

  for (let index = 1; index < SITE_DAYS_COUNT; index++) {
    days.push(today.add(index, 'day'))
  }

  return days
}

export default dateMapper
