import React, { Component } from 'react'

class UserDetails extends Component{
    state= {
        user:{},
        isFecthing: false
    }

    componentDidMount(){
        this.fetchData()
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.userId !== this.props.userId){
            this.fetchData()
        }
    }

    fetchData = () => {
        this.setState({
            isFecthing: true
        })
        const URL = 'http://jsonplaceholder.typicode.com/users/' + this.props.userId
        fetch(URL)
        .then(res => res.json())
        .then(user => this.setState ({user, isFecthing: false}))
    }

    render(){
        return(
            <div>
                <h2>User Details</h2>
                { this.state.isFecthing
                ? <h1>Cargando...</h1>
                :(
                <pre>
                    {JSON.stringify(this.state.user, null, 4)}
                </pre>)
                }
            </div>
        )
    }
}

class App extends Component{
    state = {
        id: 1
    }

    aumentar = () => {
        this.setState(state => ({
            id: state.id + 1
        }))
    }

    render(){

        const {id} = this.state

        return(
            <div>
                <h1>componentDidUpdate</h1>
                <h2>ID: {id}</h2>
                <button onClick = {this.aumentar}>
                    Id +1
                </button>
                <UserDetails 
                userId={id}/>
            </div>            
        )
    }
}

export default App