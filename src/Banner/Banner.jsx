import React from 'react';
import bannerImage from '../assets/images 2.png'
const Banner = () => {
    return (
        <>
            <div className="hero  min-h-screen">
                <div className="hero-content flex-col lg:flex-row">

                    <div>
                        <h1 className="text-5xl font-bold">Get body in <br /><i>Shape</i>& stay <br />healthy</h1>
                        <p className="py-6">
                            A huge selection of health and fitness content, healthy recipes and transformation stories to help you get fit and stay fit!
                        </p>
                       <div className='flex'>
  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded mr-4">
    Join Club Now!
  </button>
  <button className="bg-black text-white px-4 py-2 rounded">
    Get Started
  </button>
</div>

                    </div>
                    <img
                        src={bannerImage}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                </div>
            </div>
        </>
    );
};

export default Banner;