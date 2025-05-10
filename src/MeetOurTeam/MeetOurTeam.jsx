import React from 'react';
import jeromeBell from '../assets/trainer1.png'; // Replace with actual image path
import cameronWilliamson from '../assets/trainer2.png'; // Replace with actual image path
import darrellSteward from '../assets/trainer3.png'; // Replace with actual image path
import dianneRussell from '../assets/trainer4.png'; // Replace with actual image path
import codyFisher from '../assets/trainer5.png'; // Replace with actual image path
import theresaWebb from '../assets/trainer6.png'; // Replace with actual image path

const MeetOurTeam = () => {
  const teamMembers = [
    { name: 'Jerome Bell', role: 'Trainer', image: jeromeBell },
    { name: 'Cameron Williamson', role: 'Trainer', image: cameronWilliamson },
    { name: 'Darrell Steward', role: 'Trainer', image: darrellSteward },
    { name: 'Dianne Russell', role: 'Trainer', image: dianneRussell },
    { name: 'Cody Fisher', role: 'Trainer', image: codyFisher },
    { name: 'Theresa Webb', role: 'Trainer', image: theresaWebb },
  ];

  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-lg text-gray-400 mb-8">
          We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden relative"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover  opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-gray-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;