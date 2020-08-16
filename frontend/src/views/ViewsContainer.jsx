import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home.jsx'
import ProductScreen from './ProductScreen.jsx'
import CartScreen from './CartScreen.jsx'
import Signin from '../components/signin/Signin.js'
import Signup from '../components/register/Signup.js'
import ProductForm from '../components/products/ProductForm'
import Shipping from '../components/shipping/Shipping.js'
import Payment from '../components/payment/Payment.js'
import PlaceOrder from '../components/placeOrder/PlaceOrder.js'


const ViewsContainer = () => {
    return (
        <div className="container">
            <Router >
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/products/:id" component={ProductScreen} />
                    <Route exact path="/products/" component={ProductForm} />
                    <Route exact path="/cart/:id?" component={CartScreen} />
                    <Route exact path="/signin" component={Signin} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/shipping" component={Shipping} />
                    <Route exact path="/payment" component={Payment} />
                    <Route exact path="/placeorder" component={PlaceOrder} />
                </Switch>
            </Router>
        </div>
    )
}

export default ViewsContainer
