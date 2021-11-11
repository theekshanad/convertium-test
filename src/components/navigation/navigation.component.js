import NavigationView from './navigation.view'

const NavigationComponent = ({ isShowMenu, setIsShowMenu, setIsFirstSlide }) => (
    <NavigationView
        isShowMenu={isShowMenu}
        setIsShowMenu={setIsShowMenu}
        setIsFirstSlide={setIsFirstSlide}
    />
);

export default NavigationComponent;