import React, {Component} from 'react'
import axios from 'axios'

class Pelis extends Component{
    state = {
        movie: {},
        isFetching: false         
    }

    handleSubmit = async (event) =>{
        event.preventDefault()
        this.setState({isFetching: true})
        const title = event.target[0].value
        const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=bc31501a'

        const res = await fetch (url + '&t=' +title)
        const movie = await res.json()
        
        this.setState({
            movie,
            isFetching: false
        })

        /*const res = await axios.get(url, {
                    params: {
                    t: title
                    }
                })
        this.setState({
              movie: res.data,
              isFetching: false
                })*/
            
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