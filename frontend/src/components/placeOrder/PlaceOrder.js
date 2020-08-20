import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import itemImage from '../../images/item2.jpg'
import './placeorder.scss'
import CheckOutSteps from '../checkout/CheckOutSteps'
import { createOrder } from '../../redux/actions/orderActions';
import Spinner from '../spinner/Spinner'

const PlaceOrder = (props) => {

    const cart = useSelector(state => state.cart)
    const orderCreate = useSelector(state => state.orderCreate);
    const { loading, success, error, order } = orderCreate;

    const { cartItems, shipping, payment } = cart
    if (!shipping.address) {
        props.history.push('/shipping')
    } else if (!payment.paymentMethod) {
        props.history.push('/payment')
    }

    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
    const shippingPrice = itemsPrice < 10000 ? 0 : 200
    const taxPrice = 0.25 * itemsPrice
    const totalPrice = itemsPrice + shippingPrice + taxPrice

    const placeOrderHandler = () => {
        dispatch(createOrder({
            orderItems: cartItems, shipping, payment, itemsPrice, shippingPrice,
            taxPrice, totalPrice
        }));
    }


    const dispatch = useDispatch()


    useEffect(() => {
        if (success) {
            props.history.push("/order/" + order._id);
        }
        return () => {
            //
        }
    }, [success])

    return (
        <div className="placeorder">

            <CheckOutSteps step1 step2 step3 step4 />

            <div className="placeorder-info">
                <div>
                    <h3> shipping</h3>
                    <div>
                        {cart.shipping.address}, {cart.shipping.city}, {cart.shipping.postalCode}, {cart.shipping.country}
                    </div>
                </div>
                <div>
                    <h3>Payment</h3>
                    <div>
                        Payment Method: {cart.payment.paymentMethod}
                    </div>

                </div>
                <div>
                    <ul className="cart-list-container">
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
                {
                    loading ? <Spinner /> :
                        <ul>
                            <li>
                                <button className="button" onClick={placeOrderHandler} disabled={loading}>Place Order</button>
                            </li>
                            <li>
                                <h3>
                                    Your Order
                        </h3>
                            </li>

                            <li>
                                <div> Items </div>
                                <div>N{itemsPrice}</div>
                            </li>
                            <li>
                                <div> shipping </div>
                                <div>N{shippingPrice}</div>
                            </li>
                            <li>
                                <div>Tax </div>
                                <div>N{taxPrice}</div>
                            </li>
                            <li>
                                <div> Total </div>
                                <div>N{totalPrice}</div>
                            </li>

                        </ul>
                }

            </div>
        </div>
    )
}

export default PlaceOrder
