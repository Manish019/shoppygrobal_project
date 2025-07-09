import { useState } from "react";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const cartItems = useSelector((store) => store.cart.item);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full border-b text-sm   shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] z-40 ">
      {/* Main Navbar */}
      <div className=" items-center px-3 py-4 relative">
        {/* Logo + Nav Links */}
        <div className="flex items-center justify-between md:justify-around space-x-12 px-5 md:px-0">
          <div className="flex items-center space-x-2">
           <div className="text-black flex items-center justify-center text-2xl font-bold">
              <Link to="/">
              ShoppyGlobe
                 </Link>
                        </div>

           
          </div>
          {/* mobile respocive */}
          <div className=" z-40 p-0 m-0 ">
            {menuOpen && (
              <div className="justify-center text-center absolute left-0 top-20 w-full md:hidden flex flex-col z-50">
                <Link
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `py-5 px-4  bg-white text-xl  hover:text-red-700  transition-all duration-300 ease-in-out ${
                      isActive
                        ? "text-purple-600 font-semibold"
                        : "text-gray-700 font-semibold"
                    }`
                  }
                >
                  Home
                </Link>
                <Link
                  to="/product"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `py-5 px-4 bg-white text-xl  hover:text-red-700  transition-all duration-300 ease-in-out ${
                      isActive
                        ? "text-purple-600 font-semibold"
                        : "text-gray-700 font-semibold"
                    }`
                  }
                >
                   Product
                </Link>
                <Link
                  to="/categories"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `py-5 px-4 bg-white text-xl  hover:text-red-700  transition-all duration-300 ease-in-out ${
                      isActive
                        ? "text-purple-600 font-semibold"
                        : "text-gray-700 font-semibold"
                    }`
                  }
                >
                   Categories
                </Link>
                  

                <Link
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `py-5 px-4  bg-white text-xl  hover:text-red-700  transition-all duration-300 ease-in-out ${
                      isActive
                        ? "text-purple-600 font-semibold"
                        : "text-gray-700 font-semibold "
                    }`
                  }
                >
                  About Us
                </Link>
              </div>
            )}
          </div>

          {/* large screen */}
          <div className=" space-x-11 text-gray-700 text-xl font-semibold hidden md:block">
            <Link
              to="/"
              className={({ isActive }) =>
                isActive ? "text-purple-600 font-semibold" : "text-gray-700  hover:text-red-700  transition-all duration-300 ease-in-out"
              }
            >
              Home
            </Link>
            <Link
              to="/product"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-700 font-semibold"
                  : "text-gray-700  hover:text-red-700  transition-all duration-300 ease-in-out"
              }
            >
              Products
            </Link>
            <Link
              to="/categories"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-700 font-semibold"
                  : "text-gray-700  hover:text-red-700  transition-all duration-300 ease-in-out"
              }
            >
              Categories
            </Link>
            <Link
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-700 font-semibold"
                  : "text-gray-700  hover:text-red-700  transition-all duration-300 ease-in-out"
              }
            >
              About
            </Link>
          </div>

          <div className="flex  text-gray-700 text-center space-x-1 ">
            <span className=" text-xl  hover:text-red-700  transition-all duration-300 ease-in-out hidden md:block">
              <FaUser className="cursor-pointer" />
            </span>

            <Link to="/cart">
              <span
                className="flex items-center   hover:text-red-700  transition-all duration-300 
                                ease-in-out text-xl"
              >
                <div>
                  <span className="flex text-center justify-center">
                    <div className="flex">
                      <span className="-mt-1 px-2 font-semibold hidden md:block">
                        Cart
                      </span>
                      <FaShoppingCart className="cursor-pointer " />
                    </div>
                  </span>
                </div>

                {/* yaha ki logic tab chalega jb cartitem ka lentth greater */}
                <div className="relative">
                  {cartItems.length > 0 && (
                    <span
                      className=" font-semibold flex  justify-center absolute -left-0 bottom-1  
                                  bg-[red] rounded-full h-6 w-6 items-center text-sm f text-white "
                    >
                      {
                        cartItems.reduce(
                          (total, item) => total + item.quantity,
                          0
                        ) //  Sum all quantities
                      }
                    </span>
                  )}
                </div>
              </span>
            </Link>
            <div className="md:hidden block text-2xl px-2 text-center -mt-1">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                <IoMenu />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
