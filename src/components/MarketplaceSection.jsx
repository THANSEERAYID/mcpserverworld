import React, { useEffect, useState, useRef } from 'react';
import MCPServerCard from './DetailCard/DetailCard';
import serversJson from '../server.json';
import SearchForm from '../components/SearchBar/SearchBar';
import SidebarDrawer from './Whatsapp';

export default function ServerPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredServers, setFilteredServers] = useState([]);
  const [visibleCount, setVisibleCount] = useState(25);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const loadMoreRef = useRef(null);

  const allServers = Object.entries(serversJson).flatMap(([category, items]) =>
    items.map(server => ({ ...server, category })));

  const categoryCounts = Object.entries(serversJson).reduce((acc, [category, servers]) => {
    acc[category] = servers.length;
    return acc;
  }, {});
  categoryCounts['All'] = allServers.length;

  const allCategories = ['All', ...Object.keys(serversJson)];

  useEffect(() => {
    let serversToShow = selectedCategory === 'All'
      ? allServers
      : allServers.filter(server => server.category === selectedCategory);

    // Filter servers based on search query
    if (searchQuery) {
      serversToShow = serversToShow.filter(server =>
        server.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        server.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // const uniqueServers = serversToShow.filter((server, index, self) =>
    //   index === self.findIndex(s => s.title === server.title && s.description === server.description)
    // );

    // const sortedServers = [...uniqueServers].sort((a, b) => a.title.localeCompare(b.title));

    setFilteredServers(serversToShow);
    setVisibleCount(25);
  }, [selectedCategory, searchQuery]);

  // Intersection observer to load more
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting && visibleCount < filteredServers.length) {
        setIsLoadingMore(true);
        setTimeout(() => {  // Simulate slight delay
          setVisibleCount((prev) => Math.min(prev + 25, filteredServers.length));
          setIsLoadingMore(false);
        }, 700);
      }
    });

    const currentElement = loadMoreRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [filteredServers.length, visibleCount]);

  return (
    <div className="relative isolate overflow-hidden bg-white py-28 lg:overflow-visible lg:px-0 z-10">
      <svg
        aria-hidden="true"
        className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] ">
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse">
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
      </svg>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center ">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl ">Awesome MCP Servers</h2>
            <p className="mt-5 text-md sm:text-lg leading-8 text-gray-600">
              A collection of servers for the Model Context Protocol
            </p>
          </div>
          <div className="sticky top-0 z-30 bg-white">
            <SearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>
        </div>
      </div>

      <div className="md:p-16 mt-3 md:mt-0 w-full flex md:flex-row flex-col justify-center">
        <div className='flex my-3 md:my-0'>
          <SidebarDrawer
            categories={allCategories}
            categoryCounts={categoryCounts}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory} />
          <h3 className="md:hidden text-xl font-semibold text-gray-800 mt-1">
            Showing: <span className="text-indigo-600">{selectedCategory.replace(/-/g, ' ')}</span> ({filteredServers?.length})
          </h3>
        </div>
        <div className="flex flex-col w-full max-w-6xl px-4">
          {/* Selected Category Heading */}
          <h3 className="hidden md:block text-2xl font-semibold text-gray-800 mb-6">
            Showing: <span className="text-indigo-600">{selectedCategory.replace(/-/g, ' ')}</span> ({filteredServers?.length})
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center items-center auto-rows-min w-full">
            {filteredServers.length === 0 ? (
              <div className="col-span-full flex flex-col items-center text-gray-500 py-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mb-3 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75h.008v.008H9.75V9.75zM14.25 9.75h.008v.008h-.008V9.75zM12 15.75c1.657 0 3-1.343 3-3h-6c0 1.657 1.343 3 3 3z" />
                </svg>
                <p className="text-lg font-medium">No servers found</p>
                <p className="text-sm text-gray-400 mt-1 text-center px-4">Try changing your category or search keywords.</p>
              </div>
            ) : (
              filteredServers.slice(0, visibleCount).map((server, i) => (
                <MCPServerCard
                  key={server.id}
                  img={server.img_link}
                  title={server.title}
                  description={server.description}
                  price={server.price}
                  rating={server.rating}
                  id={server.id}
                  tags={server.tags}
                  github={server.github_url}
                />
              ))
            )}
          </div>
        </div>
      </div>

      {/* Load more sentinel + spinner */}
      <div ref={loadMoreRef} className="flex justify-center items-center ">
        {isLoadingMore && (
          <div className="flex justify-center items-center space-x-2">
            <div className="w-6 h-6 border-2 border-t-2 border-gray-300 rounded-full animate-spin border-t-indigo-600"></div>
            <span className="text-md text-gray-500">Loading more servers...</span>
          </div>
        )}
      </div>
    </div>
  );
}
