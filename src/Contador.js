import React, { Component } from 'react'

class Contador extends Component{
  state = {
    video: {
      title: 'Super Video',
      likes: 0,
      dislike: 0,
    }
  }

add = () => {
  this.setState((state) => ({
    video: {
      ...state.video,
      likes: state.video.likes + 1
    }
  }))
}

subtraction = () => {
  this.setState((state) => ({
      video:{
      ...state.video,
      dislike: state.video.dislike - 1,
    }
  }))
}

  render(){
    return(
      <div>
        <h1>
          {this.state.video.title}
        </h1>
      <button onClick = {this.subtraction}>
        No me gusta: ({this.state.video.dislike})
      </button>
      <button onClick = {this.add}>
        Me gusta: ({this.state.video.likes})
      </button>
      </div>

    )
  }
}

const App = () => (
  <div>
    <Contador />
  </div>
)

export default App