import React from 'react';
import { Helmet } from 'react-helmet'
import './App.css';
import QuoteSlider from '../QuoteSlider';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel='stylesheet' href='https://use.typekit.net/izy8aoj.css' />
      </Helmet>
      <QuoteSlider />
    </div>
  );
}

export default App;
