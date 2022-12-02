import { Link } from "react-router-dom";
// import './nav';
import { Navbar } from "flowbite-react";

function  Nav(){



  return (
    <>
    <nav className=" z-[100] sticky top-0 bg-white border-gray-200 px-2 md:px-4 py-2.5 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <Link to={'/books/store'} className="flex items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2702/2702154.png"
            className="mr-3 h-6 sm:h-9"
            alt="BookME Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            BookME
          </span>
        </Link>
        <div className="  flex items-center md:order-2">
          <Link
            to="/login"
            className="  bg-slate-200 dark:bg-transparent text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-2 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
          >
            Login
          </Link>
          <Link
            to="/signin"
            className=" ml-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Sign up
          </Link>
          <button
            data-collapse-toggle="mega-menu-icons"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mega-menu-icons"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              id="triggerEl"
              aria-hidden="true"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          id="targetEl"
          className=" hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
        >
          <ul className="flex flex-col mt-4 text-sm font-medium md:flex-row md:space-x-8 md:mt-0">
            <li>
              <Link
                to="/"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>

              <Link
                to="/books"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Books
              </Link>
            </li>

            <li>
              <Link
                to="#"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Author
              </Link>
            </li>
          </ul>
        </div>
      </div>
  <hr className=" mt-2 border-gray-200 sm:mx-auto dark:border-gray-700" />

    </nav>
  </>
  );

}


export default Nav;
