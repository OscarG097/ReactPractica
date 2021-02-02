import React, { Component } from 'react'
//Este archivo se usó para la clase 62-63

const Joystick = () => (
  <span role='img' aria-label='joystick'>
    🎮
  </span>
)

class App extends Component {
  state = {
    //tech: 'Angular' Se usa para seleccion unica
    techs: ['React']//Si se le pone un valor queda como default y luego cambia
  }

  handleChange = (event) => {
      const techs = Array.from(
        event.target.selectedOptions,
        (option) => option.value
      )
      this.setState({techs})
    //this.setState({ SE USAN PARA SELECCION UNICA
      //tech: event.target.value
    //})
  }

  render () {
    return (
      <div>
        <h1>
          Etiqueta Select <Joystick />
          {this.state.techs}
        </h1>
        <form>
          <select 
          value={this.state.techs} 
          onChange={this.handleChange}
          multiple={true}
          >
            <option value="Angular">Angular</option>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
            <option value="Vanilla">Vanilla</option>
          </select>
        </form>
        <ul>
            {this.state.techs.map(tech => (
                <li key={tech}>
                    {tech}
                </li>
            ))}
        </ul>
      </div>
    )
  }
}

export default App