import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import './signin.scss'
import Spinner from '../spinner/Spinner'
import { signin } from "../../redux/actions/userAction";

function Login(props) {
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    const dispatch = useDispatch()

    const userSignin = useSelector(state => state.userSignin)
    const { loading, userInfo, error } = userSignin
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
    const { email, password } = inputs;
    const onChange = e => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password))


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
                    <h3 className="header-text"> Login Shoppify</h3>
                </div>

                <form onSubmit={onSubmitHandler}>
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
                    <div className="button-container">
                        <button type="submit" onClick={onSubmitHandler} className="button" disabled={loading}>
                            Signin
                        </button>
                    </div>

                    <div className="account-choice">
                        <p>New to Shoppify? <a href={redirect === "/" ?
                            "signup" : `signup?redirect=${redirect}`
                        }>Signup</a></p>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Login;