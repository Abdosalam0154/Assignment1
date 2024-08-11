import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    
    

<nav className="border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-700 fixed top-0 right-0 left-0">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-20">
    <Link to="" className="flex items-center space-x-3 rtl:space-x-reverse">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Start Framework</span>
    </Link>
    
    <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">

        <li>
          <NavLink to="about" className="block  py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-emerald-500">ABOUT</NavLink>
        </li>
        <li>
          <NavLink to="portfolio" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-emerald-500">PORTFOLIO</NavLink>
        </li>
        <li>
          <NavLink to="contact" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-emerald-500">CONTCAT</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}
