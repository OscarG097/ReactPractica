import React, {Component} from 'react'

class App extends Component{

    state = {
        cachito: [],
        cargando: f
    }

    componentDidMount(){
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(cachito => this.setState({cachito, cargando: false}))
        /*setTimeout(() => {
            this.setState({
            text: 'Hola Wachin'
            })
        }, 1000)

        setTimeout(() => {
            this.setState({
            text: 'Cómo estás?'
            })
        }, 2000)*/ //--> Actualiza el estado del state texto, cada 1 y 2 segundos 
    }

    render(){
        if(this.state.cargando) {
            return <h1>Cargando la información...</h1>
        }
        
        return(
            <div>
                <h1>Peticion HTTP</h1>
                <ul>
                    {this.state.cachito.map(user => (
                        <li key={user.id}>
                            {user.username} - 
                            {user.address.street}
                            {user.address.suite}
                            <a href={`http://${user.website}`}> - Sitio Web</a>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default App