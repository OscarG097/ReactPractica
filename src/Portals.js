import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class PortalModal extends Component {

  render () {

    if (!this.props.visible) {
      return null
    }

    const styles = {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: '0',
      left: '0',
      background: 'linear-gradient(to top right, #057b13, #5faf68',
      opacity: '0.9',
      color: '#FFF'
    }
  
    return ReactDOM.createPortal((//Se indica lo que se quiere montar en el portal
      <div style={styles}>
        { this.props.children }
      </div>
    ), document.getElementById('modal-root')) //Se crea el portal por el ID que se creo en index.html
  }
}

class App extends Component {
  state = {
    visible: false,
    num: 0
  }

  componentDidMount () {
    setInterval(() => { //Contador de segundos, cada ves que pasa uin segundo aumenta el contador a uno
      this.setState(state => ({
        ...state,
        num: state.num + 1
      }))
    }, 1000)
  }

  mostrar = () => {
    this.setState({ visible: true })
  }

  cerrar = () => {
    this.setState({ visible: false })
  }

  render () {
    return (
      <div>
        <button onClick={this.mostrar}>
          Mostrar
        </button>
        <PortalModal visible={this.state.visible}>
          Que onda ñero 😲 { this.state.num }
          <button onClick={this.cerrar}>
            Cerrar
          </button>
        </PortalModal>
      </div>
    )
  }
}

export default App