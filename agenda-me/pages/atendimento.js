
import Head from "next/head";

const Atendimento = () => {
    return (
        <>
            <Head>
                <title>Agenda.me - Atendimento</title>
            </Head>
            <h1 className='font-bold text-2xl text-green-900'>Atendimento</h1>
            <p className='text-gray-500 my-4'>
                O Atendimento é feito presencialmente na Academia Brothers Fitness
            </p>
            <p className='text-gray-500 my-4'>
                As aulas agendadas teram duração de 60 minutos.
            </p>
            <p className='text-gray-500 my-4'>
                Agende sua aula e venha se tornar um Brother!
            </p>
        </>
    )
}

export default Atendimento;