import { Client } from '@notionhq/client'
import { zeroPad } from './date-handle'

const notion = new Client({
    auth: process.env.NOTION_SECRET
})

export const GetBlockedDays = async () => {

    const data = await notion.databases.query({
        database_id: process.env.BLOCKED_DATABASE,
        page_size: 100
    })
    const blockedDays = data.results.map(results => results.properties.Date.date.start)

    return blockedDays
}


export const GetCountEventsByDays = async (startDate, endDate) => {

    const notion_data = await notion.databases.query({
        database_id: process.env.SHEDULE_DATABASE,
        page_size: 100,
        filter: {
            and: [
                {
                    property: 'Date',
                    date: {
                        on_or_after: startDate,
                    }
                },
                {
                    property: 'Date',
                    date: {
                        on_or_before: endDate,
                    }
                },
                {
                    property: 'Confirmado',
                    checkbox: {
                        equals: true
                    }
                }
            ]
        }
    })

    const countings = notion_data.results
        .map(result => result.properties.Date.date.start)
        .map(date => date.split('T')[0])
        .reduce((prev, curr) => {
            if (!prev[curr]) {
                prev[curr] = 0
            }
            prev[curr]++
            return prev
        }, {})
    return countings
}

export const getAvailableHours = async (date) => {
    const data = await notion.databases.query({
        database_id: process.env.SHEDULE_DATABASE,
        page_size: 100,
        filter: {
            and: [
                {
                    property: 'Date',
                    date: {
                        on_or_after: date,
                    },
                },
                {
                    property: 'Date',
                    date: {
                        on_or_before: date,
                    },
                },
            ],
        },
    })

    const startHour1 = 8
    const endHour1 = 12

    const startHour2 = 14
    const endHour2 = 17

    const hours = []

    for (let i = startHour1; i < endHour1; i++) {
        hours.push({
            hour: zeroPad(i) + ':00:00',
            available: true,
        })
    }
    for (let i = startHour2; i < endHour2; i++) {
        hours.push({
            hour: zeroPad(i) + ':00:00',
            available: true,
        })
    }

    const blockedHours = data.results
        .map((result) => result.properties.Date.date.start)
        .map((date) => date.split('T')[1])
        .map((date) => date.split('.')[0])
        .sort()

    const availableHours = hours.map((hour) => {
        return {
            ...hour,
            available: blockedHours.indexOf(hour.hour) < 0,
        }
    })

    return availableHours
}

const getNotionRecord = ({ date, name, phone, obs }) => {
    return {
        'Aguardando confirmação': { id: '%3EJU%7D', type: 'checkbox', checkbox: false },
        Confirmado: { id: 'TmqR', type: 'checkbox', checkbox: true },
        Cancelado: { id: 'sQoY', type: 'checkbox', checkbox: false },
        Date: {
            id: 'wf%60M',
            type: 'date',
            date: { start: date, end: null }
        },
        Name: { id: 'title', type: 'title', title: [{ text: { content: name } }] },
        Telefone: { id: '%40nqT', type: 'phone_number', phone_number: phone },
        'Observações': { id: 'tf%5E~', type: 'rich_text', rich_text: [{ text: { content: obs } }] },
    }
}

export const insertSchedule = async ({ date, name, phone, obs }) => {
    const model_registro = getNotionRecord({ date, name, phone, obs })
    const inserted = await notion.pages.create({
        parent: {
            database_id: process.env.SHEDULE_DATABASE
        },
        properties: model_registro
    })
    return inserted
}