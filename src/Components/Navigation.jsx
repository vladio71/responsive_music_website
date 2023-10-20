import React from 'react'
import {AiOutlinePlus} from "react-icons/ai";
import css from './Components.module.css'
import homeCss from '../styles/Home.module.css'
import {useEffect, useRef} from "react";

const Navigation = ({active}) => {
    return (
        <>
            <div>
                Push
            </div>
            <div>
                Note
            </div>
            <div>
                Link
            </div>
            <div>
                Shop
            </div>
            <div>
                Note
            </div>
            <div>
                Packs
            </div>
            <div>
                Help
            </div>
            <div style={{color: 'crimson'}}>
                More
                <AiOutlinePlus/>
            </div>
            <div className={`${homeCss.rightItems} ${active?css.cancelMargin:''}`}>

                <div className={`${!active?homeCss.blue:''}`}>
                    Try Live for free
                </div>
                <div>
                    Log in or register

                </div>
            </div>
        </>
    )
}


export const ColumnNavigation = ({animate, active}) => {

    const navigation = useRef(null)


    useEffect(() => {
        if (animate) {
            const node = navigation.current
            node.animate([
                {
                    top: '0',
                    color: 'white'
                },
                {
                    top: '-100vh',
                    color: 'black'
                }
            ], {
                duration: 300,
                iterations: 1,
            })
        }
    }, [animate])


    return (
        <>

            <div ref={navigation} className={css.NavigationInnerFlex}>


                <Navigation active={active}/>
            </div>
        </>

    )
}


export default Navigation