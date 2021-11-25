import React from 'react';
import Head from 'next/head';

const Home = () => {
    return (
        <>
            <Head>
                <title>Agenda.me</title>
            </Head>
            <h1 className='font-bold text-2xl text-green-900'>Agenda.me</h1>
            <p className='text-gray-500 my-4'>
                Aqui você pode agendar uma aula de forma rápida e prática
            </p>
        </>
    )
}

export default Home;