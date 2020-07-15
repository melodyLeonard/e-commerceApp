import React, { useEffect } from 'react'
import productImage from '../images/item3.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../redux/actions/dataAction'
import Spinner from '../components/spinner/Spinner'

const Home = () => {
    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listProducts())
        return () => {
            //
        }
    }, [])


    return (

        <div className="home-container">
            {
                loading ? <Spinner /> :
                    error ? <div>{error}</div>
                        :

                        <ul className="products">
                            {
                                products.map(product =>
                                    <li key={product.id}>
                                        <a href={`products/${product.id}`}>
                                            <div className="product">

                                                <img className="product-image" src={productImage} alt={product.name} />
                                                <div className="product-description">
                                                    <div className="product-name">
                                                        {product.name}
                                                    </div>
                                                    <div className="product-brand">{product.brand}</div>
                                                    <div className="product-price">{product.price}</div>
                                                    <div className="product-rating">{product.rating} stars ({product.numReviews})</div>

                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                )
                            }
                        </ul>
            }
        </div>
    )
}

export default Home
