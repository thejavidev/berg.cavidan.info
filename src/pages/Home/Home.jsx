
import HomeAbout from './HomeAbout';
import HomeCarousel from './HomeCarousel';
import Container from 'react-bootstrap/Container';
import HomeGallery from './HomeGallery';
import HomeBrands from './HomeBrands';

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <Container>
        <HomeAbout />
        <HomeGallery />
        <HomeBrands />
      </Container>
    </>

  )
}

export default Home
