import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { detailsProduct } from '../redux/actions/dataAction'
import Spinner from '../components/spinner/Spinner'

import productImage from '../images/item3.jpg'



const ProductScreen = (props) => {
    const [qty, setQty] = useState(1)

    const productDetails = useSelector(state => state.productDetails);

    const { product, loading, error } = productDetails

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id))
        return () => {
            // 
        }
    }, [])

    const handleAddToCart = () => {
        props.history.push('/cart' + props.match.id + '?qty=' + qty)
    }

    const handleChange = (e) => {
        setQty(e.target.value)
    }

    return (
        <div className="product-screen">
            {
                loading ? <Spinner /> :
                    error ? <div>{error}</div> :
                        <div>
                            <a href="/">
                                <div className="back-button-container">
                                    Back to products
                                </div>
                            </a>
                            <div className="details ">
                                <div className="detail-image">
                                    <img src={productImage} alt={product.name} />
                                </div>
                                <div className="details-info">
                                    <ul>
                                        <li>
                                            <h4>{product.name}</h4>
                                        </li>
                                        <li>
                                            {product.rating} Stars ({product.numReviews} Reviews)
                                        </li>
                                        <li>
                                            Price: <b>{product.price}</b>
                                        </li>
                                        <li>
                                            Description:
                            <div>
                                                {product.description}
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="details-action">
                                    <ul>
                                        <li>
                                            Price: {product.price}
                                        </li>
                                        <li>
                                            Status: {product.countInStock > 0 ? 'In stock' : 'Unavailble'}
                                        </li>
                                        <li>
                                            Qty: <select
                                                value={qty}
                                                onChange={handleChange}
                                            >
                                                {[...Array(product.countInStock).keys()].map(p =>
                                                    <option value={p + 1}>{p + 1}</option>
                                                )}
                                            </select>
                                        </li>
                                        <li>{
                                            product.countInStock > 0 &&
                                            <button
                                                onClick={handleAddToCart}
                                                className="button">
                                                Add to Cart
                                            </button>

                                        }
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
            }
        </div>
    )
}

export default ProductScreen
