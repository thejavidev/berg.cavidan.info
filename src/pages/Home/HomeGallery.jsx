import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import gallery from '../../assets/localdata/localdata';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from 'react-router-dom';
const HomeGallery = () => {
    return (
        <>
            <div className="mt-[8rem]">
                <h3 className='font-bold text-[60px] mb-[4rem] text-center'>Qalereya</h3>
                <Row>
                    {
                        gallery && gallery?.slice(0,4).map((item,index)=>(
                            <Col key={index} lg={3} md={4} xs={6} className='overflow-hidden'>
                                <LazyLoadImage className='w-full object-cover rounded-md transition-img hover:scale-105 ' src={item.img} />
                            </Col>
                        ))
                    }
                </Row>
                <div className="flex items-center justify-center mt-3">
                    <Link to='/gallery' className='border-2 pl-[20px] pr-[20px] pt-[10px] pb-[10px] text-[18px] font-semibold
                     border-red-500 text-red-500 rounded-md hover:text-red-800 capitalize text-center'>
                        daha çox
                    </Link>
                </div>
            </div>
        </>
    )
}

export default HomeGallery
