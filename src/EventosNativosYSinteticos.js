import React, {Component} from 'react'


{/*NOTAS DE LA CLASE
Se usa camelcase
para llamar funciones hay que pasar la funcion entre llaves {}
Se pueden usar arrow functions, metodos de clases o inicializadores de propiedad*/}
class App extends Component {
    //Se fija que al dar click no se redireccione al href
    manejador = (e) => {
        e.preventDefault()

        console.log(e.nativeEvent)
    }

    render () {
        return(
            <div>
                {/*No se redirecciona porque esta el preventDefault*/}
                <a href="https://google.com"
                onClick = {this.manejador}>
                    Link a Google
                </a>
            </div>
        )
    }
}

export default App