import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { detailsProduct } from '../redux/actions/dataAction'
import Spinner from '../components/spinner/Spinner'

import productImage from '../images/item2.jpg'



const ProductScreen = (props) => {
    const [qty, setQty] = useState(1)

    const productDetails = useSelector(state => state.productDetails);

    const { products, loading, error } = productDetails
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id))
        return () => {
            // 
        }
    }, [])

    const handleAddToCart = () => {
        props.history.push(`/cart/${props.match.params.id}/?qty=${qty}`)
    }

    const handleChange = (e) => {
        setQty(e.target.value)
    }

    return (
        <div className="product-screen">
            {
                loading ? <Spinner /> :
                    error ? <div>{error}</div> : products ?
                        <div>
                            <a href="/">
                                <div className="back-button-container">
                                    Back to products
                                </div>
                            </a>
                            <div className="details ">
                                <div className="detail-image">
                                    <img src={productImage} alt={products.name} />
                                </div>
                                <div className="details-info">
                                    <ul>
                                        <li>
                                            <h4>{products.name}</h4>
                                        </li>
                                        <li>
                                            {products.rating} Stars ({products.numReviews} Reviews)
                                        </li>
                                        <li>
                                            Price: <b>{products.price}</b>
                                        </li>
                                        <li>
                                            Description:
                            <div>
                                                {products.description}
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="details-action">
                                    <ul>
                                        <li>
                                            Price: {products.price}
                                        </li>
                                        <li>
                                            Status: {products.countInStock > 0 ? 'In stock' : 'Out of stock'}
                                        </li>
                                        <li>
                                            Qty: <select
                                                value={qty}
                                                onChange={handleChange}
                                            >
                                                {[...Array(products.countInStock).keys()].map(p =>
                                                    <option value={p + 1}>{p + 1}</option>
                                                )}
                                            </select>
                                        </li>
                                        <li>{
                                            products.countInStock > 0 &&
                                            <div className="button-container">
                                                <button
                                                    onClick={handleAddToCart}
                                                    className="button">
                                                    Add to Cart
                                            </button>
                                            </div>

                                        }
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        :
                        <div>Can not display product</div>
            }
        </div>
    )
}

export default ProductScreen
