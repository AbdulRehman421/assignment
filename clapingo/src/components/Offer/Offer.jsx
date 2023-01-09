import React from 'react'
import './Offer.css'
import imageData from './images'

const Offer = () => {
    return (
        <section className='offerSection'>
            <h2>
                What we offer ?
            </h2>
            <div className='imgDiv'>
                {
                    imageData.map(img => (
                        <div key={img.id} className='offerImage'>
                            <img src={img.url} alt={img.title} />
                            <div className='imgDetails'>
                                <h3>
                                    {img.title}
                                </h3>
                                <p className='imgDesc' id={`desc${img.id}`}>
                                    {img.desc}
                                </p>

                            </div>
                        </div>
                    ))
                }

            </div>


        </section>
    )
}

export default Offer