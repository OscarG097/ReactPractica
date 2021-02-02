import React, {Component} from 'react'

const Joystick = () => (
    <span role='img' aria-label='joystick'>
      🎮
    </span>
  )

class App extends Component{
    state = {
        active: false
    }

    handleChange = (event) =>{
        this.setState({
            active: event.target.checked
        })
    }

    render(){
        const {active} = this.state
        return(
            <div>
                <form>
                    <input type ="checkbox" 
                    checked={active}
                    onChange={this.handleChange}/>
                </form>
                { active && (
                    <h1>
                        Hola, soy Juance
                    </h1>
                )} <Joystick />
            </div>
        )
    }


}

export default App