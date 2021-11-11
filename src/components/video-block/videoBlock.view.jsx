import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js'
import styles from './videoBlock.module.scss'
import 'swiper/swiper.scss'
import 'swiper/modules/autoplay/autoplay.scss';

SwiperCore.use([Autoplay]);

const VideoBlockView = ({ setIsFirstSlide, data }) => (
    <section className={styles.videoWraper}>
        <video playsinline autoPlay muted loop className={styles.video}>
            <source src={data.videoUrl} type="video/mp4" />
        </video>
        <div className={styles.overlay}>
            <Swiper
                centeredSlides={true}
                autoplay={{
                    "delay": 3000,
                    "disableOnInteraction": false
                }}
                navigation={false}>

                {data.animateText.map((item, index) =>
                    <SwiperSlide key={index}>
                        <div className={styles.slide}>
                            <div className={styles.content}>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
            <div onClick={() => setIsFirstSlide(false)} className={styles.arrowWrapper}>
                <i className={styles.arrowDown}></i>
            </div>
        </div>
    </section>
);

export default VideoBlockView;