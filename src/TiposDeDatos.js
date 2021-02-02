import React, { Component } from 'react'
import propTypes from 'prop-types'

class Profile extends Component {
  static propTypes = {
    name: propTypes.string.isRequired,//Indica que tipo de datos son aceptables para cada campo, se informa en la consola
    bio: propTypes.string,
    email: propTypes.string,
    age: propTypes.number
  }

  render () {
    const { name, bio, email } = this.props
    return (
      <div>
        <h1>{ name }</h1>
        <p>
          { bio }
        </p>
        <a href={`mailto:${email}`}>
          { email }
        </a>
      </div>
    )
  }
}

class App extends Component {
  render () {
    return (
      <div>
        <Profile
          name='Oscar Gimenez'
          bio='Soy Analista Funcional'
          email='my-email@mail.com'
        />
      </div>
    )
  }
}

export default App