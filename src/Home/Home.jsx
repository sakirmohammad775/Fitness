import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import ChangeYourHabit from '../ChangeYourHabit/ChangeYourHabit';
import HeroPart2 from '../Hero_part 2/HeroPart2';
import TrainingExercise from '../TrainingExercise/TrainingExercise';
import BMICalculator from '../BMICalculator/BMICalculator';

const Home = () => {
    return (
        <div className='max-w-[1540px] mx-auto bg-black'> 
            <Navbar></Navbar>
            <Banner></Banner>
            <ChangeYourHabit></ChangeYourHabit>
            <HeroPart2></HeroPart2>
            <TrainingExercise></TrainingExercise>
            <BMICalculator></BMICalculator>
            
        </div>
    );
};

export default Home;