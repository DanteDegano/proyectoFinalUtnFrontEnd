import React from 'react'
import { useParams } from 'react-router-dom'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import Header from '../../components/header/Header'

const DetailPage = () => {
    const {id} = useParams()
    const {getProductById, addProductCart} = useCustomContext()
    const productDetail = getProductById(id)
  return (
    <div>
        <Header />
        <div className='container'>
            <div className='product_detail'>
              <div className='product_detail_left'>
                <img src={productDetail.imagen} alt= {productDetail.nombre} />
              </div>
              <div className='productDetailRight'>
                <h1>{productDetail.nombre}</h1>
                <h2>{productDetail.precio}</h2>
                <p>Descripcion: {productDetail.descripcion}</p>
                <div><button onClick={() => addProductCart(productDetail.id)}>Comprar</button></div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default DetailPage