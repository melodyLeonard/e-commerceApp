import React, { useEffect } from 'react'
import { addToCart, removeFromCart } from '../redux/actions/cartActions'
import { useSelector, useDispatch } from 'react-redux'
import itemImage from '../images/item2.jpg'


const CartScreen = (props) => {


    const cart = useSelector(state => state.cart)

    const { cartItems } = cart

    const productId = props.match.params.id
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1

    const dispatch = useDispatch()

    const checkOutHander = () => {
        props.history.push('/signin?redirect=shipping')
    }

    const removeFromCartHandler = (productId) => {
        dispatch(removeFromCart(productId))
    }


    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
        return () => {
            //
        }
    }, [qty, dispatch, productId])

    return (
        <div className="cart">
            <div className="cart-list">
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
                            cartItems.map(item => <li key={item.product}>
                                <div className="cart-image">
                                    <img src={itemImage} alt={item.name} />
                                </div>
                                <div className="cart-name">
                                    <div>
                                        <a href={`/products/${item.product}`}>{item.name}</a>
                                    </div>

                                    <div>

                                        Qty:
                                        <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                                            {
                                                [...Array(item.countInStock).keys()].map(x =>
                                                    <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                )
                                            }
                                        </select>
                                        <button type="button" onClick={() => removeFromCartHandler(item.product)} className="button">Delete</button>
                                    </div>
                                </div>
                                <div className="cart-price">
                                    N {item.price}
                                </div>
                            </li>
                            )
                    }
                </ul>
            </div>

            <div className="cart-action">
                <h3 >
                    Subtotal ({cartItems.reduce((acc, cur) => parseInt(acc) + parseInt(cur.qty), 0)} items)
                    :
                    <span className="amount">
                        N {cartItems.reduce((acc, cur) => parseInt(acc) + parseInt(cur.price) * parseInt(cur.qty), 0)}
                    </span>

                </h3>
                <button onClick={checkOutHander} className="button" disabled={cartItems.length === 0}>
                    Proceed to Checkout
                </button>
            </div>
        </div>
    )
}

export default CartScreen
