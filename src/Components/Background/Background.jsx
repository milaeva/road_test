import React from 'react'
import s from './Background.module.css'
import img from '../.././img/222.png'

const Background = () => {
  return(
    <div className={s.header}>
      <div className={s.overlay}>
        <img src={img} alt="bg"/>
      </div>
    </div>
  )
}

export default Background;
