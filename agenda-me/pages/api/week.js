import { GetBlockedDays } from '../../lib/notion'
import { extractWeekPossible, getPossibleDays } from '../../lib/date-handle'

export default async function (req, res) {
    const days = await GetBlockedDays()
    const possibleDays = getPossibleDays(days)
    const weeks = extractWeekPossible(possibleDays)
    res.send({
        weeks
    })
}