import React from 'react'
import './_ProductCard.scss'
import { Link } from 'react-router-dom'

const ProductCard = ({producto}) => {
  return (
    <div className='producto'>
            <Link to={'/detail/' + producto.id}>
              <img src={producto.imagen} alt= {producto.nombre} />
              <div className='producto_categoria'><b>Categoria:</b> {producto.categoria}</div>
              <h2 className='producto_nombre'>Producto: {producto.nombre}</h2>
              <h3 className='producto_precio'>Precio: ${producto.precio}</h3>
            </Link>
    </div>
  )
}

export default ProductCard