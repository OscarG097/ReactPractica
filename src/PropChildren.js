import React, { Component } from 'react'

const Title = (props) => {
  const styles = {
    background: props.uiColor,
    padding: '0.3em',
    color: '#FFF',
    borderRadius: '0.3em',
    textAlign: 'center',
    fontSize: '50px'
  }

  return (
    <h1 style={styles}>
      { props.children }
    </h1>
  )
}

class App extends Component {
  state = {
    uiColor: 'green'
  }
  render () {
    return (
      <div>
        <Title
          uiColor={this.state.uiColor}
        >
          Oscar <em>Gimenez</em>
        </Title> {/*Para que funcione tiene que estar la etiqueta completa del componente*/}
      </div>
    )
  }
}

export default App