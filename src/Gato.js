import React, { Component } from 'react'

const Gato = (props) => (
    <div>
        <h1>Gato 🐈</h1>
        <pre>
            {JSON.stringify(props, null, 4)}
        </pre>
    </div>
)
class App extends Component {
    state = {
        fuerza: 100,
        vidasRestantes: 7
    }

    render (){
        const otherDates = {
            raza: 'dios del olimpo',
            hobbie: 'trepar el techo'

        }
        return (
            <div>
                <Gato
                    name = 'Thorcito'
                    age = '2 meses'
                    {...otherDates}
                    dueño = 'Juance'
                    {...this.state}
                    />
            </div>
        )
    }
}

export default App