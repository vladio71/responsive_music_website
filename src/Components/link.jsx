import React from 'react'
import {IoIosArrowForward} from "react-icons/io";
import css from '../styles/Home.module.css'

const FooterLink = ({text}) => {

    const style = {
        position: 'absolute',
        top: '1vh',
        right: '-1rem',
        fontSize: '.8rem'

    }

    return (

        <div style={
            {
                position: 'relative',
                cursor: 'pointer',
                width: 'fit-content',
            }}>
            <span>
                {text}
            </span>
            <span style={style}>
                <IoIosArrowForward/>
            </span>

        </div>
    )
}

export default FooterLink