import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import './payment.scss'
import { savePayment } from "../../redux/actions/cartActions";
import CheckOutSteps from "../checkout/CheckOutSteps";

function Payment(props) {
    const [paymentMethod, setPaymentMethod] = useState("");
    const dispatch = useDispatch()

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(savePayment({ paymentMethod }))
        props.history.push('/placeorder')
    };



    return (
        <div>
            <CheckOutSteps step1 step2 step3 />
            <div className="payment-container" >
                <div className="form-container">
                    <div className="header">

                        <h3 className="header-text"> Payment Method</h3>
                    </div>
                    <form onSubmit={onSubmitHandler}>
                        <div className="inputs-container">
                            <input
                                placeholder="Payment"
                                type="radio"
                                value="paypal"
                                name="paymentMethod"
                                id="paymentMethod"
                                onChange={e => setPaymentMethod(e.target.value)}
                            />
                            <label className="input" htmlFor="paymentMethod">Paypal</label>
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

export default Payment;