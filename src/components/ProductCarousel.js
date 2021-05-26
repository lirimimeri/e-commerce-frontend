import React from 'react';
import { Carousel, Image } from 'react-bootstrap';

function ProductCarousel() {
  return (
    <Carousel pause='hover' className='bg-dark mt-3'>
      <Carousel.Item style={{ maxHeight: 350, minHeight: 300 }}>
        <Image
          fluid
          src='https://store.sony.com.au/dw/image/v2/ABBC_PRD/on/demandware.static/-/Sites-sony-master-catalog/default/dwa7d9a139/images/ZV1/ZV1.png'
          alt='First slide'
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ maxHeight: 350, minHeight: 300 }}>
        <Image
          fluid
          src='https://cipher.dakiscdn.com/i/https://1410dd2bdd37e05ebf19-a2305060cc55ab8db83b1ef4b8835a6b.ssl.cf5.rackcdn.com/oV-1yLJtx3-mkUXtPL2Lmg?w=400&h=400&p=1&a=1&q=display'
          alt='Second slide'
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ maxHeight: 350, minHeight: 300 }}>
        <Image
          fluid
          src='https://www.sony.com/image/a9bd3d4cc0dac35199d6d92078bfe331?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320'
          alt='Third slide'
        />

        <Carousel.Caption>
          <h3 className='text-dark'>Third slide label</h3>
          <p className='text-dark'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProductCarousel;
