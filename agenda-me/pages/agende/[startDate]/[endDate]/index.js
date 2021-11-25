import React from 'react';
import useSWR from 'swr'
import { useRouter } from 'next/router'
import Link from 'next/link';
import { frendlyDate } from '../../../../lib/date-handle';

const request = async (url) => {
    const data = await fetch(url)
    const json = await data.json()
    return json
}

const nameDaysOfWeeks = [
    'Domingo',
    'Segunda Feira',
    'Terça Feira',
    'Quarta Feira',
    'Quinta Feira',
    'Sexta Feira',
    'Sábado'
]


function Agende() {
    const router = useRouter()
    const { data } = useSWR(
        router.query.startDate ?
            `/api/days?start=${router.query.startDate}&end=${router.query.endDate}` : null,
        request
    )
    return (
        <div>
            <h1 className='font-bold text-2xl'>Agende</h1>
            <p className='text-gray-500 mb-4'>
                {`Selecione um dia para agendar seu horário,
                semana selecionada : ${frendlyDate(router.query.startDate)} até ${frendlyDate(router.query.endDate)}`}
            </p>
            <p className='mb-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-1 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-700 hover:bg-green-900'>
                <Link href={`/agende`}>
                    <a>Voltar</a>
                </Link>
            </p>
            {!data && <p>Carregando...</p>}
            {data && (
                <div className='grid grid-cols-3 gap-3'>
                    {data.possibleDaysRange.map((date, index) => {
                        if (date.available) {
                            return (
                                <Link key={index} href={`/agende/${router.query.startDate}/${router.query.endDate}/${date.day}`}>
                                    <a className='text-center inline-block py-2 px-4 bg-gray-200 rounded-lg hover:bg-gray-400 hover:shadow-lg transition-all'>
                                        {frendlyDate(date.day)}<br />
                                        <span className='text-sm'>
                                            {nameDaysOfWeeks[date.dayOfWeek]}
                                        </span>
                                    </a>
                                </Link>
                            )
                        }
                        return (
                            <span className='text-center inline-block py-2 px-4 bg-gray-200 rounded-lg text-gray-400 cursor-not-allowed '>
                                {frendlyDate(date.day)}<br />
                                <span className='text-sm'>
                                    {nameDaysOfWeeks[date.dayOfWeek]}
                                </span>
                            </span>
                        )
                    })}
                </div>
            )}
        </div>
    );
}

export default Agende;