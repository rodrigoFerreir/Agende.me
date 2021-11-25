import React from 'react';
import useSWR from 'swr'
import { useRouter } from 'next/router'
import Link from 'next/link';

const request = async (url) => {
    const data = await fetch(url)
    const json = await data.json()
    return json
}

function SelectDate() {
    const router = useRouter()
    const { data } = useSWR(
        router.query.startDate ?
            `/api/hours?date=${router.query.date}` : null,
        request
    )
    return (
        <div>
            <h1 className='font-bold text-2xl'>Agende</h1>
            <p className='text-gray-500 mb-4'>
                {`Selecione o seu horário:`}
            </p>
            <p className='mb-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-1 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-700 hover:bg-green-900'>
                <Link href={`/agende/${router.query.startDate}/${router.query.endDate}`}>
                    <a>Voltar</a>
                </Link>
            </p>
            {!data && <p>Carregando...</p>}
            {data && (
                <div className='grid grid-cols-3 gap-3'>
                    {data.hours.map((hour, index) => {
                        if (hour.available) {
                            return (
                                <Link key={index} href={`/agende/${router.query.startDate}/${router.query.endDate}/${router.query.date}/${hour.hour}`}>
                                    <a className='text-center inline-block py-2 px-4 bg-gray-200 rounded-lg hover:bg-gray-400 hover:shadow-lg transition-all'>
                                        {hour.hour}<br />
                                    </a>
                                </Link>
                            )
                        }
                        return (
                            <span className='text-center inline-block py-2 px-4 bg-gray-200 rounded-lg text-gray-400 cursor-not-allowed '>
                                {hour.hour}
                            </span>
                        )
                    })}
                </div>
            )}
        </div>
    );
}

export default SelectDate;