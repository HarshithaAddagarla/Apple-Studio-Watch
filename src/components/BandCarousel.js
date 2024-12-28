import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './BandCarousel.css';
import 'swiper/css';

const BandCarousel = ({ bands, selectedBand, onSelectBand }) => {
  return (
    <Swiper spaceBetween={10} slidesPerView={3}>
      {bands.map((band) => (
        <SwiperSlide key={band.id}>
          <div
            className={`band-item ${selectedBand === band.id ? 'selected' : ''}`}
            onClick={() => onSelectBand(band.id)}
          >
            <img src={band.image} alt={band.name} />
            <p>{band.name}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BandCarousel;
