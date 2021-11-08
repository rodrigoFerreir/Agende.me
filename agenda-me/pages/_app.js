import 'tailwindcss/tailwind.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Agenda.me</title>
            </Head>
            <Header />
            <div className='max-w-7xl mx-auto shadow bg-gray-100 p-8 mt-2 rounded-md'>
                <Component {...pageProps} />
            </div>
            <Footer />
        </>
    )
}

export default MyApp