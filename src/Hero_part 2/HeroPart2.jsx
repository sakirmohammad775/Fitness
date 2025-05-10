import React from 'react';
import run from '../assets/run.jpg'
const HeroPart2 = () => {
    return (
        <>
            <div className="hero bg-neutral-900 min-h-max p-15">
                <div className="hero-content flex-col lg:flex-row md:flex-row">

                    <div>
                        <h1 className="text-5xl font-bold">Run an Extra <br />Mile Easily</h1>
                        <p className="py-6 text-gray-500">
                            We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts.
                        </p>
                       
                         <button className="text-white btn px-20 rounded-4xl border-none text-xl bg-red-600 ">Join </button>


                    </div>
                    <img
                        src={run}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                </div>
            </div>
        </>
    );
};

export default HeroPart2;