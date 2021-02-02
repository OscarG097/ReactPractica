import React, { Component } from 'react'

const styles = {
    height: '200px',
    background: 'green',
    padding: '1em',
    boxSizing: 'border-box'
}
class App extends Component{
    state = {
        x: 0,
        y: 0
    }


    manejador = (event) => {
        this.setState({
            x:event.clientX,
            y:event.clientY,
        })
    }

    render(){
        return(
            <div style={styles}
            onMouseMove={this.manejador}>
                {/*<button
                //onMouseDown={this.manejador}>Se preciona sin soltar y ya ejecuta la funcion
                //onClick={this.manejador}>Click normal y se ejecuta la funcion
                //onMouseUp={this.manejador}>Se ejecuta cuando se suelta
                //onDoubleClick={this.manejador}>Se ejecuta cuando se jace doble click
                    Disparador
                </button>*/}
                <div>
                    x:{this.state.x}
                </div>
                <div>
                    y:{this.state.y}
                </div>
            </div>
        )
    }
}

export default App
