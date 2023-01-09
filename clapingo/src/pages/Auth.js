import React from 'react'
import { Link } from 'react-router-dom'
import './Auth.css'
import { useEffect, useRef, useState } from 'react'

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginButton = useRef()
    useEffect(() => {

        loginButton.current.addEventListener('click', () => {
            localStorage.setItem("clapingo", { email, password });
            console.log(email)
            console.log(password)
        }, [])



    })
    return (
        <section className='authSection'>
            <form>
                <label htmlFor="email">Email ID :</label>
                <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="email">Password</label>
                <input type="text" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <Link to={'/loggedIn'}>
                    <button className='' ref={loginButton}>
                        Login
                    </button>
                </Link>
            </form>

        </section>
    )
}

export default Auth
