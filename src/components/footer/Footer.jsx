import React, {useState} from 'react'
import './_Footer.scss'

const Footer = () => {

  return (
    <section className='footer'>
        <div className='footer_wrp'>
            <div className='footer_left'>
                <h2>Constructor</h2>
                <p>12 Water St. Vacouver, <br /> BCV6B 132 United States</p>
            </div>
            <div className='footer_middle'>
                <div className='footer_middle_column'>
                    <a href="#">Corporate sales</a>
                    <a href="#">Feedback</a>
                    <a href="#">Jobs</a>
                    <a href="#">News</a>
                    <a href="#">Sales Rules</a>
                    <a href="#">For partners</a>
                </div>

                <div className='footer_middle_column'>
                    <a href="#">Bonus program</a>
                    <a href="#">Gift cards</a>
                    <a href="#">Bill Payment Verification</a>
                    <a href="#">Loans</a>
                    <a href="#">Delivery</a>
                    <a href="#">Service centers</a>
                </div>

                <div className='footer_middle_column'>
                    <a href="#">How to place an order</a>
                    <a href="#">Ways of payment</a>
                    <a href="#">Exchange and return of goods</a>
                    <a href="#">Warranty service</a>
                    <a href="#">Order status</a>
                    <a href="#">Knowledge base</a>
                </div>
            </div>
            <div className='footer_right'>
                <p>2030 Comapny. All Rights Reserved.</p>
                <a href="#">Terms & Conditions</a>
                <a href="#">Privacy Policy</a>
            </div>
        </div>
    </section>
  )
}

export default Footer
