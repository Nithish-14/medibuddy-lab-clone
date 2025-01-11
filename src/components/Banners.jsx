import React, {useContext} from 'react'

import { Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';


import { PageConfigContext } from './../services/PageConfig';


const Banners = () => {
  const {pageConfig} = useContext(PageConfigContext);

  return (
    <div className="banners-container">
         <Swiper
            modules={[Mousewheel]}
            autoplay={true}
            slidesPerView={'auto'}
            spaceBetween={25}
            pagination={{ clickable: true, type: 'bullets',bulletClass: '.swiper-pagination'}}
            scrollbar={{ draggable: true }}
            mousewheel={true}
            grabCursor={true}
            >
            {pageConfig[1].props.map(each => 
                <SwiperSlide key={each.order} className="swiper-slide-component">
                <a href={each.deeplink} target="_blank" className="banner-anchor">
                    <img src={each.bannerUrl} alt="banner" className="banner-image" />
                </a>
                </SwiperSlide>
            )}
            
         </Swiper>
    </div>
  )
}

export default Banners