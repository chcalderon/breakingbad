import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import axios from 'axios';

function Frase({frase}) {
  return (
    <div className="frase">
      <h1>{frase.quote}</h1>
      <p>- {frase.author}</p>
    </div>
  )
}

function App() {

  const [frase, obtenerFrase] = useState({});

  const consultaApi = async () => {
    const resultado = await axios('http://breaking-bad-quotes.herokuapp.com/v1/quotes');
    obtenerFrase(resultado.data[0]);
    // console.log(resultado.data[0]);
    //Agreegar el resultado de la api al state
  }

  //Consulta a Rest api
  useEffect(
    () => {
      consultaApi()
    }, []
  )

  console.log(frase);

  return (
    <div className="contenedor">
      <Frase 
        frase={frase}
      />
      <button
        onClick={consultaApi}
      >Otra</button>
    </div>
    )
}

export default App;