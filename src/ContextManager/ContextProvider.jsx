import React,{createContext, useContext, useState} from 'react'

const Context = createContext()

const ContextProvider = ({children}) => {
    const products =[
        {
            nombre:'MacBook Air',
            precio: 1000,
            imagen: 'https://cdn.shopify.com/s/files/1/0183/5769/products/Macbook-Air_0001_438589-Product-0-I-637205826045105601_800x800_0f7a096f-d491-4eef-b0ac-849937b8b7dd.png?v=1618283708',
            categoria: 'Laptop',
            id: 1
        },
        {
          nombre:'MacBook Pro',
          precio: 2000,
          imagen: 'https://cdn.shopify.com/s/files/1/0183/5769/products/Macbook-Air_0001_438589-Product-0-I-637205826045105601_800x800_0f7a096f-d491-4eef-b0ac-849937b8b7dd.png?v=1618283708',
          categoria: 'Laptop',
          id: 2
        },
        {
          nombre:'MacBook Air 2018',
          precio: 700,
          imagen: 'https://cdn.shopify.com/s/files/1/0183/5769/products/Macbook-Air_0001_438589-Product-0-I-637205826045105601_800x800_0f7a096f-d491-4eef-b0ac-849937b8b7dd.png?v=1618283708',
          categoria: 'Laptop',
          id: 3
        },
        {
          nombre:'MacBook Air',
          precio: 1000,
          imagen: 'https://cdn.shopify.com/s/files/1/0183/5769/products/Macbook-Air_0001_438589-Product-0-I-637205826045105601_800x800_0f7a096f-d491-4eef-b0ac-849937b8b7dd.png?v=1618283708',
          categoria: 'Laptop',
          id: 4
        },
        {
            nombre:'MacBook Pro',
            precio: 2000,
            imagen: 'https://cdn.shopify.com/s/files/1/0183/5769/products/Macbook-Air_0001_438589-Product-0-I-637205826045105601_800x800_0f7a096f-d491-4eef-b0ac-849937b8b7dd.png?v=1618283708',
            categoria: 'Laptop',
            id: 5
        },
        {
            nombre:'MacBook Air 2018',
            precio: 700,
            imagen: 'https://cdn.shopify.com/s/files/1/0183/5769/products/Macbook-Air_0001_438589-Product-0-I-637205826045105601_800x800_0f7a096f-d491-4eef-b0ac-849937b8b7dd.png?v=1618283708',
            categoria: 'Laptop',
            id: 6
        },
        {
            nombre:'MacBook Air',
            precio: 1000,
            imagen: 'https://cdn.shopify.com/s/files/1/0183/5769/products/Macbook-Air_0001_438589-Product-0-I-637205826045105601_800x800_0f7a096f-d491-4eef-b0ac-849937b8b7dd.png?v=1618283708',
            categoria: 'Laptop',
            id: 7
        },
        {
            nombre:'MacBook Pro',
            precio: 2000,
            imagen: 'https://cdn.shopify.com/s/files/1/0183/5769/products/Macbook-Air_0001_438589-Product-0-I-637205826045105601_800x800_0f7a096f-d491-4eef-b0ac-849937b8b7dd.png?v=1618283708',
            categoria: 'Laptop',
            id: 8
        },
        {
            nombre:'MacBook Air 2018',
            precio: 700,
            imagen: 'https://cdn.shopify.com/s/files/1/0183/5769/products/Macbook-Air_0001_438589-Product-0-I-637205826045105601_800x800_0f7a096f-d491-4eef-b0ac-849937b8b7dd.png?v=1618283708',
            categoria: 'Laptop',
            id: 9
        },
        {
            nombre:'MacBook Air',
            precio: 1000,
            imagen: 'https://cdn.shopify.com/s/files/1/0183/5769/products/Macbook-Air_0001_438589-Product-0-I-637205826045105601_800x800_0f7a096f-d491-4eef-b0ac-849937b8b7dd.png?v=1618283708',
            categoria: 'Laptop',
            id: 10
        },
        {
        nombre:'MacBook Pro',
        precio: 2000,
        imagen: 'https://cdn.shopify.com/s/files/1/0183/5769/products/Macbook-Air_0001_438589-Product-0-I-637205826045105601_800x800_0f7a096f-d491-4eef-b0ac-849937b8b7dd.png?v=1618283708',
        categoria: 'Laptop',
        id: 11
        },
        {
        nombre:'MacBook Air 2018',
        precio: 700,
        imagen: 'https://cdn.shopify.com/s/files/1/0183/5769/products/Macbook-Air_0001_438589-Product-0-I-637205826045105601_800x800_0f7a096f-d491-4eef-b0ac-849937b8b7dd.png?v=1618283708',
        categoria: 'Laptop',
        id: 12
        },
    ]


    const getProductById = (id) =>{
        return products.find(producto => producto.id === Number(id))
    }
    const [cart, setCart] = useState([])

    const addProductCart = (id) =>{
        setCart([...cart, getProductById(id)])
    }
  return (
    <Context.Provider value={{ products, getProductById, cart, addProductCart}}>
        {children}
    </Context.Provider>
  )
}

export const useCustomContext = () => useContext(Context)

export default ContextProvider