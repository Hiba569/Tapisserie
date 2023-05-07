import Carousel from 'react-bootstrap/Carousel';
import { images } from '../../Constants';

function NosTravaux() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images.car1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Relaxation et confort dans nos salons spacieux</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images.car2}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images.car3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images.car4}
          alt="four slide"
        />
       
      </Carousel.Item>
    </Carousel>
  );
}

export default NosTravaux;