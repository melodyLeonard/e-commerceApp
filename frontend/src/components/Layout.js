import React from 'react'
import Sidebar from './Sidebar'
import ViewsContainer from '../views/ViewsContainer'

const Layout = ({ sidebar }) => {

    return (
        <div className="layout">
            <Sidebar sidebar={sidebar} />
            <ViewsContainer />
        </div>
    )
}

export default Layout
