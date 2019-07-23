import React from 'react'
import quoteGraphics from '../../assets/quote-graphics.svg'

import './styles.scss'

const Quote = ({ id, text, name, company, icon }) => {
  return (
    <div className='single-quote' key={id}>
      <img className='quote' src={quoteGraphics} alt='quote-graphics' />
      <h3>{text}</h3>
      <img className='company-icon' alt='company-icon' src={icon} />
      <p>{name}</p>
      <p>{company}&trade;</p>
    </div>
  )
}

export default Quote
