import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon } from '@heroicons/react/24/outline';

export default function SidebarDrawer({ categories, categoryCounts, selectedCategory, setSelectedCategory }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Mobile menu button */}
      <div className="md:hidden flex justify-between items-center lg:p-4">
        <div
          onClick={() => setIsOpen(true)}
          className="p-2 rounded-md text-gray-700 hover:bg-gray-200 flex"
        >
          <Bars3Icon aria-hidden="true" className="h-6 w-6 mx-3" />
          {/* <p className="font-semibold">Filter</p> */}
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden md:block w-48 lg:w-52 xl:w-56 2xl:w-60 sticky top-4 self-start rounded-md lg:mx-8 h-[700px] border bg-white overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-purple-100">
        <div className="m-2">
          <ul className="space-y-2 font-medium text-left">
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center gap-2 p-2 rounded-md w-full transition-colors text-left
                  ${selectedCategory === category
                      ? "bg-indigo-50 text-indigo-600 ring-1 ring-indigo-700/10 ring-inset"
                      : "text-gray-900 hover:bg-indigo-50 hover:text-indigo-600"
                    }`}
                >
                  <span className="truncate flex-1 text-left" title={category.replace(/-/g, ' ')}>
                    {category.replace(/-/g, ' ')}
                  </span>
                  <span className="flex-shrink-0 text-xs bg-gray-200 text-gray-600 rounded-full px-2 py-0.5">
                    {categoryCounts[category]}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile drawer */}
      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50 md:hidden" onClose={setIsOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-30" />
          </Transition.Child>

          <div className="fixed inset-0 flex z-50">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative w-64 max-w-xs bg-white h-full shadow-xl p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-purple-100">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 text-gray-700 hover:bg-gray-200 p-2 rounded"
                >
                  X
                </button>
                <div className="mt-10">
                  <ul className="space-y-2 font-medium text-left">
                    {categories.map((category) => (
                      <li key={category}>
                        <button
                          onClick={() => {
                            setSelectedCategory(category);
                            setIsOpen(false);
                          }}
                          className={`flex items-center justify-between p-2 rounded-md w-full transition-colors text-left
                          ${selectedCategory === category
                              ? "bg-indigo-50 text-indigo-600 ring-1 ring-indigo-700/10 ring-inset"
                              : "text-gray-900 hover:bg-indigo-50 hover:text-indigo-600"
                            }`}>
                          <span className="flex-1 truncate text-left" title={category.replace(/-/g, ' ')}>
                            {category.replace(/-/g, ' ')}
                          </span>
                          <span className="ml-2 flex-shrink-0 text-xs bg-gray-200 text-gray-600 rounded-full px-2 py-0.5">
                            {categoryCounts[category]}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
