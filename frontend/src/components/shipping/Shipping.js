import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import './shipping.scss'
import { saveShipping } from "../../redux/actions/cartActions";
import CheckOutSteps from "../checkout/CheckOutSteps";

function Shipping(props) {
    const [inputs, setInputs] = useState({
        city: "",
        country: "",
        address: "",
        postalCode: ""
    });

    const dispatch = useDispatch()

    const { city, country, address, postalCode } = inputs;
    const onChange = e => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShipping({ city, postalCode, address, country }))
        props.history.push('/payment')

    };



    return (
        <div>
            <CheckOutSteps step1 step2 />
            <div className="shipping-container" >
                <div className="form-container">
                    <div className="header">

                        <h3 className="header-text"> Shipping</h3>
                    </div>

                    <form onSubmit={onSubmitHandler}>
                        <div className="inputs-container">
                            <input
                                placeholder="Address"
                                type="text"
                                value={address}
                                name="address"
                                onChange={e => onChange(e)}
                                className="input"
                            />
                        </div>

                        <div className="inputs-container">
                            <input
                                placeholder="City"
                                type="text"
                                value={city}
                                name="city"
                                onChange={e => onChange(e)}
                                className="input"
                            />
                        </div>

                        <div className="inputs-container">
                            <input
                                placeholder="Country"
                                type="text"
                                value={country}
                                name="country"
                                onChange={e => onChange(e)}
                                className="input"
                            />
                        </div>

                        <div className="inputs-container">
                            <input
                                placeholder="Postal Code"
                                type="number"
                                value={postalCode}
                                name="postalCode"
                                onChange={e => onChange(e)}
                                className="input"
                            />
                        </div>
                        <div className="button-container">
                            <button type="submit" onClick={onSubmitHandler} className="button">
                                Continue
                        </button>
                        </div>

                    </form>
                </div>
            </div>

        </div>

    );
}

export default Shipping;