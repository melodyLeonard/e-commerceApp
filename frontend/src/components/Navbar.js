import React from 'react'
const Navbar = ({ toggleSidebar }) => {
    return (
        <div className="nav-bar">
            <div className="brand">
                <button className="menu-button" onClick={toggleSidebar}>
                    &#9776;
            </button>
                <a className="brand-logo" href="/">Shoppify</a>
            </div>

            <div className="item-wrapper">
                <a href="/cart" className="item">Cart </a>
                <a href="/signin" className="item">SignIn</a>
            </div>
        </div>
    )
}

export default Navbar
