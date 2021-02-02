import Reatc, {Component} from 'react'
//Este archivo se utilizó para las clases 59-60

class ImputControlado extends Component{
    state = {
        text: '',
        tieneError: false,
        color: '#E8E8E8'
    }

    actualizar = (event) => {
        const text= event.target.value
        let color = 'green' //Cambia, no es constante
        if (text.trim() === ''){//Trim quita espacios al principio y al final de la cadena
            color = 'E8E8E8'
        }

        if (text.trim() !== '' && text.trim().length <= 5){
            color = 'red'
        }


        this.setState({text, color})

        //Propagando datos al padre
        this.props.onChange(this.props.name, text)
    }

    render(){
        const styles = {
            border: `1px solid ${this.state.color}`,
            padding: '0.3em 0.6em',
            outline: 'none'
        }
        return(
            <input type="text" 
            value={this.state.text}
            onChange={this.actualizar}
            style={styles}
            placeholder={this.props.placeholder}/>
        )
    }
}


class App extends Component{

    state = {
        name: '',
        email: ''
    }
    actualizar = (name, text) => {
        this.setState({
            [name]: text
        })
    }

    render(){
        return(
            <div>
                <h1>Inputs Controlados</h1>
                <div>
                    <ImputControlado
                    onChange={this.actualizar} 
                    placeholder='Nombre Completo'
                    name='name'/>
                </div>
                <div>
                    <ImputControlado
                    onChange={this.actualizar} 
                    placeholder='Tu Email'
                    name='email'/>
                </div>
                <h2>
                    Nombre: {this.state.name}
                </h2>
                <h2>
                    Email: {this.state.email}
                </h2>
            </div>
        )
    }
}

export default App