
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { aboutPic } from '../../assets';
import Button from 'react-bootstrap/Button';
import { GrFormNext } from 'react-icons/Gr';
import { Link } from 'react-router-dom';
import HomeType from './HomeType';
const HomeAbout = () => {
    return (
        <>
            <div className='home about mt-[5rem]'>
                <Row>
                    <Col lg={6} md={12}>
                        <LazyLoadImage src={aboutPic} className='w-full object-cover rounded-md' />
                    </Col>
                    <Col lg={6} md={12}>
                        <div className="flex justify-evenly flex-col h-full">
                            <div><h3 className='text-[60px] md:text-[35px] capitalize text-[#4A4A4A] font-bold'>haqqımızda</h3></div>
                            <div>  <p>Sümüklərin və dişlərin tərkibinə daxildir, qara ciyərdə, qanda, sinir toxumalarında və beyində olur, zülal və karbon mübadiləsində iştirak edir. O, antiseptik, damar genişləndirici təsir göstərir, arterial təzyiqi və qanda xolesterinin miqdarını azaldır, baş beyin qabığında ləngimə proseslərini gücləndirir, əsəb sisteminə sakitləşdirici (sedativ) təsir edir. sümüklərin və dişlərin tərkibinə daxildir, qara ciyərdə, qanda, sinir toxumalarında və beyində olur, zülal və karbon mübadiləsində iştirak edir.
                            </p></div>
                            <div>
                                <Link to='/about'>
                                    <Button className='flex items-center capitalize border-none outline-none text-[20px] text-black hover:bg-transparent p-0 mt-3'>Daha çox
                                        <GrFormNext className='border-2 rounded-full text-[20px] ml-3 border-[#333333]' /> </Button>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>

            </div>
            <HomeType />
        </>

    )
}

export default HomeAbout
