import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section - Logo and Description */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-red-500 mb-2 italic">Fitness</h1>
          <p className="text-gray-400 text-sm">
            We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts.
          </p>
        </div>

        {/* Middle Section - Get Started Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-center md:text-left">Get Started</h3>
          <ul className="text-gray-400 text-sm space-y-2 text-center md:text-left">
            <li className="text-gray-400">Service</li>
            <li className="text-gray-400">Contact Us</li>
            <li className="text-gray-400">Affiliate Program</li>
            <li className="text-gray-400">About Us</li>
          </ul>
        </div>

        {/* Right Section - Get Started Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-center md:text-left">Get Started</h3>
          <ul className="text-gray-400 text-sm space-y-2 text-center md:text-left">
            <li className='text-gray-400'>Fitness</li>
            <li className='text-gray-400'>Platform</li>
            <li className='text-gray-400'>Workout Library</li>
            <li className='text-gray-400'>App Design</li>
          </ul>
        </div>
      </div>
      {/* Bottom Copyright Section */}
      <div className="container mx-auto mt-8 text-center text-gray-500 text-xs">
        <hr className="border-gray-800 mb-4" />
        <p>All right reserved @Fitness 2024</p>
      </div>
    </footer>
  );
};

export default Footer;