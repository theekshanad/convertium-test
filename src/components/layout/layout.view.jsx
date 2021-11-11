import VideoBlockComponent from '../video-block/videoBlock.component'
import CarouselBlockComponen from '../carousel-block/carouselBlock.component'
import NavigationComponent from '../navigation/navigation.component'
import styles from './layout.module.scss'

const LayoutView = ({ isFirstSlide, setIsFirstSlide, isShowMenu, setIsShowMenu, data }) => {
    //console.log(data);
    return (
        <>
            <main>
                <div onClick={() => setIsFirstSlide(true)} className={isFirstSlide ? styles.logoWraperDark : styles.logoWraperLight}> LOGO </div>

                {
                    isFirstSlide ?
                        <VideoBlockComponent setIsFirstSlide={setIsFirstSlide} data={data} />
                        :
                        <>
                            <div className={styles.link}>
                                <a target="_blank" href={data.topLink.url}>{data.topLink.text}</a>
                            </div>
                            <CarouselBlockComponen data={data} />
                        </>
                }

                <NavigationComponent
                    setIsFirstSlide={setIsFirstSlide}
                    isShowMenu={isShowMenu}
                    setIsShowMenu={setIsShowMenu}
                />
            </main>
        </>
    )
}

export default LayoutView;