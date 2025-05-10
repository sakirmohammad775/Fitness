import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import ChangeYourHabit from '../ChangeYourHabit/ChangeYourHabit';
import HeroPart2 from '../Hero_part 2/HeroPart2';

const Home = () => {
    return (
        <div className='max-w-[1540px] mx-auto bg-black'> 
            <Navbar></Navbar>
            <Banner></Banner>
            <ChangeYourHabit></ChangeYourHabit>
            <HeroPart2></HeroPart2>
            
        </div>
    );
};

export default Home;