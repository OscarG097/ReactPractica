import React, {Component} from 'react'

class Timer extends Component{

    state = {
        time: 0,
        isPlaying: true
    }

    tick = null

    componentDidMount (){ //Es para ejecutar el programa
        this.play()
    }

    componentWillUnmount(){
        //Limpiar Intervals
        clearInterval(this.tick)
        this.props.onDestroy()
    }

    play = () => {
        this.setState({isPlaying: true})
        this.tick = setInterval(() => {
            this.setState(state => ({
                time: state.time + 1 
            }))
        }, 1000)
    }

    pause = () => {
        this.setState({isPlaying: false})
        clearInterval(this.tick)
    }

    toggle = () => {
        if (this.state.isPlaying){
            this.pause()
        }else{
            this.play()
        }
    }

    render(){
        const {time, isPlaying} = this.state 

        return(
            <div>
                <h1>{time}</h1>
                <button onClick={this.toggle}>
                    {isPlaying ? 'pause' : 'play'}
                </button>
            </div>
        )
    }

}

class App extends Component {
    state = {
        mostrar: true,
        message: ''
    }

    desmontar = () => {
        this.setState({mostrar: false})
    }

    handleDestroy = () => {
        this.setState({
            message: 'El contador fue destruido'
        })
    }

    render(){
        return(
            <div>
                <h3>{this.state.message}</h3>
                <button onClick={this.desmontar}>
                    Desmontar
                </button>
                {this.state.mostrar && 
                <Timer onDestroy={this.handleDestroy}/>}
            </div>
        )
    }
}

export default App