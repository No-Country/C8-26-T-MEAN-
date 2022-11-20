import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function CarouselOfi() {
  return (
    <MDBCarousel showControls showIndicators dark fade  class="slider-container">
      <MDBCarouselItem
        className='w-100 d-block'
        class="slider-container"
        itemId={1}
        src="https://digitalhub.fifa.com/transform/e648d54a-9f66-45b4-871b-134398b23ff5/FIFA-World-Cup-Qatar-2022-Final-Draw?io=transform:fit,width:448,height:448&format=png"
        alt="copa fifa"
      >
        <h5>TODO PREPARADO PARA LA COPA MUNDIAL DE LA FIFA CATAR 2022.</h5>
        <p>Los esquipos estan preparados. Los fans ya estan en la calle y se siente la emocion, felicidad y el apoyo a cada país. </p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        class="slider-container"
        itemId={2}
        src='https://s3-sa-east-1.amazonaws.com/latamprod-sitemedia-red/uploads/cache/bottom_banner_full_1x/6148f1cb8034b_encabezado-opciones-acumulacion.jpg'
        alt='...'
      >
        <h5>Acumula puntos y segui ganando!</h5>
        <p>Descubre todas las alternativas para acumular puntos que te entrega Gift Club. 	
           Cuando disfrutás de los beneficios y pagás con tus tarjetas, también cumplís desafíos y sumás puntos.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        class="slider-container"
        itemId={3}
        src='https://artear-tn-prod.cdn.arcpublishing.com/resizer/OayR2WnnWxEbxwI-_klhTGhm1ws=/767x0/smart/arc-anglerfish-arc2-prod-artear.s3.amazonaws.com/public/VQZY3QENSBXYRZV5N3EGHU4Q7I.jpg'
        alt='...'
      >
        <h5>Messi te queremos</h5>
        <p>VAMOS ARGENTINA</p>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}