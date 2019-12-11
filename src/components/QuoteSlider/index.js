import React, { Component } from 'react'
import Slider from 'react-slick'

import { quotes } from '../../quotes'
import Quote from '../Quote';

import './style.scss'

class QuoteSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: true,
      appendDots: dots => (
        <div
          style={{
            backgroundColor: '#000',
            left: '0',
            padding: '10px',
          }}
        >
          <ul style={{ listStyleType: 'none', margin: '0px' }}>{dots}</ul>
        </div>
      )
    }
    return (
      <Slider {...settings}>
        {
          quotes.map((quote, i) => (
            <div key={i}>
              <Quote
                id={quote.id}
                text={quote.text}
                name={quote.name}
                company={quote.company}
                icon={quote.icon}
              />
            </div>
          ))
        }
      </Slider>
    )
  }
}

export default QuoteSlider