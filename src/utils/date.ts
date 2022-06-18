import 'dayjs/locale/fr'

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)
dayjs.locale('fr')

export const getStartOfDay = (date: Date | string = new Date()): Date =>
  dayjs.utc(date).startOf('day').toDate()

export const getTomorrowDate = ({
  date,
  startOfDay = false,
}: {
  date: Date | string
  startOfDay?: boolean
}): Date => {
  const tomorrowDate = dayjs.utc(date).add(1, 'day')
  return (startOfDay ? tomorrowDate.startOf('day') : tomorrowDate).toDate()
}
