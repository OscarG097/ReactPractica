import React, { useState, useEffect } from 'react'

const Header = () => {
    const styles = {
        background: 'linear-gradient(20deg, #6813cb, #2575fc)',
        textAlign: 'center',
        borderRadius: '0.2em',
        color: '#FFF',
        padding: '0.3em',
        margin: '0.3em',
        fontSize: '14px'
    }

    return (
        <header style={styles}>
            <h1>
                Hook useState
          <span
                    role='img'
                    aria-label='hook emoji'
                >
                    ⚓
          </span>
            </h1>
        </header>
    )
}

const App = () => {
    const [mouseX, setMouseX] = useState(0)
    const [mouseY, setMouseY] = useState(0)

    const handleMove = (e) => {
        setMouseX(e.clientX)
        setMouseY(e.clientY)
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMove)

        return () => {
            window.removeEventListener('mousemove', handleMove)
            
        console.log(mouseX)
        console.log(mouseY)
        }
    })

    return (
        <div>
            <Header />
            <h1>Posicion de mouse:</h1>
            <h2> X: {mouseX} Y: {mouseY}</h2>
        </div>
    )
}

export default App