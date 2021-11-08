import { GetBlockedDays, GetCountEventsByDays } from '../../lib/notion'
import { getPossibleDays } from '../../lib/date-handle'

export default async function (req, res) {
    const { start, end } = req.query
    const days = await GetBlockedDays()
    const possibleDays = getPossibleDays(days)

    const countings = await GetCountEventsByDays(start, end)

    const possibleDaysRange = possibleDays
        .filter((day) => {
            return day.day >= start && day.day <= end
        })
        .map((day) => {
            let available = false
            if (!countings[day.date]) {
                available = true
            } else {
                available = countings[day.date] < 8
            }
            return {
                ...day,
                available,
            }
        })

    res.send({
        possibleDaysRange,
    })
}