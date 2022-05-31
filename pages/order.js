import React from 'react'
import { Navigation } from '../components/Navigation'
import { OrderItem } from '../components/OrderItem'

const Order = () => {
    return (
        <div>
            <Navigation />

            <OrderItem orderDetails={{name:'Jet Black Half Sleeve T-Shirt', img: './homepageImages/women2.png', price: "599", mrp: "799", size: "M", colour: "Red", quantity: "1" }} />

        </div>
    )
}

export default Order