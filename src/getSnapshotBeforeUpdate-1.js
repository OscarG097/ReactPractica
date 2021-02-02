import React, {Component} from 'react'

class App extends Component{
    title = React.createRef()

    state = {
        text: 'Hola'
    }
 
     getSnapshotBeforeUpdate(prevProvs, prevState){ //Siempre que se llama este metodo tambien hay que agregar el componentDidUpdate porque es el paso siguiente
        console.log(this.title.current.innerText)
        return 'Hola desde getSnapshotBeforeUpdate'//Siempre que se llama a este metodo hay que retornar algo (null) sinó React indica error 
    }

    componentDidUpdate(prevProvs, prevState, snapshot){
        console.log(this.title.current.innerText)
        console.log(snapshot)
    }
    dispach = () =>{
        this.setState({
            text: 'Adios, cuidate'
        })
    }


    render(){
        return(
            <div>
                <h3>getSnapshotBeforeUpdate</h3>
                <h2 ref={this.title}>
                    {this.state.text}
                    </h2>
                <button onClick={this.dispach}>
                    Activar Dispach
                </button>
            </div>
        )
    }
}


export default App