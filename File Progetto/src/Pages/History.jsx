import React from 'react';
import Slideshow from '../Components/Slideshow';
import Tabella from '../Components/Tabella';
import images from '../Js/images';
import '../Styles/History.css'

const History = () => {
  return (
  
    // <div style={{
      
    //   backgroundImage: 'url(ping-pong.gif)',
    //   backgroundRepeat:'no-repeat',
    //   backgroundAttachment: 'fixed',
    //   backgroundSize: 'cover'
    // }}>
    <div>
    <h1 className='titolo'>History</h1>
    <Tabella></Tabella>
    
    <p className = 'sottotesto'>A febbraio l'azienda Sorint è venuta nella nostra scuola con l'intento di farci seguire un corso di 6 ore sulla libreria React, seguiti dall'esperta Elisa Mazzeri. Ogni gruppo aveva il compito di realizzare un sito web di presentazione del proprio progetto utilizzando React 
    e le conoscenze acquisite nelle ore del corso, ed è così che è nato questo portale.</p>
    </div>
  
  );
};

export default History; 