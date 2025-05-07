import React from 'react';

const MCPServerCard = ({ img, title, description, price, rating, id, tags, github }) => {

  const tagColors = {
    primary: 'border-indigo-500 text-indigo-500 ring-indigo-700/10',
    secondary: 'border-gray-500 text-gray-500 ring-gray-500/10',
    tertiary: 'border-green-500 text-green-500 ring-green-700/10',
  };
  
  const tagMapping = {
    Featured: 'primary',
    Local: 'secondary',
    TypeScript: 'tertiary',
    JavaScript: 'primary',
    // Add more tags here if necessary
  };

  return (
    <a href={github} className="relative flex flex-col w-full max-w-[360px] h-[190px] bg-white overflow-hidden rounded-md transform transition-transform duration-300 hover:scale-102 hover:shadow-[0_0_20px_rgba(177,156,217,0.2)] border">
      {/* Index Badge (top-right) */}
      <span className="absolute top-2 right-2 border border-indigo-600 text-indigo-600 text-[10px] rounded-full px-2 py-0.5 shadow">
        #{id}
      </span>
      <div className="flex items-center p-4">
        <div className="relative w-12 h-12 border border-blue-900 rounded overflow-hidden flex-shrink-0">
          <img src={img} alt={title} className="object-cover w-full h-full" />
        </div>
        <h1 className="text-gray-800 font-semibold text-lg mx-4 line-clamp-1">{title}</h1>
      </div>
      <div className="px-4 flex-1">
        <p className="text-gray-500 text-sm line-clamp-2">{description}</p>
      </div>
      <div className="flex gap-2 px-4 pb-4">
        {tags?.slice(0, 3).map((tag, index) => {
          const tagType = tagMapping[tag] || 'secondary'; // Default to secondary if no mapping
          return (
            <span
              key={index}
              className={`inline-flex items-center justify-center rounded-lg px-2 py-1 text-[10px] font-medium border ring-1 ring-inset ${tagColors[tagType]}`}>
              {tag}
            </span>
          );
        })}
      </div>
    </a>
  );
};

export default MCPServerCard;
