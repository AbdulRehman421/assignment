import React from 'react'
import './RegisterSteps.css'
const RegisterSteps = () => {
    return (
        <section className="stepsSection">
            <h3>
                How it works ?
            </h3>
            <div className="plansNsteps">
                <div className="steps">
                    <div className='step'>

                        <h4>
                            1. Create Account
                        </h4>
                        <p>
                            Create your account using phone number or email and take a free trial at ₹1.
                        </p>
                    </div>
                    <div className='step'>

                        <h4>
                            3. Select time slot
                        </h4>
                        <p>
                            Subscribe & select any time slot between 10 AM to 12 midnight.
                        </p>
                    </div>
                </div>
                <div className='plansImg'>
                    <img src="/assets/plans.png" alt="plans" />
                    <div className='plansShadow'>

                    </div>
                </div>
                <div className="steps">
                    <div className='step'>

                        <h4>
                            2. Subscribe
                        </h4>
                        <p>
                            Choose your preferred duration and select subscription package for your sessions.
                        </p>
                    </div>
                    <div className='step'>

                        <h4>
                            4. You are done
                        </h4>
                        <p>
                            That’s it! Start practicing and reach your learning goal in speaking.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RegisterSteps