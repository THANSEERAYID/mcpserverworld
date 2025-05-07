import React from 'react';
import './Marquee.css'; // (keep your css animation here)

const Marquee = () => {
  const tools = [
    'Excel',
    'Brave',
    'ElevenLabs',
    'Github',
    'PostgreSQL',
    'Stripe',
  ];

  return (
    <div className="w-full overflow-hidden  flex justify-center marquee-wrapper">
      <div className="w-1/2 flex flex-col items-center">
        <div className="relative w-full overflow-hidden">
          <div className="flex marquee-content whitespace-nowrap items-center">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="mx-8 text-2xl font-semibold text-gray-600 whitespace-nowrap"
              >
                {tool}
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {tools.map((tool, index) => (
              <span
                key={`dup-${index}`}
                className="mx-8 text-2xl font-semibold text-gray-700 whitespace-nowrap"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
        {/* <h2 className="text-center text-2xl font-bold mt-6 text-gray-400 mt-[50px]">
          Connect Tools 
        </h2> */}
      </div>
    </div>
  );
};

export default Marquee;
