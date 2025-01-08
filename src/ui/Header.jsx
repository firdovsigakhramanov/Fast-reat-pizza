import React from 'react'
import { Link } from 'react-router-dom'
import SearchQuery from '../features/order/SearchQuery'
import UserName from '../features/user/UserName'

function Header() {
    return (
        <header className='bg-yellow-500 uppercase'>
            <Link className='tracking-widest' to={'/'}>Fast React Pizza Co.</Link>
            <p>Jonas</p>
            <SearchQuery />
            <UserName />
        </header>
    )
}

export default Header