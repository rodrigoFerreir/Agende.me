import React from 'react'
import useSWR from 'swr'
import Link from 'next/link'
import Head from 'next/head'
import { frendlyDate } from '../../lib/date-handle'

const request = async (url) => {
    const data = await fetch(url)
    const json = await data.json()
    return json
}

function Agende() {
    const { data } = useSWR('/api/week', request)
    return (
        <div>
            <Head>
                <title>Agenda.me - Agendamento</title>
            </Head>
            <h1 className='font-bold text-2xl'>Agende</h1>
            <p className='text-gray-500 mb-4'>Selecione uma semana para agendar seu horário:</p>
            <p className='mb-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-1 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'>
                <Link href={`/`}>
                    <a>Voltar</a>
                </Link>
            </p>
            {!data && <p>Carregando...</p>}
            {data && (
                <div className='grid grid-cols-3 gap-3'>
                    {data.weeks.map((week, index) => {
                        return (
                            <Link key={index} href={'/agende/' + week.startDay.day + '/' + week.endDay.day}>
                                <a className='text-center inline-block py-2 px-4 bg-gray-200 rounded-lg hover:bg-gray-400 hover:shadow-lg transition-all'>
                                    Semana de: {frendlyDate(week.startDay.day)} até {frendlyDate(week.endDay.day)}
                                </a>
                            </Link>
                        )
                    })}
                </div>
            )}

        </div>
    );
}

export default Agende;