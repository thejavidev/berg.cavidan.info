import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { BsFacebook } from 'react-icons/Bs';
import { AiFillInstagram,AiFillYoutube } from 'react-icons/Ai';
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className='mt-[4rem]'>
        <Col lg={12} className='mb-2'>
          <ul className='flex justify-center items-center gap-3'>
            <li className=''>
              <a href="#0"><BsFacebook className='text-[25px] transition-colors hover:text-[#ED2024]' /></a>
            </li>
            <li>
              <a href="#0"><AiFillInstagram className='text-[25px] transition-colors hover:text-[#ED2024]' /></a>
            </li>
            <li>
              <a href="#0"><AiFillYoutube className='text-[25px] transition-colors hover:text-[#ED2024]' /></a>
            </li>
          </ul>
        </Col>
        <Col lg={12} className='bg-[#ED2024] p-[15px]'>
          <Container>
            <Row className='justify-between'>
              <Col className="text-white" lg={6} md={12}>
                All Rights Reserved by BERG DRINK | {year}
              </Col>
              <Col className="text-right text-white" lg={6} md={12}>
                Powered by S
              </Col>
            </Row>
          </Container>
        </Col>

      </footer>
    </>
  )
}

export default Footer
