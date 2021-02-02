import React from 'react'
import TarjetaFruta from './componentes/TarjetaFruta/'

var frutaExotica = 'Fruta Del Dragón'
const App = () => (
    <div>
      <TarjetaFruta name='Sandia' price={3.00} />
      <TarjetaFruta name='Naranja' price={4.00}/>
      <TarjetaFruta name='Kiwi' price={52.00}/>
      <TarjetaFruta name={`${frutaExotica}`} price={10.00}/>
    </div>
  
  )

  

  export default App