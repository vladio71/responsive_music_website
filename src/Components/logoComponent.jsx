import React from 'react'
import css from "../styles/Home.module.css";

const LogoComponent = ({isModalActive})=>{



    const style={
        width: '30px',
        height: '4px',
        background:  isModalActive? 'white' : 'black'
    }

    return(
        <div style={{display: 'flex', zIndex: 10,}}>
            <div className={css.logo} style={{transform: 'rotate(90deg)'}}>
                <div style={style}/>
                <div style={style}/>
                 <div style={style}/>
                <div style={style}/>
            </div>
            <div className={css.logo}>
                 <div style={style}/>
                <div style={style}/>
                <div style={style}/>
                <div style={style}/>
            </div>
        </div>
    )
}

export default LogoComponent