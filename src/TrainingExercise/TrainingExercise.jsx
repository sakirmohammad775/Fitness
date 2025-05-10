import React from 'react';
import images from '../../images.json'
import exercise2 from '../assets/exercise2.png'
import exercise3 from '../assets/exercise3.png'
import exercise4 from '../assets/exercise4.png'
import exercise5 from '../assets/exercise5.jpg'
import exercise6 from '../assets/exercise6.jpg'
const TrainingExercise = () => {
    return (
        <>
            <div className="bg-black text-white py-10">
                <div className="container mx-auto text-center lg:text-left">
                    <h2 className="text-3xl font-bold mb-4">Trainings and Exercises</h2>
                    <p className="text-lg text-gray-500 mb-8">
                        We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-">
                        <div className="relative overflow-hidden rounded-lg shadow-md col-span-1">
                            <img
                                src={images.exercise1}
                                alt="Exercise 1"
                                className="w-full h-48 object-cover opacity-70 hover:opacity-100 transition-opacity duration-300"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <h3 className="text-xl font-semibold mb-1">Lorem Ipsum</h3>
                                <p className="text-sm text-gray-300">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className=" col-span-2 relative overflow-hidden rounded-lg shadow-md">
                            <img
                                src={exercise2}
                                alt="Exercise 2"
                                className="w-full h-48 object-cover opacity-70 hover:opacity-100 transition-opacity duration-300"
                            />
                            <div className="absolute bottom-0 left-0 right-0  p-4">
                                <h3 className="text-xl font-semibold mb-1">Push-up</h3>
                                <p className="text-sm text-gray-300">Works chest, shoulders, triceps.</p>
                            </div>
                        </div>
                        <div className=" col-span-1 relative overflow-hidden rounded-lg shadow-md">
                            <img
                                src={exercise3}
                                alt="Exercise 3"
                                className="w-full h-48 object-cover opacity-70 hover:opacity-100 transition-opacity duration-300"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <h3 className="text-xl font-semibold mb-1">Jump Squat</h3>
                                <p className="text-sm text-gray-300">Leg Press: Works the quadriceps and glutes.</p>
                            </div>
                        </div>
                        <div className=" col-span-2 relative overflow-hidden rounded-lg shadow-md">
                            <img
                                src={exercise4}
                                alt="Exercise 4"
                                className="w-full h-48 object-cover opacity-70 hover:opacity-100 transition-opacity duration-300"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <h3 className="text-xl font-semibold mb-1">Lunge</h3>
                                <p className="text-sm text-gray-300">Leg Press: Works the quadriceps and glutes.</p>
                            </div>
                        </div>
                        <div className="col-span-1 relative overflow-hidden rounded-lg shadow-md">
                            <img
                                src={exercise5}
                                alt="Exercise 5"
                                className="w-full h-48 object-cover opacity-70 hover:opacity-100 transition-opacity duration-300"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <h3 className="text-xl font-semibold text-white mb-1">Sit-up</h3>
                                <p className="text-sm text-gray-300">Leg Press: Works the quadriceps and glutes.</p>
                            </div>
                        </div>
                        <div className=" col-span-1 relative overflow-hidden rounded-lg shadow-md object-cover">
                            <img
                                src={exercise6}
                                alt="Exercise 6"
                                className="w-full h-48 object-cover opacity-70 hover:opacity-100 transition-opacity duration-300"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <h3 className="text-xl font-semibold mb-1">Squat</h3>
                                <p className="text-sm text-gray-300">Leg Press: Works the quadriceps and glutes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default TrainingExercise;