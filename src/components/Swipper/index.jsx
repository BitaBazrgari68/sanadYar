import React, { useState,useRef, useEffect, useContext } from 'react';

import ContextSlide from '../../utiles/ContextSlide';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Autoplay,EffectFade, Navigation, Pagination } from 'swiper/modules';
export default function Swipper() {
    const index = useContext(ContextSlide);
    const slideZero = document.querySelector('.first');
    const slideOne = document.querySelector('.second');
    const slideTwo = document.querySelector('.Third');
    const slideThree = document.querySelector('.fourth');
    useEffect(() => {

        if (index.item === 'zero') {
            if (slideOne.classList.contains('swiper-slide-visible')) {
                slideOne.classList.remove('swiper-slide-visible');
                slideOne.classList.remove('swiper-slide-active');
            }
            else if (slideTwo.classList.contains('swiper-slide-visible')) {
                slideTwo.classList.remove('swiper-slide-visible');
                slideTwo.classList.remove('swiper-slide-active');
            }
            else if (slideThree.classList.contains('swiper-slide-visible')) {
                slideThree.classList.remove('swiper-slide-visible');
                slideThree.classList.remove('swiper-slide-active');
            }
            
            slideZero.classList.add('swiper-slide-visible');
            slideZero.classList.add('swiper-slide-active');
        }
        else if (index.item === 'one') {
            
            if (slideZero.classList.contains('swiper-slide-visible')) {
                
                slideZero.classList.remove('swiper-slide-visible');
                slideZero.classList.remove('swiper-slide-active');
            }
            else if (slideTwo.classList.contains('swiper-slide-visible')) {
                
                slideTwo.classList.remove('swiper-slide-visible');
                slideTwo.classList.remove('swiper-slide-active');
            }
            else if (slideThree.classList.contains('swiper-slide-visible')) {
               
                slideThree.classList.remove('swiper-slide-visible');
                slideThree.classList.remove('swiper-slide-active');
            }

            slideOne.classList.add('swiper-slide-visible');
            slideOne.classList.add('swiper-slide-active');
        }
        else if (index.item === 'two') {
            if (slideZero.classList.contains('swiper-slide-visible')) {
                slideZero.classList.remove('swiper-slide-visible');
                slideZero.classList.remove('swiper-slide-active');
            }
            else if (slideOne.classList.contains('swiper-slide-visible')) {
                slideOne.classList.remove('swiper-slide-visible');
                slideOne.classList.remove('swiper-slide-active');
            }
            else if (slideThree.classList.contains('swiper-slide-visible')) {
                slideThree.classList.remove('swiper-slide-visible');
                slideThree.classList.remove('swiper-slide-active');
            }

            slideTwo.classList.add('swiper-slide-visible');
            slideTwo.classList.add('swiper-slide-active');
        }
        else if (index.item === 'three') {
            if (slideZero.classList.contains('swiper-slide-visible')) {
                slideZero.classList.remove('swiper-slide-visible');
                slideZero.classList.remove('swiper-slide-active');
            }
            else if (slideOne.classList.contains('swiper-slide-visible')) {
                slideOne.classList.remove('swiper-slide-visible');
                slideOne.classList.remove('swiper-slide-active');
            }
            else if (slideTwo.classList.contains('swiper-slide-visible')) {
                slideTwo.classList.remove('swiper-slide-visible');
                slideTwo.classList.remove('swiper-slide-active');
            }

            slideThree.classList.add('swiper-slide-visible');
            slideThree.classList.add('swiper-slide-active');
        }

    }, [index.item])
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

    const classes = `duration-[1000ms] hidden md:flex
        ${isVisible ? "animate-fadeleft" : "opacity-1"
        }`;
    return (
        <div className={classes} ref={ref} id='Services'>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
                
                onActiveIndexChange={({ realIndex }) => {
                    index.changeSlide(realIndex)
                }}
            >
                <SwiperSlide className='first'>
                    <div className="grid grid-rows-3 md:grid-rows-1 grid-flow-col w-full gap-4  px-10 pt-10 h-auto ">
                        <div className=' card ' >
                            <h1 className=' text-right py-2 pr-2 mb-3 bg-[#8756b2] text-yellow-200 rounded-md'>نرم افزار خدماتی</h1>
                            <p className=' text-justify text-base'>
                                نرم افزار خدماتی برای بنگاه های اقتصادی مناسب می باشدکه خرید و فروش کالا نداشته و فقط خرید و فروش خدمات انجام می دهند.
                            </p>
                            <ul className="list-disc pt-3 text-base leading-7">
                                <li className='text-cyan-600 text-right '>حسابداری مالی</li>
                                <li className='text-cyan-600 text-right '>خزانه داری</li>
                                <li className='text-cyan-600 text-right'>فاکتور فروش</li>
                                <li className='text-cyan-600 text-right'>گزارشات</li>
                            </ul>
                        </div>
                        <div className='card ' >
                            <h1 className='text-right py-2 pr-2 mb-3 bg-[#8756b2] text-yellow-200 rounded-md'>نرم افزار فروش کالا و خدمات</h1>
                            <p className=' text-justify text-base'>
                                نرم افزار فروش کالا و خدمات برای بنگاه های اقتصادی که خرید و فروش کالا بدون تغییر در شکل کالا دارند، مناسب می باشد
                            </p>
                            <ul class="list-disc pt-3 text-base leading-7">
                                <li className='text-cyan-600 text-right'>حسابداری مالی</li>
                                <li className='text-cyan-600 text-right'>فاکتور خرید</li>
                                <li className='text-cyan-600 text-right'>فاکتور هزینه</li>
                                <li className='text-cyan-600 text-right'>فاکتور فروش</li>
                                <li className='text-cyan-600 text-right'>گزارشات</li>
                            </ul>
                        </div>
                        <div className=' card' >
                            <h1 className='text-right py-2 pr-2 mb-3 bg-[#8756b2] text-yellow-200 rounded-md'>نرم افزار فروش کالا و خدمات</h1>
                            <p className=' text-justify text-base'>
                                نرم افزار فروش کالا و خدمات برای بنگاه های اقتصادی که خرید و فروش کالا بدون تغییر در شکل کالا دارند، مناسب می باشد
                            </p>
                            <ul class="list-disc pt-3 text-base leading-7">
                                <li className='text-cyan-600 text-right'>حسابداری مالی</li>
                                <li className='text-cyan-600 text-right'>فاکتور خرید</li>
                                <li className='text-cyan-600 text-right'>فاکتور هزینه</li>
                                <li className='text-cyan-600 text-right'>فاکتور فروش</li>
                                <li className='text-cyan-600 text-right'>گزارشات</li>
                            </ul>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide className='second '>
                    <div className="grid grid-rows-4 md:grid-rows-1 grid-flow-col gap-4  w-full  px-10 pt-10 h-auto ">
                        <div className=' card' >
                            <h1 className='text-right py-2 pr-2 mb-3 bg-[#8756b2] text-yellow-200 rounded-md'>کلیه امور مالیاتی</h1>
                            <ul class="list-disc pt-3 text-base leading-7">
                                <li className='text-cyan-600 text-right'>مشاوره مالی و مالیاتی</li>
                                <li className='text-cyan-600 text-right'>انجام امور مربوط به اظهارنامه مالیاتی عملکرد</li>
                                <li className='text-cyan-600 text-right'>انجام امور مربوط به گزارشات فصلی </li>
                                <li className='text-cyan-600 text-right'> انجام اظهارنامه مالیات بر ارزش افزوده</li>
                                <li className='text-cyan-600 text-right'>تحریر دفاتر قانونی</li>
                                <li className='text-cyan-600 text-right'>تهیه لوایح دفاعیه و اعتراضات مالیاتی</li>
                            </ul>
                        </div>


                        <div className='card' >
                            <h1 className='text-right py-2 pr-2 mb-3 bg-[#8756b2] text-yellow-200 rounded-md'>مدیریت راهبردی</h1>
                            <ul class="list-disc pt-3 text-base leading-7">
                                <li className='text-cyan-600 text-right'>مدیریت نیروهای انسانی</li>
                                <li className='text-cyan-600 text-right'>مدیریت فروش و بازارهای هدف</li>
                                <li className='text-cyan-600 text-right'>مدیریت کنترل هزینه های پرداخت و هزینه های فرصت </li>
                                <li className='text-cyan-600 text-right'> مدیریت بروکراسی اداری</li>
                                <li className='text-cyan-600 text-right'>مدیریت چرخه تولید</li>
                                <li className='text-cyan-600 text-right'>مدیریت زنجیره ارزش</li>
                                <li className='text-cyan-600 text-right'>هبود سیستم مالی</li>
                                <li className='text-cyan-600 text-right'>بهبود سود و کاآمدتر شدن سازمان </li>
                                <li className='text-cyan-600 text-right'> تعریف سیستم و ساختار سازمان</li>
                                <li className='text-cyan-600 text-right'>خارج نمودن سازمان از محوریت شخص</li>
                            </ul>
                        </div>
                        <div className=' card ' >
                            <h1 className='text-right py-2 pr-2 mb-3 bg-[#8756b2] text-yellow-200 rounded-md'>کلیه امور بیمه و اداره کار</h1>
                            <ul class="list-disc pt-3 text-base leading-7">
                                <li className='text-cyan-600 text-right'>مشاوره مالی و بیمه ای</li>
                                <li className='text-cyan-600 text-right'>تهیه لیست های بیمه تامین اجتماعی</li>
                                <li className='text-cyan-600 text-right'>مشاوره در خصوص مفاصا حساب قراردادهای پیمانکاری </li>
                                <li className='text-cyan-600 text-right'>امور مربوط به کارگزینی پرسنل</li>
                                <li className='text-cyan-600 text-right'>امور قراردادهای کارگری و کارفرمایی</li>
                                <li className='text-cyan-600 text-right'>امور قراردادهای پیمانکاری</li>
                                <li className='text-cyan-600 text-right'>امور مربوط به اداره کار </li>
                                <li className='text-cyan-600 text-right'>تهیه لوایح دفاعیه و اعتراضات تامین اجتماعی </li>
                                <li className='text-cyan-600 text-right'>تهیه لوایح دفاعیه و اعتراضات اداره کار</li>
                            </ul>
                        </div>
                        <div className=' card' >
                            <h1 className='text-right py-2 pr-2 mb-3 bg-[#8756b2] text-yellow-200 rounded-md'>مشاوره کسب و کار</h1>
                            <ul class="list-disc pt-3 text-base leading-7">
                                <li className='text-cyan-600 text-right'>تعیین سود مورد انتظار</li>
                                <li className='text-cyan-600 text-right'>تعیین بازارهای هدف</li>
                                <li className='text-cyan-600 text-right'>تعریف سیستم یکپارچه مالی و اداری و فروش </li>
                                <li className='text-cyan-600 text-right'>تعریف کالاهای جایگزین </li>
                                <li className='text-cyan-600 text-right'>بهبود تولید کالاهای بهتر</li>
                                <li className='text-cyan-600 text-right'>تعیین بهای تمام شده و سود کالاها</li>
                            </ul>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide className='Third '>
                    <div className="grid grid-rows-4 md:grid-rows-1 grid-flow-col gap-4  w-full  px-10 pt-10 h-auto ">
                        <div className=' card' >
                            <h1 className='text-right py-2 pr-2 mb-3 bg-[#8756b2] text-yellow-200 rounded-md'>حسابداری مقدماتی</h1>
                            <ul class="list-disc pt-3 ps-5 text-base leading-7">
                                <li className='text-cyan-600 text-right'>آشنایی با دانش حسابداری</li>
                                <li className='text-cyan-600 text-right'>آشنایی با سرفصل های حسابداری</li>
                                <li className='text-cyan-600 text-right'> ثبت رویدادهای مالی</li>
                                <li className='text-cyan-600 text-right'> نحوه گزارش گیری</li>
                            </ul>
                        </div>
                        <div className=' card' >
                            <h1 className='text-right py-2 pr-2 mb-3 bg-[#8756b2] text-yellow-200 rounded-md'>حسابداری برای مدیران</h1>
                            <ul class="list-disc pt-3 text-base leading-7">
                                <li className='text-cyan-600 text-right'>توانایی خواندن صورت های مالی</li>
                                <li className='text-cyan-600 text-right'>توانایی تجزیه تحلیل های مالی</li>
                                <li className='text-cyan-600 text-right'>آشنایی با صورت های مالی مورد نیاز مدیران </li>
                                <li className='text-cyan-600 text-right'>روند امور اداری و مالیاتی پرونده های مالیاتی </li>
                                <li className='text-cyan-600 text-right'>موارد مورد درخواست از حسابرس سازمان</li>
                                <li className='text-cyan-600 text-right'>توانایی بررسی عملکرد واحد مالی</li>
                            </ul>
                        </div>
                        <div className=' card ' >
                            <h1 className='text-right py-2 pr-2 mb-3 bg-[#8756b2] text-yellow-200 rounded-md'>سایر آموزش های مالی</h1>
                            <ul class="list-disc pt-3 text-base leading-7">
                                <li className='text-cyan-600 text-right'> آموزش قانون کار</li>
                                <li className='text-cyan-600 text-right'>آموزش مالیاتی</li>
                                <li className='text-cyan-600 text-right'>آموزش مالیاتی </li>
                                <li className='text-cyan-600 text-right'>مدیریت مالی </li>
                                <li className='text-cyan-600 text-right'>سرپرستی واحد حسابداری</li>
                                <li className='text-cyan-600 text-right'>چیدمان سیستم مالی و اداری</li>
                                <li className='text-cyan-600 text-right'>مدیریت کارگزینی</li>
                                <li className='text-cyan-600 text-right'>حسابداری خارجی </li>
                                <li className='text-cyan-600 text-right'> بخشی از حسابرسی</li>
                                <li className='text-cyan-600 text-right'>گزارشات فصلی</li>
                                <li className='text-cyan-600 text-right'>گزارشات ارزش افزوده</li>
                                <li className='text-cyan-600 text-right'> تنظیم و تحریر دفاتر مالی</li>
                                <li className='text-cyan-600 text-right'>دفاعیات </li>
                                <li className='text-cyan-600 text-right'>امور تامین اجتماعی و سایر ارگان ها</li>
                            </ul>
                        </div>
                        <div className=' card' >
                            <h1 className='text-right py-2 pr-2 mb-3 bg-[#8756b2] text-yellow-200 rounded-md'>حسابداری پیشرفته</h1>
                            <ul class="list-disc pt-3 text-base leading-7">
                                <li className='text-cyan-600 text-right'>بهای تمام شده کالاهای فروش رفته</li>
                                <li className='text-cyan-600 text-right'>مغایرت گیری بین حساب ها</li>
                                <li className='text-cyan-600 text-right'> اصلاح خطاهای حسابداری مقدماتی</li>
                            </ul>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide className='fourth '>
                    <div className="grid grid-rows-1 grid-flow-col gap-4  w-full  px-10 pt-10 h-auto">
                        <div className=' card' >
                            <h1 className='text-right py-2 pr-2 mb-3 bg-[#8756b2] text-yellow-200 rounded-md'>نحوه کار با سامانه مودیان چگونه است ؟</h1>
                            <p className=' text-justify text-base'>
                                از ابتدای سال 1402 کلیه اشخاص حقوقی موظف هستند که در سامانه مودیان نام نویسی کرده و کلیه فاکتورهای خرید و فروش خود را از این طریق به سازمان مالیاتی ارسال کنند.
                            </p>
                            <ul class="list-disc pt-3 text-base leading-7">
                                <li className='text-cyan-600 text-right pb-3'>طریقه ارسال فاکتورهای فروش :(به دو طریق امکان ارسال فاکتورهای فروش هست)
                                    <ul className='pt-3 text-black '>
                                        <li>از طریق شرکت های معتمد مالیاتی که 7 شرکت معتمد در حال حاضر وجود دارند</li>
                                        <li>به شکل مستقیم توسط شرکت انجام شود که این امر مستلزم این است شرکت دارای نرم افزار حسابداری باشد که توانایی لینک شدن با سامانه مودیان را داشته باشد. (نرم افزار حسابداری سندیار این امکان را دارد)
                                            توجه : در حال حاضر امکان ارسال فاکتورهای فروش به صورت دستی مانند گزارش فصلی وجود ندارد.</li>
                                    </ul>
                                </li>
                                <li className='text-cyan-600 pb-3 text-right'>طریقه ارسال فاکتور های خرید
                                    <ol className='text-black pt-3 text-right'>
                                        <li>امکان ارسال فاکتور خرید توسط شرکت وجود ندارد و فقط شرکت می تواند فاکتورهای خریدی که در کارتابل خود که توسط فروشنده ثبت شده است را مشاهده نموده تایید یا عدم تایید نماید (مثل ثبت و تایید چک های صیادی )</li>
                                    </ol>
                                </li>
                                <li className='text-cyan-600 text-right pb-3'> طریقه ارسال هزینه
                                    <ol className='text-black pt-3 text-right'>
                                        <li>
                                            شرکت ها فقط باید از حساب بانکی شرکت استفاده نموده و هزینه های جزئی خود را از طریق کارت بانکی شرکت پرداخت نمایند (تنخواه گردان کارپرداز حذف شده است ) به نوعی تنخواه گردان شرکتی بوجود آمده است
                                        </li>
                                    </ol>
                                </li>

                            </ul>
                            <p className=' text-justify text-base'>
                                مدت زمان ارسال فاکتورها :
                                برای فاکتور فروش حداکثر 6 روز پس از صدور فاکتور
                                برای فاکتور خرید 30 روز زمان برای تایید وجود دارد چنانچه عملی صورت نپذیرد بصورت سیستمی فاکتور خرید تایید می گردد
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
