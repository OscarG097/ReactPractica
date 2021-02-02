import React, {Component} from 'react'

const lista = (
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>
)
//En esta clase -74- revisar si hay dudas
class MetodoRender extends Component{
    render(){
        return(
            <div>
                <h1>Lista: </h1>
                {lista}
            </div>
        )
    }
}

export default MetodoRender