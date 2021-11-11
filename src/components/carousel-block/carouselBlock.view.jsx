import React, { useRef } from "react";
import styles from './carouselBlock.module.scss'

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js'
import SwiperCore, { Navigation } from 'swiper'
import 'swiper/swiper.scss'
import 'swiper/modules/navigation/navigation.scss';
//images
import lgImg from '../../assets/images/img-1920x1200.jpg'
import mdImg from '../../assets/images/img-1280x800.jpg'
import smImg from '../../assets/images/img-800x368.jpg'

SwiperCore.use([Navigation]);

const CarouselBlockView = ({ data }) => {

    const swiperRef = React.useRef(null);

    return (
        <>
            <section className={styles.carouselWraper}>
                <div className={styles.bgImgWraper}>
                    <picture>
                        <source media="(min-width:1280px)" srcset={mdImg} />
                        <source media="(min-width:800px)" srcset={smImg} />
                        <img className={styles.bgImg} src={lgImg} alt="Earth Photo" />
                    </picture>
                </div>

                <div className={styles.carouselBlock}>
                    <div className={styles.title}>
                        <h2>{data.carouselTitle}</h2>
                    </div>
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={15}
                        centeredSlides={true}
                        grabCursor={true}
                        ref={swiperRef}
                    >

                        {data.carouselItems.map((item, index) =>
                            <SwiperSlide key={index} style={{ width: 175 }}>
                                <div className={styles.slide}>
                                    <h6>{item.title}</h6>
                                    <p>{item.description}</p>
                                </div>
                            </SwiperSlide>
                        )}

                    </Swiper>
                    {/* <div className={styles.prev} onClick={() => swiperRef.current?.swiper.slidePrev()}>
                        <i className={styles.arrowLeft}></i>
                    </div> */}
                    <div className={styles.next} onClick={() => swiperRef.current?.swiper.slideNext()} >
                        <i className={styles.arrowRight}></i>
                    </div>
                </div>
            </section>
        </>
    );
}
export default CarouselBlockView;