import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import quoteGraphics from '../../assets/quote-graphics.svg'

const Quote = ({ id, text, name, company }) => {
  return (
    <div className='single-quote' key={id}>
      <img className='quote' src={quoteGraphics} alt='quote-graphics' />
      <h3>{text}</h3>
      <FontAwesomeIcon icon='coffee' />
      <p>{name}</p>
      <p>{company}&trade;</p>
    </div>
  )
}

export default Quote
