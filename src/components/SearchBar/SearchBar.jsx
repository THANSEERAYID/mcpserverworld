import React from 'react';

export default function SearchForm({ searchQuery, setSearchQuery }) {

  return (
    <form
      className="mx-auto mt-7 relative bg-white min-w-sm max-w-2xl flex items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-lg focus-within:border-gray-300 z-10"
    >

      {/* Search Input */}
      <input
        id="search-bar"
        placeholder="Search what you are looking for ..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="px-6 py-2 w-full rounded-md flex-1 border-none outline-none focus:outline-none focus:ring-0 bg-white"
      />

      {/* Search Icon */}
      
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    </form>
  );
}
