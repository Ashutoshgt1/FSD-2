import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './Home'
import Eample from './a1'
import Contact from './Contact'

const Main = () => {
    return (
        <Router>
            <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
            <ul className='nav navbar-nav'>
                <li className='nav-link'><Link to='/'>Home</Link></li>
                <li className='nav-link'><Link to='/Product'>Product</Link></li>
                <li className='nav-link'><Link to='/Contact'>Contact</Link></li>
            </ul>
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Product' element={<Eample />} />
                <Route path='/Contact' element={<Contact />} />
            </Routes>
        </Router>
    )
}

export default Main