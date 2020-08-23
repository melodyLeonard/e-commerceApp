import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'

const Navbar = ({ toggleSidebar }) => {

    const userSignin = useSelector(state => state.userSignin)
    const { userInfo } = userSignin

    // useEffect(() => {
    //     if (userInfo) {
    //         window.location.reload(false)
    //     }
    //     return () => {
    //         //
    //     }
    // }, [userInfo])

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
                {
                    userInfo && userInfo.isAdmin &&
                    <div className="admin">
                        <a className="item" href="/orders">Orders</a>
                        <a className="item" href="/products">Products</a>
                    </div>
                }
                <a href="/cart" className="item">Cart </a>


            </div>

        </div>
    )
}

export default Navbar
