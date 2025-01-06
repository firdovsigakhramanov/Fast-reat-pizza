import React from 'react'
import { Link } from 'react-router-dom'
import SearchQuery from '../features/order/SearchQuery'

function Header() {
    return (
        <header>
            <Link to={'/'}>Fast React Pizza Co.</Link>
            <p>Jonas</p>
            <SearchQuery />
        </header>
    )
}

export default Header