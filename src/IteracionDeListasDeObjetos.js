import { render } from '@testing-library/react'
import react, {Component} from 'react'

class App extends Component{
    supermercado = {
        productos:[
            {
            id:1,
            nombre: 'Camisa a rayas',
            colores: ['#467367', '#05fd88', '#a706ee'],
            precio: 30
        },
        {
            id:2,
            nombre:'Pantalones',
            colores: ['#D35EFF', '#9956E8', '#876BFF', '#5662E8', '#5E96FF'],
            precio: 60            
        },
        {
            id:3,
            nombre: 'Taza',
            colores: ['#804342','#FFD2D1','#FF8785', '#806969'],
            precio: 50
        },
        {
            id:4,
            nombre: 'Medias',
            colores: ['#2544B3','#FF8A69','#5076FF', '#7FCC2B','#73B32E'],
            precio: 10
        },
        {
            id:5,
            nombre: 'Boxers',
            colores: ['#B32542','#FF6987','#FF4F73', '#14B32E', '#5EFF78'],
            precio: 20
        }]
    }

render () {
    return (
      <div>
        <h3>Iterando listas de objetos ⭐️</h3>
        <div>
          {this.supermercado.productos.map((product) => (
              <div>
                $ { product.precio } - { product.nombre }
                <div>
                  {product.colores.map((color) => (
                      <span
                        style={{
                          width: '13px',
                          height: '13px',
                          borderRadius: '0.1em',
                          border: '1px solid black ',
                          display: 'inline-block',
                          margin: '0.1em',
                          background: color
                        }}
                      ></span>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    )
  }
}

export default App