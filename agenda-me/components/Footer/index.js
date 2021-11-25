import React from 'react';
import GitHubLogo from '../../public/logotipo-do-github.png'
import Image from 'next/image'

function Footer() {
    return (
        <footer className='mt-10 text-center '>
            <p className='font-bold' >Agenda.me</p>
            <p>Projeto Atlas</p>
            <a href="https://github.com/TuboFit">
                <Image
                    className="inline-block"
                    src={GitHubLogo}
                    alt="GitHub"
                    width={36}
                    height={36}
                />
            </a>
        </footer>
    );
}

export default Footer;