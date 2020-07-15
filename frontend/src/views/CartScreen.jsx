import React, { useEffect } from 'react'
import { addToCart } from '../redux/actions/cartActions'
import { useSelector, useDispatch } from 'react-redux'

const CartScreen = (props) => {
    const productId = props.match.params.id
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1
    const dispatch = useDispatch()

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
        return () => {
            //
        }
    }, [])

    return (
        <div>
            Cart screen
        </div>
    )
}

export default CartScreen
