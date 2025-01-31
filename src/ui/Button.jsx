import React from 'react'
import { Link } from 'react-router-dom'

function Button({ children, disabled, to, type }) {
    const base = "text-xs inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 trasition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus: ring-offset-2 disabled:cursor-not-allowed "


    const styles = {
        primary: base + " px-4 py-3 sm: px-6 sm: py-4",
        small: base + " px-2 py-2 md:px-5 md:py-2.5 text-xs",
        secondary: "text-xs inline-block rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-300 trasition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:text-stone-800 focus:ring-offset-2 disabled:cursor-not-allowed py-2.5 px-4 md:px-6 md:py-3.5"

    }

    if (to) return (
        <Link to={to} className={styles[type]}>
            {children}
        </Link>
    )
    return (
        <button
            className={styles[type]}
            disabled={disabled}
        >{children}</button>
    )
}

export default Button