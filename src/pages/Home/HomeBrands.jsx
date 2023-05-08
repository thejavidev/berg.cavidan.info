
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Swiper, SwiperSlide } from 'swiper/react';
import datas from '../../assets/localdata/localdata';
import { Autoplay } from "swiper";
import "swiper/css";
const HomeBrands = () => {
    return (
        <div className='mt-[7rem]'>
            <h3 className='text-[60px] text-center font-bold mb-[3rem] capitalize'>partnyotlar</h3>
            <Swiper
                slidesPerView={5}
                spaceBetween={10}
                 autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                loop={true}
                breakpoints={{
                    1024: {
                        slidesPerView: 5,
                        
                    },
                    768: {
                        slidesPerView: 4,
                       
                    },
                    640: {
                        slidesPerView: 3,
                      
                    },
                    340: {
                        slidesPerView: 2,
                      
                    },
                    
                   
                   
                }}
                className="mySwiper"
            >

                {
                    datas[1] && datas[1].map((item, index) => (
                        <SwiperSlide key={index} className='flex items-center justify-center cursor-pointer'>
                            <LazyLoadImage className='w-full h-[90px] object-contain p-[20px]' src={item.img} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default HomeBrands
