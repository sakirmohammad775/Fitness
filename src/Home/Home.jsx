import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import ChangeYourHabit from '../ChangeYourHabit/ChangeYourHabit';
import HeroPart2 from '../Hero_part 2/HeroPart2';
import TrainingExercise from '../TrainingExercise/TrainingExercise';
import BMICalculator from '../BMICalculator/BMICalculator';
import MeetOurTeam from '../MeetOurTeam/MeetOurTeam';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className="w-full max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8">
            <Navbar />
            <Banner />
            <ChangeYourHabit />
            <HeroPart2 />
            <TrainingExercise />
            <BMICalculator />
            <MeetOurTeam />
            <Footer />
        </div>
    );
};

export default Home;
