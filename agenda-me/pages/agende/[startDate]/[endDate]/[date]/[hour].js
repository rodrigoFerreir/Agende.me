import React, { useState } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';

const request = async (url) => {
    const data = await fetch(url)
    const json = await data.json()
    return json
}

const frendlyDate = date => date ? date.split('-').reverse().join('/') : null

function SelectHour() {
    const router = useRouter()
    const { hour, date: day } = router.query
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [obs, setObs] = useState('')
    const [response, setResponse] = useState({})
    const [success, setSuccess] = useState(false)

    const save = async () => {
        const res = await fetch('/api/schedule', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                day,
                hour,
                name,
                phone,
                obs
            })
        })
        const json = await res.json()
        setSuccess(true)
        setResponse(json)
    }

    return (
        <div>
            <h1 className='font-bold text-2xl'>Agende</h1>
            <p className='text-gray-500 mb-4'>
                {`Quase lá, vamos finalizar seu agendamento para: ${frendlyDate(router.query.date)} às ${router.query.hour}`}
            </p>
            <p className='mb-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-1 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'>
                <Link href={`/agende/${router.query.startDate}/${router.query.endDate}/${router.query.date}`}>
                    <a>Voltar</a>
                </Link>
            </p>
            <p className="max-w-3xl mt-3">
                {success && (
                    <div
                        className='flex bg-green-100 rounded-lg p-4 mb-4 text-sm text-green-700'
                        role='alert'
                    >
                        <svg
                            className='w-5 h-5 inline mr-3'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                fill-rule='evenodd'
                                d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                                clip-rule='evenodd'
                            ></path>
                        </svg>
                        <div>
                            <span className='font-medium'>Agendado com sucesso, para o dia {frendlyDate(response.day)} às {response.hour}</span> muito
                            obrigado.
                        </div>
                    </div>
                )}
                {!success && (

                    <form>
                        <div className='grid grid-cols-2 gap-2 mb-3'>
                            <div>
                                <label className='text-gray-500 mb-4'>Nome:</label>
                                <input
                                    type='text'
                                    name='name'
                                    onChange={(evt) => setName(evt.target.value)}
                                    value={name}
                                    className=' px-4 h-8 block rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                                />
                            </div>
                            <div>
                                <label className='text-gray-500 mb-4'>Telefone:</label>
                                <input
                                    type='text'
                                    name='phone'
                                    onChange={(evt) => setPhone(evt.target.value)}
                                    value={phone}
                                    className='px-4 h-8 block rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                                />
                            </div>
                        </div>
                        <label className='text-gray-500 mb-4'>Observação:</label>
                        <br />
                        <textarea
                            type='text'
                            name='observação'
                            onChange={(evt) => setObs(evt.target.value)}
                            value={obs}
                            rows="3"
                            className='px-4 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'
                        />
                        <br />
                        <button
                            type='button'
                            onClick={save}
                            className='whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'
                        >
                            Confirmar agendamento
                        </button>
                    </form>)}
            </p>
        </div>
    );
}

export default SelectHour;