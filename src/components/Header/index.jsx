import React from 'react'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import header from './images/sanadyar_5.png'

export default function Header() {
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)

    return (
        <>
            <div className='flex  py-2 bg-img h-screen'>
                <div className='flex-1 flex items-center'>
                    <div className="flex  w-full items-center justify-center mb-20">
                        <div className="mb-20 md:mb-0 text-cyan-950 card-wrapper p-3 mr-5 md:mr-0 md:p-5">
                            <h2 className="mb-4 text-3xl font-semibold ">سندیار</h2>
                            <h4 className="mb-4 text-base font-semibold py-5">نرم افزار حرفه ای بدون نیاز
                                به داشتن دانش حسابداری</h4>
                            <button
                                onClick={() => setOpen(true)}
                                type="button"
                                className="bg-[#664f9e] rounded border-2 border-[#8756b2] px-6 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-[#664f9e] hover:text-neutral-100 focus:border-neutral-100 focus:bg-[#664f9e] focus:outline-none focus:ring-1 active:border-[#8756b2] active:text-gray-300 "
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                سفارش نرم افزار
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex-1'>
                    
                </div>

            </div>
            <div>
                <Transition.Root show={open} as={Fragment}>
                    <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-10 overflow-y-auto">
                            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                >
                                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white  shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                        <div className="bg-white sm:p-6 sm:pb-4">
                                            <div className="py-2 border-2 sm:flex sm:items-center sm:justify-center">
                                                <div className="text-center sm:ml-4 sm:mt-2 sm:text-right">
                                                    <Dialog.Title as="h3" className=" text-base font-semibold leading-6 text-gray-900">
                                                        درخواست نرم افزار
                                                    </Dialog.Title>
                                                    <div >
                                                        <p className="text-sm text-gray-500">
                                                            <form action="mailto:m.toziee@gmail.com" method='post' encType='text/plain' >
                                                                <div className=" w-60">
                                                                    <div className="border-b border-gray-900/10 ">
                                                                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                                            <div className="sm:col-span-6">
                                                                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                                                    نام
                                                                                </label>
                                                                                <div className="mt-2">
                                                                                    <input
                                                                                        type="text"
                                                                                        name="first-name"
                                                                                        id="first-name"
                                                                                        autoComplete="given-name"
                                                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="sm:col-span-6">
                                                                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                                                    نام خانوادگی
                                                                                </label>
                                                                                <div className="mt-2">
                                                                                    <input
                                                                                        type="text"
                                                                                        name="last-name"
                                                                                        id="last-name"
                                                                                        autoComplete="family-name"
                                                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="sm:col-span-6">
                                                                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                                                                    ایمیل
                                                                                </label>
                                                                                <div className="mt-2">
                                                                                    <input
                                                                                        id="email"
                                                                                        name="email"
                                                                                        type="email"
                                                                                        autoComplete="email"
                                                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="sm:col-span-6">
                                                                                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                                                                    تلفن همراه
                                                                                </label>
                                                                                <div className="mt-2">
                                                                                    <input
                                                                                        type="number"
                                                                                        name="phoneNumber"
                                                                                        id="phoneNumber"
                                                                                        autoComplete="phoneNumber"
                                                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="mt-6 flex items-center justify-end gap-x-6">
                                                                    
                                                                    <button
                                                                        type="submit"
                                                                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                                    >
                                                                        ارسال
                                                                    </button>
                                                                </div>
                                                            </form>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>

            </div>


        </>
    )
}
