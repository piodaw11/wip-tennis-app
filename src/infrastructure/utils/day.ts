import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import isBetween from 'dayjs/plugin/isBetween'
import isoWeek from 'dayjs/plugin/isoWeek'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(customParseFormat)
dayjs.extend(isBetween)
dayjs.extend(isoWeek)
dayjs.extend(utc)
dayjs.extend(timezone)

const week = dayjs().isoWeek()

export {
  week
}
