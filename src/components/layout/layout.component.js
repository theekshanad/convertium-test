import React, { useState, useEffect } from "react"
import LayoutView from "./layout.view"
import data from '../../data/data.json'

const LayoutComponent = () => {
    const [isFirstSlide, setIsFirstSlide] = useState(true)
    const [isShowMenu, setIsShowMenu] = useState(false)


    //Close side navigation
    useEffect(() => {
        setIsShowMenu(false)
    }, [isFirstSlide])

    return (
        <>
            <LayoutView
                isFirstSlide={isFirstSlide}
                setIsFirstSlide={setIsFirstSlide}
                isShowMenu={isShowMenu}
                setIsShowMenu={setIsShowMenu}
                data={data}
            />
        </>
    );
}

export default LayoutComponent;