import React from "react";
import Nike from "../../src/nike.png";
const Header = () => {
  return (
    
    <section className="flex flex-col md:flex-row gap-8 md:gap-20 py-12 md:py-20 px-4 md:px-20">
      <div className="flex flex-col gap-6 ">
        <h1 class="text-black font-bold text-5xl md:text-7xl   text-center md:text-left">
          Collectible Sneakers
        </h1>
        <p class="text-black text-lg text-center md:text-left   ">
          Sit elitfeugiat turpis sed integer integer accumsan turpis. Sed
          suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
          amet.
        </p>
        <div className="flex   md:text-left">
          <button class="px-4 py-2 border-2 flex gap-2 border-custom-brown  text-sm rounded-lg text-custom-brown hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
            <span class="pt-0.5"> Sign up now </span>
          </button>

          <div class="flex gap-3 ml-5 justify-center items-center custom-brown">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="rgba(120, 53, 15, 1)"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                />
              </svg>
            </span>
            <span class="text-sm text-custom-brown ">Watch Demo</span>
          </div>
        </div>
      </div>

      <div class="relative   rounded-3xl bg-amber-400 h-[276px] w-[272px] md:h-[372px] md:w-[367px]">
        <img
          class=" absolute top-0 left-0 z-10 "
          width="486"
          height="388"
          src={Nike}
        />
      </div>
    </section>
  );
};

export default Header;
