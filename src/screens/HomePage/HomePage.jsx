import React from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { ProductCard } from '../../components'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

const HomePage = () => {
    const {products} = useCustomContext()
  return (
    <div>
        <Header />
        <div className='container'>
          <main>
            <div className='producto_lista'>
                {products.map(producto  => (
                <ProductCard producto={producto} key={producto.id}/>
                ))}
            </div>
          </main>
          <aside>

          </aside>
        </div>
        <Footer />
    </div>
  )
}

export default HomePage