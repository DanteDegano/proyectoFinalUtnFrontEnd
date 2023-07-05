import React, {useState} from 'react'
import { BsHouseDoorFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import { ImSearch } from 'react-icons/im';
import './_Header.scss'

const Header = () => {

    const [adheridosAlCarro, setAdheridosAlCarro] = useState(0)

    const adherirAlCarro = () => {
        setAdheridosAlCarro(adheridosAlCarro + 1)
    };
    const eliminarDelCarro = () => {
        setAdheridosAlCarro( adheridosAlCarro > 0 ? adheridosAlCarro - 1: adheridosAlCarro)
    };

  return (
    
    <section className='header'>
        <div className='header_wrp'>
            <div className='header_left'>
                <div className='header_left_circle'></div>
                <h1 className='header_left_text'>Your Brand</h1>
                <button onClick={adherirAlCarro}>Incrementar</button>
                <button onClick={eliminarDelCarro}>Decrementar</button>
            </div>
            <div className='header_middle'>
                <div className='header_middle_input'>
                    <ImSearch style={{width:'17px', height:'17px', fill:'#C3CAD9'}}/>
                    <input className='header_middle_input_search' type="text" placeholder='Search Goods ...' />
                </div>
            </div>
            <div className='header_right'>
                <a className='header_right_contact' href="#">Contact</a>
                <a href="/"><BsHouseDoorFill className='header_right_icon'/></a>
                <a href="/cart" className='header_right_cart'>
                    <FaShoppingCart className='header_right_icon'/>
                    <span className='header_right_cart_items'>{adheridosAlCarro}</span>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Header
