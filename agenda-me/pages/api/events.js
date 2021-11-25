import { getEventsData } from "../../lib/notion";

export default async function (req, res) {
    const { start } = req.query
    const events = await getEventsData(start)

    res.send({
        quant: events.length,
        events
    })
}
