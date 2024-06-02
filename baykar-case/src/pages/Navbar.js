import React from "react";

const Navbar = () => {
  return (
    <header className="lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md">
      <div className="flex-1 flex justify-between items-center">
        <a href="#" class="text-custom-brown text-base  font-bold">
          Collers
        </a>
      </div>

      <label for="menu-toggle" class="pointer-cursor md:hidden block">
        <svg
          class="fill-current text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />

      <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
        <nav>
          <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
            <li>
              <a className="md:p-4 py-3 px-0 block text-custom-brown text-sm" href="#">
                Product
              </a>
            </li>
            <li>
              <a className="md:p-4 py-3 px-0 block text-custom-brown text-sm" href="#">
                Solutions
              </a>
            </li>
            <li>
              <a className="md:p-4 py-3 px-0 block text-custom-brown text-sm" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a
                className="md:p-4 py-3 px-0 block md:mb-0 mb-2 text-custom-brown text-sm"
                href="#"
              >
                Resources
              </a>
            </li>
            <li>
              <a
                className="md:p-4 py-3 px-0 block md:mb-0 mb-2 text-custom-brown text-sm"
                href="#"
              >
                Log In
              </a>
            </li>
            <button className="px-4 py-2 border-2 flex gap-2 border-custom-brown  text-sm rounded-lg text-custom-brown hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
              <span className="pt-0.5"> Sign up now </span>
            </button>
          </ul>
        </nav>
      </div>
    </header>
    


  );
};

export default Navbar;
