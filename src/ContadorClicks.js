import React, { useState } from 'react'

function App() {
    // Declaración de una variable de estado que llamaremos "count"  const [count, setCount] = useState(0);
    const [clicks, setClicks] = useState(0)

    const incrementa = () => setClicks (clicks +1)
    const decrementa = () => setClicks (clicks -1)

    return (
      <div>
        <p>Aumentaste los clicks</p>
        <button onClick={incrementa}>
          Hace Click
        </button>
        <p>Decrementaste los clicks</p>
        <button onClick={decrementa}>
          Hace Click
        </button>
        <h1>{clicks}</h1>
      </div>
    );
  }

  export default App