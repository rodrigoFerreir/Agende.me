/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    MenuIcon,
    XIcon,
} from '@heroicons/react/outline'
import Link from 'next/link';
import Image from 'next/image';
import TurboFitLogo from '../../public/logo.png'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <Popover className="relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link href="/">
                            <a>
                                <span className="sr-only">Turbo Fit</span>
                                <Image
                                    className="h-8 w-auto sm:h-10"
                                    src={TurboFitLogo}
                                    alt="Turbo-Fit"
                                    width={60}
                                    height={60}
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Abrir menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <Popover.Group as="nav" className="hidden md:flex space-x-10">
                        <Link href="/sobre">
                            <a className="text-base font-medium text-gray-500 hover:text-green-800">
                                Sobre o profissional
                            </a>
                        </Link>
                        <Link href="/contato">
                            <a className="text-base font-medium text-gray-500 hover:text-green-800">
                                Contato
                            </a>
                        </Link>
                        <Link href='atendimento'>
                            <a className="text-base font-medium text-gray-500 hover:text-green-800">
                                Forma de atendimento
                            </a>
                        </Link>
                    </Popover.Group>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        <Link href='/agende'>
                            <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-900">
                                Agende sua aula!
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <Image
                                        className="h-8 w-auto sm:h-10"
                                        src={TurboFitLogo}
                                        alt="Turbo-Fit"
                                        width={60}
                                        height={60}
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    <Link href={'/sobre'}>
                                        <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                            <span className="ml-3 text-base font-medium text-green-800">
                                                Sobre o Profissional
                                            </span>
                                        </a>
                                    </Link>
                                    <Link href={'/contato'}>
                                        <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                            <span className="ml-3 text-base font-medium text-green-800">
                                                Contato
                                            </span>
                                        </a>
                                    </Link>
                                    <Link href={'/atendimento'}>
                                        <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                            <span className="ml-3 text-base font-medium text-green-800">
                                                Forma de atendimento
                                            </span>
                                        </a>
                                    </Link>
                                </nav>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div>
                                <Link href='/agende'>
                                    <a className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-900">
                                        Agende sua aula!
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}
