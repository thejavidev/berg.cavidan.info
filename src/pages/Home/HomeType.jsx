import { ferrum, glucose, magnesium, vitamin } from "../../assets";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const types = [
    {
        id: 1,
        img: vitamin,
        name: "Vitamin C",
        title: `Balanslaşdırılmış C vitamini səviyyəsi (yəni yaxşı C vitamini ehtiyatı) immun sisteminin sağlam 
        funksiyasına kömək edir. Soyuqdəymə virusları bizim selikli qişamıza çatdıqdan sonra, C vitamini
        bədəndə aktivləşir.`
    },
    {
        id: 2,
        img: glucose,
        name: "Glucose",
        title: `İnsanın imun sistemini tənzimləyir və beyinin funksional işləməsinə , onun sinir sitemini gücləndirməyə
        təminat verir.`
    },
    {
        id: 3,
        img: ferrum,
        name: "Ferrum",
        title: `Məhz dəmir qanın rəngini, həmçinin onun oksigeni əlaqələndirmək
        və vermək qabiliyyətini təmin edir. Eritrositlər ağ ciyərlərdən
        oksigeni bütün orqanizmə daşıyır və karbon qazını
        orqanizmdən kənarlaşdırır.`
    },
    {
        id: 4,
        img: magnesium,
        name: "Magnesium",
        title: `Sümüklərin və dişlərin tərkibinə daxildir, qara ciyərdə, qanda, sinir toxumalarında və beyində olur, zülal və karbon mübadiləsində iştirak edir. O, antiseptik, damar genişləndirici təsir göstərir, arterial təzyiqi və qanda xolesterinin miqdarını azaldır, baş beyin qabığında ləngimə proseslərini gücləndirir, əsəb sisteminə sakitləşdirici (sedativ) təsir edir.`
    }
]


const HomeType = () => {
    return (
        <div className='mt-[2rem]'>
            <Row className="gap-y-10">
                {
                    types && types?.map((item, index) => (
                        <Col lg={6} md={12} key={index}>
                            <div className="flex flex-col h-full  pl-0 pr-[20px] pt-[20px] pb-[20px]" >
                                <div className=" bg-[#ED2024] rounded-md w-[40px] h-[40px] mb-[10px] flex p-[7px] justify-center transition-all items-center hover:scale-125">
                                    <LazyLoadImage src={item.img} className="object-cover " />
                                </div>
                                <div className="pb-[10px]">
                                    <span className="text-[16px] font-semibold capitalize">{item.name}</span>
                                </div>
                                <div className="">
                                    {item.title}
                                </div>
                            </div>
                        </Col>

                    ))
                }
            </Row>

        </div>
    )
}

export default HomeType
