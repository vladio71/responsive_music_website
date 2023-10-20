
import React from "react";
import {BiSolidDownArrow} from "react-icons/bi";


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
            <BiSolidDownArrow/>
        </span>
    )

}

export default Arrow