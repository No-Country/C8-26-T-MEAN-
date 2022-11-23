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
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg" /*1320px 583px*/
        alt="copa fifa"
      >
        <h5>TODO PREPARADO PARA LA COPA MUNDIAL DE LA FIFA CATAR 2022.</h5>
        <p>Los esquipos estan preparados. Los fans ya estan en la calle y se siente la emocion, felicidad y el apoyo a cada país. </p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg'
        alt='...'
      >
        <h5>Acumula puntos y segui ganando!</h5>
        <p>Descubre todas las alternativas para acumular puntos que te entrega Gift Club. 	
           Cuando disfrutás de los beneficios y pagás con tus tarjetas, también cumplís desafíos y sumás puntos.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg'
        alt='...'
      >
        <h5>Messi te queremos</h5>
        <p>VAMOS ARGENTINA</p>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}