import React, {Component} from 'react'

class Pelis extends Component{
    state = {
        movie: {},
        isFetching: false         
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        this.setState({isFetching: true})
        const title = event.target[0].value
        const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=bc31501a'
        fetch(url + '&t=' + title)
            .then(res => res.json())
            .then(movie => this.setState({movie, isFetching: false}))
            
    }

    render(){

        const {movie, isFetching} = this.state

        return(
            <div>
                <h1>
                    Buscador de peliculas
                </h1>
                <form onSubmit={this.handleSubmit}>
                <input type="text" 
                placeholder="Buscá la Película" />

                <button>
                    Buscar
                </button>
                </form>
                {isFetching && (
                    <h2>Buscando...</h2>
                )}
                {movie.Title && !isFetching &&<div>
                    <h1>
                        {movie.Title}
                    </h1>
                    <img src={movie.Poster} alt='Poster' 
                    style = {{width: '150px'}}/>
                    <p>
                       { movie.Plot}
                    </p>
                </div>}
            </div>
        )
    }
}


export default Pelis