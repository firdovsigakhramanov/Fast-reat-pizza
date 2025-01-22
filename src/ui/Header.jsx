import React from 'react'
import { Link } from 'react-router-dom'
import SearchQuery from '../features/order/SearchQuery'
import UserName from '../features/user/UserName'

function Header() {
    return (
        <header className='flex items-center justify-between bg-yellow-500 uppercase px-4 py-3 border-b border-stone-200 sm:px-6 '>
            <Link className='tracking-widest' to={'/'}>Fast React Pizza Co.</Link>
            <SearchQuery />
            <UserName />
        </header>
    )
}

export default Header