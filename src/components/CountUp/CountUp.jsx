import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import '../CountUp/CountUp.css';

const StatBlock = ({ stat, showDivider }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center justify-center py-6 px-4"
    >
      {showDivider && (
        <div className=" absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-20 w-px">
          <div
            className="h-full w-px bg-gray-300 rounded-full"
            style={{
              background:
                'linear-gradient(to bottom, transparent 0%, gray 50%, transparent 100%)',
            }}
          ></div>
        </div>
      )}

      <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
        {inView ? <CountUp end={stat.value} duration={2} separator="," /> : '0'}+
      </span>
      <p className="mt-2 text-sm text-white font-semibold">{stat.name}</p>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    { name: 'MCP Servers', value: 14444 },
    { name: 'MCP Clients', value: 100 },
    { name: 'Active Users', value: 100 },
  ];

  return (
    <div className="flex items-center justify-center sm:py-16">
      <div className="grid grid-cols-2 md:grid-cols-3 w-full max-w-4xl text-center text-white relative">
        {stats.map((stat, index) => (
          <StatBlock
            key={stat.name}
            stat={stat}
            showDivider={index !== 0}
          />
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
