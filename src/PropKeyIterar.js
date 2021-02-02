import React, { Component } from 'react'

const users = [
  { id: 1, name: 'Oscar Gimenez', country: 'Argentina'},
  { id: 2, name: 'Leanne Graham', country: 'USA'},
  { id: 3, name: 'Ervin Howell', country: 'Colombia'},
  { id: 4, name: 'Rodrigo Fernandez', country: 'Peru'},
  { id: 5, name: 'Alfredo Bauch', country: 'Guatemala'},
  { id: 6, name: 'Fernanda Valencia', country: 'España'}
]

class App extends Component {
  render () {
    return (
      <div>
        <h1>Iterando</h1>
        <ul>
          {users.map((user, id) => ( //Es necesario crear una lista con cada ID unico para que no haya problemas de rendimiento
            <li key={id}>
              { user.name } - Tiene ID ➡ { user.id }
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App