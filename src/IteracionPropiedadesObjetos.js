import React, { Component } from 'react'

class App extends Component {
  propiedades = {
    user: {
      name: 'JuanCR7',
      country: 'Argentina',
      twitter: '@Juance07',
      youtube: 'OscarG'
    }
  }

  render () {
    const { user } = this.propiedades
     const keys = Object.keys(user)//keys recibe un objeto y forma un array con las propiedades => [ 'name', 'country', 'twitter' ]

    return (
      <div>
        <h3>Iterando propiedades de objetos ⭐️</h3>
        <ul>
          {keys.map(llave => (
            <li>
              <strong>{ llave }:</strong> { user[llave] }
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App