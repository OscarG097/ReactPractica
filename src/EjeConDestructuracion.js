/*ESTE CODIGO LO USO PARA VER LA CONSOLA CON destructuracion.js*/
import React, { Component } from 'react'

const Title = ({ uiColor, children }) => {
  const styles = {
    background: uiColor,
    padding: '0.3em',
    color: '#FFF',
    borderRadius: '0.3em',
    textAlign: 'center',
    fontSize: '50px'
  }

  return (
    <h1 style={styles}>
      { children }
    </h1>
  )
}


class App extends Component {
  state = {
    uiColor: 'green'
  }

  render () {
    const { uiColor } = this.state
    return (
      <div>
        <Title
          uiColor={uiColor}
        >
          Oscar <em>Gimenez</em>
        </Title>
      </div>
    )
  }
}

export default App