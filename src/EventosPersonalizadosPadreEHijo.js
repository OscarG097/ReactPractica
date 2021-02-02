import React, {Component} from 'react'
import './global.css'

class Hijo extends Component{

    manejadorClick = () => {
        this.props.cuandoClick('Juance Gamer 🎮')//Pasa el valor a la props del padre para que lo use en el name
    }

    render(){
        return (
        <div className='box green'>
            <h2>Hijo</h2>
            <button
                onClick={this.manejadorClick}
                >
                    Saluda
            </button>
        </div>
        )
    }
}
class App extends Component{

    state = {
        name: ''
    }
    manejador = (name) => {
        this.setState({ name })
    }

    render () {
        return(
            <div className='box red'>
                <Hijo
                cuandoClick={this.manejador}
                />       
                <h1>
                    Nombre: {this.state.name}
                </h1>
            </div>
        )
    }
}

export default App