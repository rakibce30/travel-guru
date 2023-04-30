import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider1 from '../assets/images/Sreemongol.png'
import Slider2 from '../assets/images/sundorbon.png'
import Slider3 from '../assets/images/Sajek.png'
import { EffectFade, Pagination } from 'swiper';


const Slider = () => {
    return (
        <div>
            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={30}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <img className='position-relative border border-2 border-warning rounded-5' style={{ width: "100%" }} src={Slider1} alt="" />
                    <h3 className='fs-5 text-white position-absolute bottom-0 text-center ps-3 pb-3'>Sreemongol</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img className='position-relative rounded-5' style={{ width: "100%" }} src={Slider2} alt="" />
                    <h3 className='fs-5 text-white position-absolute bottom-0 text-center ps-3 pb-3'>Sundorbon</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='position-relative rounded-5' style={{ width: "100%" }} src={Slider3} alt="" />
                    <h3 className='fs-5 text-white position-absolute bottom-0 text-center ps-3 pb-3'>Sajek</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='position-relative rounded-5' style={{ width: "100%" }} src={Slider3} alt="" />
                    <h3 className='fs-5 text-white position-absolute bottom-0 text-center ps-3 pb-3'>Sajek</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='position-relative rounded-5' style={{ width: "100%" }} src={Slider3} alt="" />
                    <h3 className='fs-5 text-white position-absolute bottom-0 text-center ps-3 pb-3'>Sajek</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='position-relative rounded-5' style={{ width: "100%" }} src={Slider3} alt="" />
                    <h3 className='fs-5 text-white position-absolute bottom-0 text-center ps-3 pb-3'>Sajek</h3>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;