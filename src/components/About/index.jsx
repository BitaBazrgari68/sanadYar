import React, { useEffect, useRef, useState } from 'react'
import abt from './images/abt.png'
export default function About() {
    // const [readMore, setReadMore] = useState(false);
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

    const classes = `duration-[1000ms]  md:flex md:flex-col md:items-center md:justify-center md:text-cyan-700
        ${isVisible ? "animate-fadeup" : "opacity-1"
        }`;
        const classes1 = `duration-[1000ms]  md:flex md:justify-center md:px-10
        ${isVisible ? "animate-fadeleft" : "opacity-1"
        }`;
    return (
        <div className='hidden md:flex md:flex-col ' id='about' ref={ref} >
            <div className={classes}>
                <h3 >درباره ما</h3>
                <span className='line flex  '>
                    _________________
                    <i>
                        <svg className='w-8' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
                        </svg>
                    </i>
                    _________________
                </span>
            </div>
            <div className={classes1}>
                <div className='flex-1  bg-about  flex justify-center items-center  '>
                    <p className='text-justify leading-loose abt self-center md:overflow-hidden'>
                        یکی از بخش های بسیار مهم در هر کاری با هر هدف و منظوری، امور مالی و حسابداریست. صحت و درستی و موثر بودن برنامه ها ارتباط مستقیم با اطلاعات و داده هایی دارد که بر اساس آنها برنامه ها تدوین شده است.ازین رو حسابداری به عنوان یک شغل و مهارت بسیار حساس و حیاتی برای کلیه بنگاه های اقتصادی می باشد و همین امر باعث پیچیدگی این حرفه گردیده است. ابزار مناسب و کارآمد می تواند ضمن کاهش پیچیدگی ها و سختی ها، درصد خطاها را کاهش دهد.گروه متخصص سندیار با شناخت کافی و همه جانبه از حوزه مدیریت مالی، حسابداری و با تکیه بر دانش و تجارب بالای کارشناسان خود در جهت سهولت و روان سازی انجام امور مالی و حسابداری و کاهشی خطا در حد به صفر رساندن آن اقدام به طراحی و تولید نرم افزار ((سندیار)) نموده است
                        {/* <href onClick={() => setReadMore(!readMore)}><span className='text-cyan-500 ms-3'> Read More</span> </href>
                        {readMore && <ReadMore />} */}
                    </p>
                </div>
                <div className='flex-1 flex justify-center '>
                    <img src={abt} alt='about us' />
                </div>
            </div>
        </div>
    )
}
