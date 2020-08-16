import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = ({ toggleSidebar }) => {


    const userSignin = useSelector(state => state.userSignin)
    const { userInfo } = userSignin

    return (
        <div className="nav-bar">
            <div className="brand">
                <button className="menu-button" onClick={toggleSidebar}>
                    &#9776;
            </button>
                <a className="brand-logo" href="/">Shoppify</a>
            </div>

            <div className="item-wrapper">
                {
                    userInfo ?
                        <a href="/profile" className="item">{userInfo.name}</a> :
                        <a href="/signin" className="item">SignIn</a>
                }
                <a href="/cart" className="item">Cart </a>


            </div>
        </div>
    )
}

export default Navbar
