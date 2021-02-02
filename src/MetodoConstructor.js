import React, {Component} from 'react'


class Contador extends Component{
    title = React.createRef()
    state = {
        num: this.props.num,
        mensaje: 'Hola Niños'
    }

    agregar = () => {
        this.setState(state => ({
            num: state.num + 1
        }))
    }

    borrar = () => {
        this.setState(state => ({
            num: 0
        }))
    }

    render(){
        return(
            <div>
                <button onClick={this.agregar}>
                    Click({this.state.num})
                </button>
                <button onClick={this.borrar}
                >
                Reiniciar
                </button>
            </div>
        )
    }
}

class MetodoConstructor extends Component{
    render(){
        return(
            <div>
                <h1>
                    Método Constructor
                </h1>
               <Contador num={456 }/>
               <br/>
               <Contador num= {123}/>
            </div>
        )
    }
}


export default MetodoConstructor
