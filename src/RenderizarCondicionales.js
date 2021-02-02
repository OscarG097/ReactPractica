import React, {Component} from 'react'

const Saludo = (propiedad) => {
    
    return (
        <div>
            <div>
                {propiedad.name && <strong>{propiedad.name}</strong>}{/* Verifica que esté la propiedad nombre y le da ese valor, en caso contrario omite esto*/}
            </div>
            {propiedad.saluda //Esto chequea que el saluda este en true, y verifica que hacer en cada caso (true/false)
            ?(
                <h1>Hola rey!</h1>
            )
        :(
            <p>
            No tenes saludo pete
            </p>
        )}
        </div>
    )
}

const App = () => (
    <div>

    

        <Saludo saluda name='Juance'/>
    </div>
)

export default App