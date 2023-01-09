import React from 'react'
import './Trial.css'

const Trial = () => {
    return (
        <section>
            <div className='gradientBox'>
            </div>
            <div className="mileStoneCollection">
                <div className='mileStones1'>
                    <div className="mileStone">
                        <h2>
                            50K<span>+</span>
                        </h2>
                        <p>
                            Mobile Downloads
                        </p>
                    </div>
                    <div className="mileStone">
                        <h2>
                            80K<span>+</span>
                        </h2>
                        <p>
                            Happy Learners
                        </p>
                    </div>

                </div>
                <div className='mileStones2'>
                    <div className="mileStone">
                        <h2>
                            53K<span>+</span>
                        </h2>
                        <p>
                            Session per month
                        </p>
                    </div>
                    <div className="mileStone">
                        <h2>
                            200<span>+</span>
                        </h2>
                        <p>
                            Speakers around the globe
                        </p>
                    </div>
                </div>
            </div>
            <div className="trailBox">
                <h6>
                    Book a Trial
                </h6>
                <h3>
                    Start your English <br /> speaking journey today!
                </h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Neque pellentesque praesent vitae sit sagittis <br />venenatis.
                </p>
                <button>
                    Book a trial
                </button>
            </div>

        </section>
    )
}

export default Trial