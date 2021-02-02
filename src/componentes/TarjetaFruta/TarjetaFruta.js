import { prettyDOM } from '@testing-library/react'
import React from 'react'
//import './TarjetaFruta.css'
import styles from './TarjetaFruta.module.css'

/*MANEJANDO Object.assign({} --> Clona Objetos*/
/*const perfil = {
  nombre: 'Oscar',
  info: {
    direccion: 'holamundo...'
  }
}

const region = {
  pais: 'Argentina',
  info:{
    coordenadas: 'cordenadas..'
  }
}

const social = {
  insta: '@OscarG',
  nombre: 'wachin'
}


const resultado = Object.assign({},
  perfil,
  region,
  social,
  {
    info: Object.assign(
      {},
      perfil.info,
      region.info
    )
  }
  )*/

  /*MANEJANDO EL OPERADOR SPREAD 
  /*const perfil = {
    nombre: 'Oscar',
    info: {
      direccion: 'holamundo...'
    }
  }
  
  const region = {
    pais: 'Argentina',
    info:{
      coordenadas: 'cordenadas..'
    }
  }
  
  const social = {
    insta: '@OscarG',
    nombre: 'wachin'
  }

  const resultado = {
    ...region,
    ...perfil,
    ...social,
  }

  console.log(resultado)*/

  /*MANEJANDO EL OPERADOR SPREAD PERO CON ARRAYS*/
  /*const frutasVerdes = [
    'kiwi',
    'uva',
    'limon'
  ]

  const frutasRojas = [
    'manzana',
    'fresa',
    'sandia'
  ]

  const frutas = [
    ...frutasVerdes,
    ...frutasRojas,
    'pera'
  ]

  console.log(frutas)*/

class TarjetaFruta extends React.Component {
    state={
      cantidad: 0,
    }
  
  borra = () => this.setState({cantidad: 0})
  
  suma= () => 
      this.setState ({cantidad: this.state.cantidad + 1})
  
  resta= () => 
    this.setState ({cantidad: this.state.cantidad - 1})

    render () {
      const hasItems = this.state.cantidad > 0
      const activeClass = hasItems ? styles['card-active'] : ''
      const clases = styles.card + ' ' + activeClass

      return ( 
        <div className={clases}>
        <h3>{this.props.name}</h3>
        <div>Cantidad: {this.state.cantidad}</div>
        <div>Total: ${this.props.price * this.state.cantidad}</div>
        <button onClick={this.suma}>
            Agregar       
          </button>
          <button onClick={this.resta}>
            Resta
          </button>
          <button onClick={this.borra}>Borrador</button>
        <hr/>
        <p>${this.props.price}</p>
      </div>
     )
    }
  }

  export default TarjetaFruta
  