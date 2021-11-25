import React from "react";
import Head from "next/head";
import {
    GrInstagram,
    GrFacebook
} from "react-icons/gr"
import { BsWhatsapp } from "react-icons/bs"
const Contato = () => {
    return (
        <>
            <Head>
                <title>Agenda.me - Contato</title>
            </Head>
            <h1 className='font-bold text-2xl text-green-900'>Contato</h1>
            <body className="mt-10">
                <p className='text-gray-500 my-4'>
                    Redes Sociais:
                </p>
                <div className="grid grid-cols-3 ">
                    <a href="https://www.instagram.com/brothersfitness2/" target="_blank">
                        Instagram
                        <GrInstagram size={20} />
                    </a>
                    <a href="https://www.facebook.com/george.ferreira.568" target="_blank">
                        Facebook
                        <GrFacebook size={20} />
                    </a>
                    <a href="https://wa.me/558199?message=Olá gostaria de agendar uma aula" target="_blank">
                        Envie uma mensagem:
                        <BsWhatsapp size={20} />
                    </a>
                </div>
            </body>
        </>
    )
}

export default Contato;