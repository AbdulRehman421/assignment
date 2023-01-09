import React from 'react'
import './Hero.css';
import { Link } from 'react-router-dom';
// import PersonIcon from '@mui/icons-material/Person'


const Hero = () => {
    const navData = ['Plans & Pricing', 'Teach with us', 'Affiliate Program', 'Kids']
    return (
        <>
            <header className='header'>
                <img src="/assets/logo.png" alt="clapingo" className='header__logo' />
                <nav>
                    <ul>
                        {
                            navData.map((data, index) => (
                                <li key={index}>
                                    {data}
                                </li>
                            ))
                        }

                    </ul>
                </nav>
                <Link to={'/auth'}>
                    <button className='loginButton'>
                        {/* <PersonIcon /> */}
                        Login
                    </button>
                </Link>
            </header>
            <main>

                <div>
                    <h1>
                        Hone your english speaking skills overs <span> one-on-one</span> video call
                    </h1>
                    <p>Practice english conversation with excellent communuicators <br />
                        across the country and speak like a PRO 😎.</p>
                    <div className='buttonDiv'>
                        <button className='trialButton'>
                            Book a trial
                        </button><button className='downloadButton'>
                            Download our app
                        </button>
                    </div>
                </div>
                <div className='heroRight'>

                </div>

            </main>
        </>

    )
}

export default Hero