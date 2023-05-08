
import HomeAbout from './HomeAbout';
import HomeCarousel from './HomeCarousel';
import Container from 'react-bootstrap/Container';
import HomeGallery from './HomeGallery';

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <Container>
        <HomeAbout />
        <HomeGallery />
      </Container>
    </>

  )
}

export default Home
