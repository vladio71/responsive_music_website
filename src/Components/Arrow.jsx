
import React from "react";


const Arrow = ({open}) => {


    const arrow = {
        position: 'absolute',
        top: '35%',
        fontSize: '.4rem',
        right: '.3rem',
        transform: `${open? 'rotate(180deg)' : ''}`
    }

    return (

        <span style={arrow}>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 1024 1024"><path fill="currentColor" d="M831.872 340.864L512 652.672L192.128 340.864a30.592 30.592 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.592 30.592 0 0 0-42.752 0z"/></svg>
        </span>
    )

}

export default Arrow