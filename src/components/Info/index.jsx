import React, { useContext, useEffect } from 'react';
import contextSlide from '../../utiles/ContextSlide';
import Swipper from '../Swipper'

import companyLogo from './images/accounting-svgrepo.svg'
import monitor from './images/monitor-svgrepo.svg'
import seminar from './images/seminar-scenery.svg'
import chart from './images/chart-user-square.svg'
export default function Info() {
    const index = useContext(contextSlide);


    useEffect(() => {
        const elementZero = document.querySelector('.zero');
        const elementOne = document.querySelector('.one');
        const elementTwo = document.querySelector('.two');
        const elementThree = document.querySelector('.three');

        if (index.activeStep === 0) {
            elementZero.classList.remove('bg-[#664f9e]');
            elementZero.classList.add('bg-[#8756b2]');
            elementOne.classList.remove('bg-[#8756b2]');
            elementThree.classList.remove('bg-[#8756b2]');
            elementOne.classList.add('bg-[#664f9e]');
            elementThree.classList.add('bg-[#664f9e]');
        }
        else if (index.activeStep === 1) {
            elementOne.classList.remove('bg-[#664f9e]');
            elementOne.classList.add('bg-[#8756b2]');
            elementZero.classList.remove('bg-[#8756b2]');
            elementTwo.classList.remove('bg-[#8756b2]');
            elementZero.classList.add('bg-[#664f9e]');
            elementTwo.classList.add('bg-[#664f9e]');
        }
        else if (index.activeStep === 2) {
            elementTwo.classList.remove('bg-[#664f9e]');
            elementTwo.classList.add('bg-[#8756b2]')
            elementOne.classList.remove('bg-[#8756b2]');
            elementThree.classList.remove('bg-[#8756b2]');
            elementOne.classList.add('bg-[#664f9e]');
            elementThree.classList.add('bg-[#664f9e]');
        }
        else if (index.activeStep === 3) {
            elementThree.classList.remove('bg-[#664f9e]');
            elementThree.classList.add('bg-[#8756b2]')
            elementTwo.classList.remove('bg-[#8756b2]')
            elementTwo.classList.add('bg-[#664f9e]')
        }
    }, [index.activeStep])
    return (
        < >

            <ol className="items-center px-10 sm:flex sm:justify-center margin-top bg-info ">
                <li className="relative mb-6 sm:mb-0 w-1/4">
                    <div className="flex items-center ">
                        <div className="zero z-10 flex items-center justify-center w-24 h-24 bg-[#664f9e] rounded-full ring-0 ring-[#d5cadd] dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                            <img className=" w-14 h-14" src={monitor} />
                        </div>
                        <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div className="mt-2 sm:pr-2">
                        <h3 className="text-sm leading-7 font-semibold text-gray-900 dark:text-white">نرم افزار حسابداری</h3>
                    </div>
                </li>
                <li className="relative mb-6 sm:mb-0 w-1/4">
                    <div className="flex items-center">
                        <div className="one z-10 flex items-center justify-center w-24 h-24 bg-[#664f9e] rounded-full ring-0 ring-[#d5cadd] dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                            <img className=" w-14 h-14" src={companyLogo} />
                        </div>
                        <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div className="mt-2 sm:pr-4">
                        <h3 className="text-sm leading-7 font-semibold text-gray-900 dark:text-white">خدمات مالی</h3>
                    </div>
                </li>
                <li className="relative mb-6 sm:mb-0 w-1/4">
                    <div className="flex items-center ">
                        <div className="two z-10 flex items-center justify-center w-24 h-24 bg-[#664f9e] rounded-full ring-0 ring-[#d5cadd] dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                            <img className=" w-14 h-14" src={seminar} />
                        </div>
                        <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div className="mt-2 sm:pr-4">
                        <h3 className="text-sm leading-7 font-semibold text-gray-900 dark:text-white">خدمات آموزشی</h3>
                    </div>
                </li>
                <li className="relative mb-6 sm:mb-0">
                    <div className="flex items-center w-1/4">
                        <div className="three z-10 flex items-center justify-center w-24 h-24 bg-[#664f9e] rounded-full ring-0 ring-[#d5cadd] dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                            <img className=" w-14 h-14" src={chart} />
                        </div>
                    </div>
                    <div className="mt-2 sm:pr-4">
                        <h3 className="text-sm leading-7 font-semibold text-gray-900 dark:text-white">سامانه مودیان</h3>
                    </div>
                </li>
            </ol>
            <Swipper />
        </>

    )
}
