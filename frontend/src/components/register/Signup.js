import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import './signup.scss'
import Spinner from '../spinner/Spinner'
import { signup } from "../../redux/actions/userAction";

function Signup(props) {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        name: "",
        confirmPassword: ""
    });

    const dispatch = useDispatch()

    const userSignup = useSelector(state => state.userSignup)
    const { loading, userInfo, error } = userSignup
    const redirect = props.location.search ?
        props.location.search.split("=")[1] :
        '/'

    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect)
        }
        return () => {
            //
        }
    }, [userInfo])
    const { email, password, name, confirmPassword } = inputs;
    const onChange = e => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(signup(name, email, password))


    };



    return (
        <div className="signin-container" >

            <div className="form-container">
                <div className="header">
                    {
                        loading && <Spinner />
                    }
                    {
                        error && <div className="form-error">{error}</div>
                    }
                    <h3 className="header-text"> Register an Account</h3>
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
                            placeholder="Email address"
                            type="email"
                            value={email}
                            name="email"
                            onChange={e => onChange(e)}
                            className="input"
                        />
                    </div>
                    <div className="inputs-container">

                        <input
                            placeholder="Password"
                            type="password"
                            value={password}
                            name="password"
                            onChange={e => onChange(e)}
                            className="input"
                        />
                    </div>
                    <div className="inputs-container">

                        <input
                            placeholder="Confirm Password"
                            type="password"
                            value={confirmPassword}
                            name="confirmPassword"
                            onChange={e => onChange(e)}
                            className="input"
                        />
                    </div>
                    <div className="button-container">
                        <button type="submit" onClick={onSubmitHandler} className="button" disabled={loading}>
                            Signup
                        </button>
                    </div>

                    <div className="account-choice">
                        <p>Already have an account? <a href={redirect === "/" ?
                            "signin" : `signin?redirect=${redirect}`}>Signin</a></p>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Signup;