
const isWeekend = dayWeek => dayWeek === 0 || dayWeek === 6
export const zeroPad = number => (number < 10 ? '0' + number : number.toString())
export const frendlyDate = date => {
    if (date) {
        return date.split('-').reverse().join('/')
    }
    return
}
const toDateString = (date) => `${date.getFullYear()}-${zeroPad(date.getMonth() + 1)}-${zeroPad(date.getDate())}`
const isBlocked = (blockedDays, date) => blockedDays.indexOf(date) >= 0


export const getPossibleDays = (blockedDays = [], numberOfDays = 30) => {
    const now = new Date()
    const possible_days = []
    for (let i = 0; i < numberOfDays; i++) {
        now.setDate(now.getDate() + 1)
        const dayWeek = now.getDay()

        if (!isWeekend(dayWeek) && !isBlocked(blockedDays, toDateString(now))) {
            possible_days.push({
                day: toDateString(now),
                dayOfWeek: dayWeek,
            })
        }
    }
    return possible_days
}

export const extractWeekPossible = (possible_days) => {
    let firstDay = null
    const weeks = []

    possible_days.forEach(currentDay => {
        if (firstDay === null) {
            firstDay = currentDay
        }

        if (currentDay.dayOfWeek === 5) {
            weeks.push({
                startDay: firstDay,
                endDay: currentDay
            })
            firstDay = null
        }
    })

    return weeks
}