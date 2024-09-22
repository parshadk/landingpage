import React,{useState} from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";
import ButtonHover from './button'
const Navbar = () => {
    const [dropdown, setDropdown] = useState(null);

    const handleMouseEnter = (menu) => {
      setDropdown(menu);
    };
  
    const handleMouseLeave = () => {
      setDropdown(null);
    };
  
  return (
    <nav className="bg-white shadow-lg p-3 m-1 sticky top-0 z-50">
      <div className="w-4/5 md:w-11/12 lg:mx-auto flex justify-between items-center">
        {/* Hamburger Menu & Brand */}
        <div className="flex items-center gap-2">
          <div className="lg:hidden">
            <RxHamburgerMenu className="h-6 w-6 text-green-500" />
          </div>
          <div className="hidden md:flex text-3xl text-green-500 font-bold">Printify</div>
        </div>

        {/* Links for large screens */}
        <ul className="hidden lg:flex space-x-5 ml-16">
          <li >
            
            <button className="flex items-center hover:text-green-500 text-gray-700">
              <span>Catalog</span>
            </button>
          </li>
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("howItWorks")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center hover:text-green-500 text-gray-700">
              <span>How it works</span>
              <IoMdArrowDropdown className="ml-1 h-4 w-4" />
            </button>
            {dropdown === "howItWorks" && (
              <div className="absolute flex flex-col gap-2 bg-white shadow-lg mt-2 p-2 min-w-[200px]">
                <div className="whitespace-nowrap">How Printify Works</div>
                <div className="whitespace-nowrap">Print On Demand</div>
                <div className="whitespace-nowrap">
                  Printify Quality Promise
                </div>
                <div className="whitespace-nowrap">What To Sell?</div>
              </div>
            )}
          </li>
          <li>
            <button className="flex items-center hover:text-green-500 text-gray-700">
              <span>Pricing</span>
            </button>
          </li>
          <li>
            <button className="flex items-center hover:text-green-500 text-gray-700">
              <span>Blog</span>
            </button>
          </li>
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center hover:text-green-500 text-gray-700">
              <span>Services</span>
              <IoMdArrowDropdown className="ml-1 h-4 w-4" />
            </button>
            {dropdown === "services" && (
              <div className="absolute flex flex-col gap-2 bg-white shadow-lg mt-2 p-2 min-w-[200px]">
                <div>Printify Studio</div>
                <div>Printify Express Delivery</div>
                <div>Order in Bulk</div>
                <div>Experts Program</div>
              </div>
            )}
          </li>
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("useCases")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center hover:text-green-500 text-gray-700">
              <span>Use Cases</span>
              <IoMdArrowDropdown className="ml-1 h-4 w-4" />
            </button>
            {dropdown === "useCases" && (
              <div className="absolute flex flex-col gap-2 bg-white shadow-lg mt-2 p-2 min-w-[200px]">
                <div>Merch for fans</div>
                <div>Merch for Ecommerce</div>
                <div>Merch for Enterprises</div>
                <div>Grow Your Store</div>
              </div>
            )}
          </li>

          <li className="relative"
            onMouseEnter={() => handleMouseEnter("needHelp")}
            onMouseLeave={handleMouseLeave}>
            <button className="flex items-center hover:text-green-500 text-gray-700">
              <span>Need Help ?</span>
              <IoMdArrowDropdown className="ml-1 h-4 w-4" />
            </button>
            {dropdown === "needHelp" && (
              <div className="absolute flex flex-col gap-2 bg-white shadow-lg mt-2 p-2 min-w-[200px]">
                <div>Help Center</div>
                <div>Contact</div>
                <div>My Requests</div>
              </div>
            )}
          </li>
        </ul>

        {/* Login/Signup */}
        <div className="flex justify-end gap-2">
          <ButtonHover text="Login" />
          <ButtonHover text="Signup" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
