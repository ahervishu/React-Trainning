import React, { useState } from 'react'

export default function ShowHide() {
    const [show, setShow] = useState(true);
    const clickHandler = () => {
        console.log("clicked")
        setShow(!show)
    }
    return (
        <div>
            <div style={{ display: show ? 'block' : 'none' }}>
                <img onClick={clickHandler} src="https://cdn.pixabay.com/photo/2017/06/11/02/05/wheat-2391348_640.jpg" alt="BigCo Inc. logo" />
            </div>
            <h4 onClick={clickHandler}>{show ? 'Click on Image to hide !' : 'Click to Show Image'}</h4>
        </div>
    )
}
