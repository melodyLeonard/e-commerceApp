import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { detailsProduct, saveProductReview } from '../redux/actions/dataAction'
import Spinner from '../components/spinner/Spinner'
import Rating from '../components/rating/Rating';
import { PRODUCT_REVIEW_SAVE_RESET } from '../redux/types';


import productImage from '../images/item2.jpg'



const ProductScreen = (props) => {
    const [qty, setQty] = useState(1)
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const productDetails = useSelector(state => state.productDetails);
    const { products, loading, error } = productDetails
    const productReviewSave = useSelector((state) => state.productReviewSave);
    const { success: productSaveSuccess } = productReviewSave;
    const dispatch = useDispatch();


    useEffect(() => {
        if (productSaveSuccess) {
            alert('Review submitted successfully.');
            setRating(0);
            setComment('');
            dispatch({ type: PRODUCT_REVIEW_SAVE_RESET });
        }
        dispatch(detailsProduct(props.match.params.id));
        return () => {
            // 
        }
    }, [productSaveSuccess])

    const submitHandler = (e) => {
        e.preventDefault();
        // dispatch actions
        dispatch(
            saveProductReview(props.match.params.id, {
                name: userInfo.name,
                rating: rating,
                comment: comment,
            })
        );
    };

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
                    error ?
                        <div className="info-container">
                            <div className="error">
                                {error}
                            </div>
                        </div>
                        : products ?
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
                                                <li>
                                                    <a href="#reviews">
                                                        <Rating
                                                            value={products.rating}
                                                            text={products.numReviews + ' reviews'}
                                                        />
                                                    </a>
                                                </li>
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
                                            <li>
                                                <div>Status:</div>
                                                <div>{products.countInStock > 0 ? 'In stock' : 'Out of stock'}</div>
                                            </li>
                                            <li>
                                                <div>Qty:</div>
                                                <div>
                                                    <select
                                                        value={qty}
                                                        onChange={handleChange}
                                                    >
                                                        {[...Array(products.countInStock).keys()].map(p =>
                                                            <option value={p + 1}>{p + 1}</option>
                                                        )}
                                                    </select>
                                                </div>
                                            </li>

                                            <li>
                                                <div>Price:</div>
                                                <div>{products.price}</div>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="content-margined">
                                    <h2>Reviews</h2>
                                    {!products.reviews.length && <div>There is no review</div>}
                                    <ul className="review" id="reviews">
                                        {products.reviews.map((review) => (
                                            <li key={review._id}>
                                                <div>{review.name}</div>
                                                <div>
                                                    <Rating value={review.rating}></Rating>
                                                </div>
                                                <div>{review.createdAt.substring(0, 10)}</div>
                                                <div>{review.comment}</div>
                                            </li>
                                        ))}
                                        <li>
                                            <h3>Write a customer review</h3>
                                            {userInfo ? (
                                                <form onSubmit={submitHandler}>
                                                    <ul className="form-container">
                                                        <li>
                                                            <label htmlFor="rating">Rating</label>
                                                            <select
                                                                name="rating"
                                                                id="rating"
                                                                value={rating}
                                                                onChange={(e) => setRating(e.target.value)}
                                                            >
                                                                <option value="1">1- Poor</option>
                                                                <option value="2">2- Fair</option>
                                                                <option value="3">3- Good</option>
                                                                <option value="4">4- Very Good</option>
                                                                <option value="5">5- Excelent</option>
                                                            </select>
                                                        </li>
                                                        <li>
                                                            <label htmlFor="comment">Comment</label>
                                                            <textarea
                                                                name="comment"
                                                                value={comment}
                                                                onChange={(e) => setComment(e.target.value)}
                                                            ></textarea>
                                                        </li>
                                                        <li>
                                                            <button type="submit" className="button primary">
                                                                Submit
                        </button>
                                                        </li>
                                                    </ul>
                                                </form>
                                            ) : (
                                                    <div>
                                                        Please <Link to="/signin">Sign-in</Link> to write a review.
                  </div>
                                                )}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            :
                            <div>Can not display product</div>
            }
        </div>
    )
}

export default ProductScreen
