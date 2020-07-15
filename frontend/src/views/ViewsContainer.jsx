import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home.jsx'
import ProductScreen from './ProductScreen.jsx'
import CartScreen from './CartScreen.jsx'


const ViewsContainer = () => {
    return (
        <div className="container">
            <Router >
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/products/:id" component={ProductScreen} />
                    <Route exact path="/cart/:id?" component={CartScreen} />
                </Switch>
            </Router>
        </div>
    )
}

export default ViewsContainer
