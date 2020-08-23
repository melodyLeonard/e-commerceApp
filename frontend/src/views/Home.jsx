import React, { useState, useEffect } from 'react'
import productImage from '../images/item2.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../redux/actions/dataAction'
import Spinner from '../components/spinner/Spinner'
import Rating from '../components/rating/Rating';


const Home = (props) => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const category = props.match.params.id ? props.match.params.id : '';

    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listProducts(category))
        return () => {
            //
        }
    }, [category])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(listProducts(category, searchKeyword, sortOrder));
    };
    const sortHandler = (e) => {
        setSortOrder(e.target.value);
        dispatch(listProducts(category, searchKeyword, sortOrder));
    };

    return (

        <div className="home-container">
            {category && <h2>{category}</h2>}
            <ul className="filter">
                <li>
                    <form onSubmit={submitHandler}>
                        < input
                            className="input-search"
                            name="searchKeyword"
                            onChange={(e) => setSearchKeyword(e.target.value)}
                        />
                        <button type="submit">Search</button>
                    </form>
                </li>
                <li>
                    Sort By{' '}
                    <select name="sortOrder" onChange={sortHandler}>
                        <option value="">Newest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </li>
            </ul>

            {
                loading ? <Spinner /> :
                    error ? <div className="info-container">
                        <div className="error">
                            {error}
                        </div>
                    </div>
                        :

                        <ul className="products">
                            {
                                products.map(product =>
                                    <li key={product._id}>
                                        <a href={`products/${product._id}`}>
                                            <div className="product">

                                                <img className="product-image" src={productImage} alt={product.name} />
                                                <div className="product-description">
                                                    <div className="product-name">
                                                        {product.name}
                                                    </div>
                                                    <div className="product-brand">{product.brand}</div>
                                                    <div className="product-price">N{product.price}</div>
                                                    <div className="product-rating">
                                                        <Rating
                                                            value={product.rating}
                                                            text={product.numReviews + ' reviews'}
                                                        />
                                                    </div>

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
