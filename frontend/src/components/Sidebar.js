import React from 'react'

const Sidebar = ({ toggleSidebar, sidebar }) => {

    return (
        <div className={sidebar}>

            <h4 >
                <a href="/category/Laptops">Laptops</a>
            </h4>
            <h4 >
                <a href="/category/Phones">Phones</a>
            </h4>
            <h4 >
                <a href="/category/Watch">Watch</a>
            </h4>
            <h4 >
                <a href="/category/Cars">Cars</a>
            </h4>
            <h4 >
                <a href="/category/Shirts">Shirts</a>
            </h4>
        </div>
    )
}

export default Sidebar
