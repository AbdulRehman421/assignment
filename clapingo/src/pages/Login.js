import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
    const handleClick = () => {
        localStorage.clear()
    }
    const handleBack = () => {
        setTimeout(() => {
            window.location.reload()
        }, 1)
    }


    return (
        <section className='loginSection'>
            <h1>
                You are Logged in
            </h1>
            <Link to='/'>
                <button onClick={handleClick}>
                    Logout
                </button>
            </Link>
            <Link to='/'>
                <button onClick={handleBack}>
                    Try to go back
                </button>
            </Link>

        </section>
    )
}

export default Login
