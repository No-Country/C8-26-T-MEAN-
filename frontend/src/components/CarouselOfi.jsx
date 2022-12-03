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
        src="https://ik.imagekit.io/tjlqeq3ql/GiftClub/ban_espcialMundial2_KgT4WfoeT?ik-sdk-version=javascript-1.4.3&updatedAt=1669184322727" /*1320px 583px*/
        alt="copa fifa"
      >
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://ik.imagekit.io/tjlqeq3ql/GiftClub/_Bienvenido_a_GIFTCLUB__OyitpXYS5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670031312145'
        alt='...'
      >
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://ik.imagekit.io/tjlqeq3ql/GiftClub/ban_espcialMundial2_KgT4WfoeT?ik-sdk-version=javascript-1.4.3&updatedAt=1669184322727'
        alt='...'
      >
      </MDBCarouselItem>
    </MDBCarousel>
  );
}