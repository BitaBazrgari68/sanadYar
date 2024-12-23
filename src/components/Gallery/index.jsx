import React, { useEffect, useRef, useState } from 'react'
import "animate.css/animate.min.css"
import documents from './images/documents.jpg'
import Introduction from './images/Introduction.jpg'
import Invoice from './images/Invoice.jpg'
import Issuing from './images/Issuing.jpg'
import Bill from './images/Bill.jpg'
import reports from './images/reports.jpg'


export default function Gallery() {
    const images = [Bill, Introduction, Invoice, Issuing];
    const listItems = images.map((e) =>
        <img
            className="card-gallery w-full rounded-lg transition-all duration-300 ease-in-out
             hover:shadow-lg hover:shadow-black/30
             hover:scale-125 hover:overflow-hidden  "
            title='فاکتور رسمی'
            alt='Bill'
            src={e}
        />
    );
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const onWindScroll = () => {
            const element = ref.current;
            if (element) {
                const { top } = element.getBoundingClientRect();
                const isVisible = top < window.innerHeight;
                setIsVisible(isVisible);
            }
        };

        window.addEventListener("scroll", onWindScroll);
        return () => {
            window.removeEventListener("scroll", onWindScroll);
        };
    }, []);

    const classes = `hidden duration-[1000ms]  lg:block
        ${isVisible ? "animate-fade" : "opacity-1"
        }`;

    return (
        <div className={classes} id='gallery' ref={ref}>
            <div className='h-20 overflow-hidden w-full '>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" className='h-full w-full' >
                    <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                        className='stroke-none'
                        fill='#664f9e'
                    ></path>
                </svg>
            </div>

            <div className='flex flex-col justify-center px-10  bg-[#664f9e]'>
                <div className='hidden pb-5 md:flex md:flex-col md:items-center md:justify-center text-white '>
                    <h3>نمایی از نرم افزار</h3>
                    <span className='line flex'>
                        _________________
                        <i>
                            <svg className='w-8' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
                            </svg>
                        </i>
                        _________________
                    </span>
                </div>
                <div className="container grid grid-cols-2 gap-4 lg:grid-cols-4 pb-5 ">
                    <img
                        src={documents}
                        title='اسناد حسابداری'
                        alt='documents'
                        className=" cursor-pointer card-gallery rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30 w-full h-full col-span-2 row-span-2 shadow-sm lg:col-start-3 lg:row-start-1"
                    />
                    {listItems}
                </div>

            </div>
            <div className='h-20 overflow-hidden w-full '>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" className='h-full w-full'>
                    <path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
                        className='stroke-none'
                        fill='#664f9e'
                    >
                    </path>
                </svg>
            </div>
        </div >
    )
}
