import React, { useState } from 'react';
import './App.scss';
import Layout from './components/Layout';
import Navbar from './components/Navbar';

//Redux
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
    const [sidebar, setSidebar] = useState('sidebar-close')

    const toggleSidebar = () => {
        sidebar === 'sidebar' ? setSidebar('sidebar-close') : setSidebar('sidebar')
    }
    return (
        <Provider store={store}>
            <div className="app">
                <Navbar toggleSidebar={toggleSidebar} />
                <Layout sidebar={sidebar} />
            </div>
        </Provider>

    )
}

export default App;