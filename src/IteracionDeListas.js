import react, {Component} from 'react'

const frutas = [
    'fresa',
    'manzana',
    'sandia',
    'kiwi',
    'durazno',
    'ananá',
    'sandia'
]

const numeros = [
    1,
    2,
    3,
    4,
    0
]

class App extends Component{
    render(){
        return(
            <div>
                <ul>
                    {numeros.map((numero) =>{
                        return(
                            <li>
                                {numero - 1}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}


export default App