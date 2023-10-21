import React from 'react'
import {useState} from "react";
import css from './Components.module.css'
import Arrow from "./Arrow";


const Select = ({options}) => {


    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState(options[0])

    // const styleBase = {
    //     minWidth: '200px',
    //     minHeight: 'fit-content',
    //     // padding: '.2rem 1rem',
    //     background: '#eee',
    //     position: 'relative',
    //     userSelect: 'none'
    // }
    // const styleBtn = {}
    // const styleDropdown = {
    //     position: 'absolute',
    //     top: '100%',
    //     background: '#eee',
    //     width: '100%'
    // }
    // const option = {
    //     minHeight: 'fit-content',
    //     borderTop: '1px solid black',
    //     width: '100%'
    //
    // }
    // const arrow = {
    //     position: 'absolute',
    //     top: '35%',
    //     fontSize: '.4rem',
    //     right: '.3rem',
    //     transform: `${open? 'rotate(180deg)' : ''}`
    // }

    function handleClick() {
        setOpen(!open)
    }

    function handleSelect(e, el) {
        e.preventDefault()
        setSelected(el)
        setOpen(false)
    }


    return (

        <div  className={css.styleBase} onClick={handleClick}>
            <span>
            {selected}
            </span>
            {/*<span style={arrow}>*/}
            {/*<BiSolidDownArrow/>*/}
            {/*</span>*/}

            <Arrow open={open}/>
            {open &&
            <div  className={css.styleDropdown}>
                {options.map(el => {
                    return <div className={css.option} onClick={e => handleSelect(e, el)}>
                        {el}
                    </div>
                })}

            </div>
            }


        </div>
    )


}


export default Select