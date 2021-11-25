import NextCors from 'nextjs-cors';
import { getEventsData } from "../../lib/notion";

export default async function (req, res) {
    const { start } = req.query
    const events = await getEventsData(start)

    await NextCors(req, res, {
        methods: ['GET'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    return res.send({
        quant: events.length,
        events
    })
}
