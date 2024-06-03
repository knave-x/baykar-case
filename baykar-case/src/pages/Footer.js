import React from "react";
import Facebook from "../assets/Facebook.svg";
import GooglePlay from "../assets/GooglePlay.svg";
import Instagram from "../assets/Instagram.svg";
import LinkedIn from "../assets/Linkedin.svg";
import Twitter from "../assets/Twitter.svg";
import AppStore from "../assets/AppStore.svg";
import Youtube from "../assets/Youtube.svg";
import WorldMini from "../assets/WorldMini.svg";
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-30 px-20 ">
      <div className="flex flex-col md:flex-row  md:space-y-0 py-12  ">
        <div className="flex-1 ">
          <ul className="text-center md:text-left text-slate-200  space-y-4  mt-10">
            <li className="text-white font-medium">Product</li>
            <li>
              <span>Pricing</span>
            </li>
            <li>
              <span>Overview</span>
            </li>
            <li>
              <span>Browse</span>
            </li>
            <li>
              <span>Accessibility</span>
            </li>
            <li>
              <span>Five</span>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <ul className="text-center md:text-left text-slate-200   space-y-4 mt-10 ">
            <li className="text-white font-medium">Solutions</li>
            <li>
              <span>Brainstorming</span>
            </li>
            <li>
              <span>Ideation</span>
            </li>
            <li>
              <span>Wireframing</span>
            </li>
            <li>
              <span>Research</span>
            </li>
            <li>
              <span>Design</span>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <ul className="text-center md:text-left text-slate-200  space-y-4 mt-10 ">
            <li className="text-white font-medium">Support</li>
            <li>
              <span>Contact Us</span>
            </li>
            <li>
              <span>Developers</span>
            </li>
            <li>
              <span>Documentation</span>
            </li>
            <li>
              <span>Integrations</span>
            </li>
            <li>
              <span>Reports</span>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <div className="text-white text-center font-medium py-3  lg:text-left ">
            Get the App
          </div>
          <div className="mt-2 space-y-2">
            <div className="flex flex-col space-y-2 items-center lg:items-start">
              <button className="py-[3px]">
                <img
                  priority
                  src={AppStore}
                  alt="App Store"
                  width={120}
                  height={40}
                />
              </button>
              <button className="py-[3px]">
                <img
                  priority
                  src={GooglePlay}
                  alt="Google Play"
                  width={135}
                  height={40}
                />
              </button>
            </div>
            <div className="space-y-2 text-slate-200 ">
              <div className="pt-12 pb-3 text-center lg:text-left">
                Follow Us
              </div>
              <div className="flex space-x-4 justify-center lg:justify-start">
                <button>
                  <img
                    priority
                    src={Youtube}
                    alt="Youtube"
                    width={24}
                    height={24}
                  />
                </button>
                <button>
                  <img
                    priority
                    src={Facebook}
                    alt="Facebook"
                    width={24}
                    height={24}
                  />
                </button>
                <button>
                  <img
                    priority
                    src={Twitter}
                    alt="Twitter"
                    width={24}
                    height={24}
                  />
                </button>
                <button>
                  <img
                    priority
                    src={Instagram}
                    alt="Instagram"
                    width={24}
                    height={24}
                  />
                </button>
                <button>
                  <img
                    priority
                    src={LinkedIn}
                    alt="Linked In"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center lg:flex-row justify-between  text-slate-200 lg:py-6 py-12 space-y-6 lg:space-y-0">
        <div className="text-nowrap">Collers @ 2023. All rights reserved.</div>
        <div className="flex child:py-3 space-x-8 child:cursor-pointer">
          <div>Terms</div>
          <div>Privacy</div>
          <div>Contact</div>
          <div className="flex space-x-2">
            <img src={WorldMini} alt="EN" />
            <div>EN</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
