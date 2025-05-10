import React from 'react';
import image3 from '../assets/image3.png'
import image2 from '../assets/image2.png'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'
const ChangeYourHabit = () => {
    return (
        <>
            <div className="bg-black text-white py-10">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4">Change Your Habits</h2>
                    <p className="text-lg mb-8 text-gray-500">
                        We believe fitness should be accessible to everyone, everywhere, regardless <br /> of income or access to a gym.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-52 h-52 rounded-full overflow-hidden shadow-lg">
                                <img
                                    src={image3}
                                    alt="Movement"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="py-4">
                                <h3 className="text-xl font-semibold mb-2 text-white">Movement</h3>
                                <p className="text-gray-500">We believe fitness should be accessible to everyone.</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="w-52 h-52 rounded-full overflow-hidden shadow-lg">
                                <img
                                    src={image2}
                                    alt="Time"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="py-4">
                                <h3 className="text-xl font-semibold mb-2 text-white">Time</h3>
                                <p className="text-gray-500">We believe fitness should be accessible to everyone.</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className=" w-52 h-52 rounded-full overflow-hidden shadow-lg">
                                <img
                                    src={image4}
                                    alt="Practice"
                                    className="w-full h-full object-cover"
                                /></div>
                            <div className="py-4">
                                <h3 className="text-xl font-semibold mb-2">Practice</h3>
                                <p className="text-gray-500">We believe fitness should be accessible to everyone.</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="w-52 h-52 rounded-full overflow-hidden shadow-lg">
                                <img
                                    src={image5}
                                    alt="Weight Loss"
                                    className="w-full h-full object-cover"
                                /></div>
                            <div className="py-4">
                                <h3 className="text-xl font-semibold mb-2">Weight Loss</h3>
                                <p className="text-gray-500">We believe fitness should be accessible to everyone.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChangeYourHabit;