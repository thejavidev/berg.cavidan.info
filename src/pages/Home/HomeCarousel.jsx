import Carousel from 'react-bootstrap/Carousel';
import { slider1 } from '../../assets';

const carouselItem = [
    {
        id: 1,
        img: slider1,
        className:"block w-full h-[800px] object-cover md:h-full",
        alt: 'image 1'
    },
    {
        id: 2,
        img: slider1,
        className:"block w-full h-[800px] object-cover md:h-full",
        alt: 'image 2'
    },
    {
        id: 3,
        img: slider1,
        className:"block w-full h-[800px] object-cover md:h-full",
        alt: 'image 3'
    },
]

const HomeCarousel = () => {
    return (
        <div className='carousels'>
            <Carousel fade touch interval={5000}>
                {
                    carouselItem && carouselItem?.map((item, index) => (
                        <Carousel.Item key={index}>
                            <img
                                className={item.className}
                                src={item.img}
                                alt={item.alt}
                            />
                        </Carousel.Item>
                    ))
                }

            </Carousel>

        </div>
    )
}

export default HomeCarousel
