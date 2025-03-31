import React from "react";

function Card() {
  return (
    <div className="max-w-3xl w-full m-auto">
      <form className="max-w-full mx-auto my-4 md:my-6">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      <div className="w-full flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-auto px-6 py-8 md:p-12">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <div className="flex gap-4">
            <img
              className="w-24 h-24 rounded-full object-cover"
              src="/assets/pexels-olly-712513.jpg"
              alt="Profile"
            />
            <div className="flex flex-wrap justify-between max-w-full w-full">
              <div>
                <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  The Octocat
                </h5>
                <p className="text-gray-600 dark:text-gray-400">@octocat</p>
              </div>
              <p className="text-gray-500 dark:text-gray-300">
                Joined 25 Jan 2011
              </p>
            </div>
          </div>

          <div className="mt-6">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros.
            </p>

            <div className="flex justify-between bg-gray-100 dark:bg-gray-700 text-center rounded-lg py-4 px-6 mb-6">
              <div>
                <p className="text-gray-500 dark:text-gray-400">Repos</p>
                <p className="font-semibold text-gray-900 dark:text-white">8</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Followers</p>
                <p className="font-semibold text-gray-900 dark:text-white">
                  3938
                </p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Following</p>
                <p className="font-semibold text-gray-900 dark:text-white">9</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-between gap-4">
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <img src="/assets/003-pin.png" alt="" />
                <p>San Francisco</p>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <img src="/assets/twitter-logo.png" alt="" />
                <p>Not Available</p>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <img src="/assets/002-url.png" alt="" />
                <p>https://github.blog</p>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <img src="/assets/001-office-building.png" alt="" />
                <p>@github</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
