import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function CarouselOfi() {
  return (
    <MDBCarousel showControls showIndicators dark fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src="src/assets/slider_1.png" /*1320px 583px*/
        alt="copa fifa"
      >
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='src/assets/slider_2.png'
        alt='...'
      >
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='src/assets/slider_3.png'
        alt='...'
      >
      </MDBCarouselItem>
    </MDBCarousel>
  );
}