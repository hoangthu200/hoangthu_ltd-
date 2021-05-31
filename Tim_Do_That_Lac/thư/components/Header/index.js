/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Link from 'next/link';

const Header = () => (
  <nav className="bg-white shadow dark:bg-gray-800">
    <div className="container px-6 py-3 mx-auto">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-gray-700">
            <a
              className="text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300"
              href="/"
            >
              HOME
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu open: "block", Menu closed: "hidden" */}
        <div className="flex-1 md:flex md:items-center md:justify-between">
          <div className="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
            <Link href="/product">
              <a
                className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-yellow-300 hover:text-white dark:hover:bg-yellow-500"
              >
                Product
              </a>
            </Link>
            {/*  // <a
            //   href="#"
            //   className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-yellow-300 hover:text-white dark:hover:bg-yellow-500"
            // >
            //   Browse Topics
            // </a>
            // <a
            //   href="#"
            //   className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-yellow-300 hover:text-white dark:hover:bg-yellow-500"
            // >
            //   Random Item
            // </a>
            // <a
            //   href="#"
            //   className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-yellow-300 hover:text-white dark:hover:bg-yellow-500"
            // >
            //   Experts
            // </a> */}
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <Link href="/new">
              <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                New
              </button>
            </Link>
            <Link href="/login">
              <button className="inline-flex ml-4 text-white items-center bg-yellow-400 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-500 rounded text-base mt-4 md:mt-0">
                Login
              </button>
            </Link>
          </div>
          {/* <div className="flex items-center mt-4 md:mt-0">
              <button
                className="hidden mx-4 text-gray-600 md:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
                aria-label="show notifications"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="flex items-center focus:outline-none"
                aria-label="toggle profile dropdown"
              >
                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                  <img
                    src="https://lh3.googleusercontent.com/a-/AOh14Gi0DgItGDTATTFV6lPiVrqtja6RZ_qrY91zg42o-g"
                    className="object-cover w-full h-full"
                    alt="avatar"
                  />
                </div>
                <h3 className="mx-2 text-sm font-medium text-gray-700 dark:text-gray-200 md:hidden">
                  Khatab wedaa
                </h3>
              </button>
            </div> */}
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
