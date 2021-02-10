import React, { Component } from 'react'

const Header = () => {
  const subtitleStyles = {
    fontWeight: 'bold'
  }

  const headerStyles  = {
    margin: '0.6em',
    borderRadius: '0.3em',
    border: '1px solid #d2d2d2',
    padding: '2em 0.4em',
    fontFamily: 'monospace',
    fontSize: '17px',
    textAlign: 'center'
  }

  return (
    <header style={headerStyles}>
      <div>
        ( Hijo a Padre )
      </div>
      <div style={subtitleStyles}>
        Render Props      
        <span role='img' aria-label='mountain'>
           🏞️
        </span>
      </div>
    </header>
  )
}

const boxStyles = {
  padding: '0.5em',
  margin: ' 0.5em',
  border: '1px solid gray',
  borderRadius: '0.3em',
  textAlign: 'center'
}

class List extends Component {
  render () {
    const { list, render } = this.props

    return (
      <div>
        {list.map((frutas, index) => {

          if (render) {
            return render(frutas, index)
          }

          return (
            <li key={frutas.name}>
              { frutas.name }
            </li>
          )
        })}
      </div>
    )
  }
}

class App extends Component {
  state = {
    fruits: [
      { name: 'Fresa', price: 22 },
      { name: 'Mango', price: 18 },
      { name: 'Sandia', price: 24 },
      { name: 'Manzana', price: 12 },
    ]
  }

  render () {
    const { fruits } = this.state
    return (
      <div style={boxStyles}>
        <Header />
        <List
          list={fruits}
          render={(datos, index) => (
              <div>
                {datos.name} - ${datos.price} - {index}
              </div>
          )}
        />
      </div>
    )
  }
}

export default App
