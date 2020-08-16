import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import itemImage from '../../images/item2.jpg'
import './placeorder.scss'
import CheckOutSteps from '../checkout/CheckOutSteps'

const PlaceOrder = (props) => {

    const cart = useSelector(state => state.cart)

    const { cartItems, shipping, payment } = cart

    if (!shipping.address) {
        props.history.push('/shipping')
    }
    if (!payment) {
        props.history.push('/payment')
    }

    const dispatch = useDispatch()


    useEffect(() => {

        return () => {
            //
        }
    }, [])

    return (
        <div className="placeorder">

            <CheckOutSteps step1 step2 step3 step4 />

            <div className="placeorder-info">
                <div>
                    <h3> shipping</h3>
                    <div>
                        {cart.shipping.address}, {cart.shipping.city},
                        {cart.shipping.postalCode}, {cart.shipping.country}
                    </div>
                </div>
                <div>
                    <h3>Payment</h3>
                    <div>
                        Payment Method: {cart.payment.paymentMethod}
                    </div>

                </div>
                <div>
                    <ul className="cart">
                        <li>
                            <h3>
                                Shopping Cart
                        </h3>
                            <div className="price-div">
                                Price
                        </div>
                        </li>
                        {
                            cartItems.length === 0 ?
                                <div className="empty-cart">
                                    Cart is empty
                            </div>
                                :
                                cartItems.map(item => <div key={item.id}>
                                    <li>
                                        <div className="cart-image">
                                            <img src={itemImage} alt={item.name} />
                                        </div>
                                        <div className="cart-name">
                                            <div>
                                                <a href={`/products/${item.product}`}>{item.name}</a>
                                            </div>
                                            <div>
                                                Qty: {item.qty}
                                            </div>
                                        </div>
                                        <div className="cart-price">
                                            N {item.price}
                                        </div>
                                    </li>
                                </div>)
                        }
                    </ul>
                </div>

            </div>

            <div className="placeorder-action">
                <h3 >
                    Subtotal ({cartItems.reduce((acc, cur) => acc + cur.qty, 0)} items)
                    :
                    <span className="amount">
                        N {cartItems.reduce((acc, cur) => acc + cur.price * cur.qty, 0)}
                    </span>

                </h3>
                <button className="button" disabled={cartItems.length === 0}>
                    Proceed to Checkout
                </button>
            </div>
        </div>
    )
}

export default PlaceOrder
