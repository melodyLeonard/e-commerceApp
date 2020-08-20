import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import './product.scss'
import Spinner from '../spinner/Spinner'
import { saveProduct, listProducts, deleteProduct } from "../../redux/actions/dataAction";

function ProductForm(props) {
    const [inputs, setInputs] = useState({
        id: "",
        name: "",
        price: "",
        image: "",
        brand: "",
        category: "",
        countInStock: "",
        description: "",

    });

    const [modalVisible, setModalVisible] = useState(false)
    const [openBackground, setOpenBackground] = useState(true)

    const openModal = (product) => {
        if (!modalVisible) {
            setModalVisible(true)
            setOpenBackground(false)
        } else {
            setModalVisible(false)
            setOpenBackground(true)
        }
        setInputs({
            id: product._id,
            name: product.name,
            image: product.image,
            price: product.price,
            brand: product.brand,
            category: product.category,
            countInStock: product.countInStock,
            description: product.description
        })
    }

    const dispatch = useDispatch()

    const productDelete = useSelector(state => state.productDelete)
    const {
        loading: loadingDelete,
        success: successDelete,
        error: errorDelete
    } = productDelete



    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList

    const productSave = useSelector(state => state.productSave)
    const {
        loading: loadingSave,
        success: successSave,
        error: errorSave
    } = productSave

    useEffect(() => {
        if (successSave) {
            setModalVisible(false)
            setOpenBackground(true)
        }
        dispatch(listProducts())
        return () => {
            //
        }
    }, [successSave, successDelete])

    const {
        id,
        name,
        price,
        image,
        brand,
        category,
        countInStock,
        description,

    } = inputs;
    const onChange = e => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(saveProduct({
            _id: id,
            name,
            price,
            image,
            brand,
            category,
            countInStock,
            description,

        }))
    };

    const DeleteHandler = (product) => {
        dispatch(deleteProduct(product._id))
    }

    return (
        <div className="product-container" >
            <div className="content">
                <div className="product-header">
                    <h3 className="header-text">Products</h3>
                    {
                        openBackground &&
                        <button className="button" onClick={() => openModal({})}>Create Product</button>
                    }
                </div>
                {
                    modalVisible &&

                    <div className="form-container">
                        <div className="form">
                            <div className="header">
                                {
                                    loadingSave && <Spinner />
                                }
                                {
                                    errorSave && <div className="form-error">{errorSave}</div>
                                }
                                <div className="header-text-content">
                                    <h3 className="header-text"> create Product </h3>
                                    <button onClick={() => openModal({})} className="cancel">Cancel</button>
                                </div>
                            </div>

                            <form onSubmit={onSubmitHandler}>
                                <div className="inputs-container">
                                    <input
                                        placeholder="Name"
                                        type="text"
                                        value={name}
                                        name="name"
                                        onChange={e => onChange(e)}
                                        className="input"
                                    />
                                </div>
                                <div className="inputs-container">

                                    <input
                                        placeholder="Price"
                                        type="number"
                                        value={price}
                                        name="price"
                                        onChange={e => onChange(e)}
                                        className="input"
                                    />
                                </div>
                                <div className="inputs-container">

                                    <input
                                        placeholder="Image"
                                        type="text"
                                        value={image}
                                        name="image"
                                        onChange={e => onChange(e)}
                                        className="input"
                                    />
                                </div>
                                <div className="inputs-container">

                                    <input
                                        placeholder="Brand"
                                        type="text"
                                        value={brand}
                                        name="brand"
                                        onChange={e => onChange(e)}
                                        className="input"
                                    />
                                </div>

                                <div className="inputs-container">

                                    <input
                                        placeholder="Category"
                                        type="text"
                                        value={category}
                                        name="category"
                                        onChange={e => onChange(e)}
                                        className="input"
                                    />
                                </div>
                                <div className="inputs-container">

                                    <input
                                        placeholder="Count In Stock"
                                        type="number"
                                        value={countInStock}
                                        name="countInStock"
                                        onChange={e => onChange(e)}
                                        className="input"
                                    />
                                </div>

                                <div className="inputs-container">

                                    <textarea
                                        placeholder="Decription"
                                        type="text"
                                        value={description}
                                        name="description"
                                        onChange={e => onChange(e)}
                                        className="input"
                                    />
                                </div>
                                <div className="button-container">
                                    <button type="submit" onClick={onSubmitHandler} className="button" disabled={loadingSave}>
                                        {id ? "Update" : "Create"}
                                    </button>
                                </div>

                            </form>
                        </div>


                    </div>

                }
                {
                    openBackground &&

                    <div className="product-list">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th >Price</th>
                                    <th>Category</th>
                                    <th>Brand</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    error ? <tr>
                                        <td>{error}</td>
                                    </tr>
                                        : !products ? <tr>
                                            <td>There's no product</td>
                                        </tr> :
                                            products.map(product =>
                                                <tr key={product._id}>
                                                    <td>{product._id}</td>
                                                    <td>{product.name}</td>
                                                    <td className="price">{product.price}</td>
                                                    <td>{product.category}</td>
                                                    <td>{product.brand}</td>
                                                    <td className="button-container">
                                                        <button className="button" id="edit" onClick={() => openModal(product)}>Edit</button>
                                                        <button className="button" id="delete" onClick={() => DeleteHandler(product)}>Delete</button>
                                                    </td>
                                                </tr>)
                                }
                            </tbody>
                        </table>
                    </div>

                }

            </div>

        </div>
    );
}

export default ProductForm;