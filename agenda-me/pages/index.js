import React from 'react';
import Head from 'next/head';

const Home = () => {
    return (
        <>
            <Head>
                <title>Agenda.me</title>
            </Head>
            <h1 className='font-bold text-2xl'>Agenda.me</h1>
            <p className='text-gray-500 my-4'>
                Aqui você pode agendar seus atendimentos de forma rápida e prática
            </p>
            <p className='text-gray-500 my-4'>
                Tenha acesso a sua agenda diretamente no <a className='font-bold' href='https://www.notion.so/'>Notion</a>
            </p>
            <p className='text-gray-500 my-4'>
                Melhor forma de gerenciar seus horarios
            </p>
        </>
    )
}

export default Home;