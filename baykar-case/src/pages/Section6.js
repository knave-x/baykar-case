import React from "react";
import Test from "../../src/test.svg";
import Brown from "../assets/brown.svg";
import Yellow1 from "../assets/yellow1.svg";
import Yellow2 from "../assets/yellow2.svg";

const Section6 = () => {
  const sections = [
    {
      id: 1,
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5 16.5C11.2879 16.5 12.0682 16.3448 12.7961 16.0433C13.5241 15.7418 14.1855 15.2998 14.7427 14.7427C15.2998 14.1855 15.7418 13.5241 16.0433 12.7961C16.3448 12.0682 16.5 11.2879 16.5 10.5C16.5 9.71208 16.3448 8.93187 16.0433 8.20391C15.7418 7.47596 15.2998 6.81453 14.7427 6.25737C14.1855 5.70022 13.5241 5.25827 12.7961 4.95674C12.0682 4.65521 11.2879 4.50002 10.5 4.50002C8.90872 4.50002 7.38259 5.13216 6.25737 6.25737C5.13216 7.38259 4.50002 8.90872 4.50002 10.5C4.50002 12.0913 5.13216 13.6174 6.25737 14.7427C7.38259 15.8679 8.90872 16.5 10.5 16.5ZM16.82 15.406L20.4 18.986C20.4955 19.0783 20.5716 19.1887 20.6239 19.3108C20.6762 19.4328 20.7037 19.564 20.7048 19.6968C20.7058 19.8296 20.6804 19.9613 20.63 20.0841C20.5797 20.207 20.5053 20.3186 20.4114 20.4124C20.3174 20.5062 20.2057 20.5804 20.0828 20.6306C19.9599 20.6808 19.8282 20.706 19.6954 20.7048C19.5626 20.7035 19.4314 20.6758 19.3095 20.6233C19.1875 20.5708 19.0772 20.4946 18.985 20.399L15.405 16.819C13.7975 18.0669 11.7748 18.6552 9.74877 18.4642C7.72273 18.2732 5.84562 17.3173 4.49957 15.7911C3.15351 14.2648 2.4397 12.283 2.50344 10.2489C2.56718 8.21492 3.40368 6.28164 4.84266 4.84266C6.28164 3.40368 8.21492 2.56718 10.2489 2.50344C12.283 2.4397 14.2648 3.15351 15.7911 4.49957C17.3173 5.84562 18.2732 7.72273 18.4642 9.74877C18.6552 11.7748 18.0669 13.7975 16.819 15.405L16.82 15.406Z"
            fill="#0F172A"
          />
        </svg>
      ),

      content: "Bibendum tellus",
    },
    {
      id: 2,
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 6.386V10C6.00014 11.2854 6.27502 12.556 6.80622 13.7265C7.33741 14.897 8.11266 15.9405 9.08 16.787L12 19.342L14.92 16.787C15.8874 15.9405 16.6627 14.8971 17.1939 13.7265C17.7251 12.556 17.9999 11.2854 18 10V6.386L12 4.136L6 6.386ZM4.649 4.756L12 2L19.351 4.757C19.5416 4.82844 19.7058 4.95632 19.8218 5.12357C19.9377 5.29082 19.9999 5.48948 20 5.693V10C20 13.177 18.628 16.2 16.237 18.293L12 22L7.763 18.293C6.58096 17.2587 5.63369 15.9837 4.98469 14.5534C4.33569 13.1231 3.99996 11.5706 4 10V5.693C4.00008 5.48948 4.06225 5.29082 4.17822 5.12357C4.29419 4.95632 4.45843 4.82844 4.649 4.757V4.756ZM10.939 12.268L14.475 8.732C14.6636 8.54984 14.9162 8.44905 15.1784 8.45133C15.4406 8.4536 15.6914 8.55877 15.8768 8.74418C16.0622 8.92959 16.1674 9.1804 16.1697 9.4426C16.172 9.7048 16.0712 9.9574 15.889 10.146L11.646 14.39C11.4585 14.5775 11.2042 14.6828 10.939 14.6828C10.6738 14.6828 10.4195 14.5775 10.232 14.39L8.111 12.269C7.92884 12.0804 7.82805 11.8278 7.83033 11.5656C7.8326 11.3034 7.93777 11.0526 8.12318 10.8672C8.30859 10.6818 8.5594 10.5766 8.8216 10.5743C9.0838 10.572 9.3364 10.6728 9.525 10.855L10.939 12.269V12.268Z"
            fill="#0F172A"
          />
        </svg>
      ),

      content: "Cras eget",
    },
    {
      id: 3,
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.308 15.471L12.384 14.407L13.311 13.878C14.2011 13.3622 15.0188 12.7307 15.743 12C18.383 9.35898 19.189 6.25398 18.218 5.28198C17.246 4.31198 14.141 5.11598 11.5 7.75698C10.74 8.51698 10.103 9.34698 9.62199 10.189L9.09199 11.116L8.02899 11.192C7.15665 11.2532 6.32886 11.6004 5.67399 12.18C6.92394 12.73 8.06037 13.5083 9.02499 14.475C10.005 15.455 10.777 16.592 11.32 17.826C11.8995 17.1711 12.2468 16.3433 12.308 15.471ZM9.33499 18.3C9.13388 18.5734 8.91224 18.8312 8.67199 19.071C7.49999 20.243 5.73199 20.596 3.36799 20.131C2.90399 17.768 3.25799 16 4.42799 14.828C4.67599 14.582 4.93399 14.36 5.19999 14.165C4.3802 13.7645 3.50413 13.4914 2.60199 13.355C2.89243 12.4433 3.3976 11.6147 4.07499 10.939C5.09339 9.91804 6.44655 9.2997 7.88499 9.19798C8.48877 8.15316 9.22857 7.19311 10.085 6.34298C13.405 3.02298 17.679 1.91598 19.632 3.86798C21.584 5.82098 20.476 10.095 17.157 13.414C16.3069 14.2704 15.3468 15.0102 14.302 15.614C14.2003 17.0524 13.5819 18.4056 12.561 19.424C11.8858 20.1023 11.0571 20.6079 10.145 20.898C10.0086 19.9958 9.73547 19.1198 9.33499 18.3ZM7.60999 15.89C7.44896 15.7286 7.26741 15.589 7.06999 15.475C6.63799 15.625 6.12999 15.955 5.66499 16.419C5.44599 16.639 5.17799 17.378 5.17499 18.324C6.12099 18.321 6.86299 18.05 7.07999 17.834C7.54499 17.368 7.87499 16.861 8.02399 16.429C7.91024 16.2316 7.77105 16.0501 7.60999 15.889V15.89ZM15.388 8.10998C15.2903 8.01825 15.2121 7.90783 15.1579 7.78527C15.1037 7.66271 15.0747 7.53052 15.0727 7.39654C15.0706 7.26256 15.0954 7.12953 15.1458 7.00535C15.1961 6.88117 15.2709 6.76837 15.3657 6.67365C15.4605 6.57894 15.5733 6.50424 15.6975 6.45399C15.8217 6.40374 15.9548 6.37897 16.0888 6.38114C16.2228 6.38332 16.3549 6.4124 16.4774 6.46665C16.6 6.52091 16.7103 6.59923 16.802 6.69698C16.9744 6.88714 17.0671 7.13633 17.0609 7.39295C17.0547 7.64957 16.95 7.89397 16.7685 8.07555C16.5871 8.25712 16.3428 8.36197 16.0861 8.36838C15.8295 8.37479 15.5803 8.28227 15.39 8.10998H15.388Z"
            fill="#0F172A"
          />
        </svg>
      ),
      content: "Dolor pharetra",
    },
    {
      id: 4,
      icon: (
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 2C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H17C17.2652 13 17.5196 12.8946 17.7071 12.7071C17.8946 12.5196 18 12.2652 18 12V3C18 2.73478 17.8946 2.48043 17.7071 2.29289C17.5196 2.10536 17.2652 2 17 2H3ZM3 0H17C17.7956 0 18.5587 0.31607 19.1213 0.87868C19.6839 1.44129 20 2.20435 20 3V12C20 12.7956 19.6839 13.5587 19.1213 14.1213C18.5587 14.6839 17.7956 15 17 15H3C2.20435 15 1.44129 14.6839 0.87868 14.1213C0.31607 13.5587 0 12.7956 0 12L0 3C0 2.20435 0.31607 1.44129 0.87868 0.87868C1.44129 0.31607 2.20435 0 3 0V0ZM7 16H13C13.2652 16 13.5196 16.1054 13.7071 16.2929C13.8946 16.4804 14 16.7348 14 17C14 17.2652 13.8946 17.5196 13.7071 17.7071C13.5196 17.8946 13.2652 18 13 18H7C6.73478 18 6.48043 17.8946 6.29289 17.7071C6.10536 17.5196 6 17.2652 6 17C6 16.7348 6.10536 16.4804 6.29289 16.2929C6.48043 16.1054 6.73478 16 7 16Z"
            fill="#0F172A"
          />
        </svg>
      ),
      content: "Amet, fringilla",
    },
    {
      id: 5,
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 21.8C5.436 20.873 2 16.838 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 16.838 18.564 20.873 14 21.8V19.748C15.8853 19.2612 17.5284 18.1035 18.6212 16.492C19.714 14.8804 20.1816 12.9256 19.9362 10.994C19.6909 9.06237 18.7495 7.28653 17.2885 5.99936C15.8275 4.71218 13.9471 4.00203 12 4.00203C10.0529 4.00203 8.17255 4.71218 6.71153 5.99936C5.25052 7.28653 4.30911 9.06237 4.06376 10.994C3.81841 12.9256 4.28597 14.8804 5.3788 16.492C6.47162 18.1035 8.11468 19.2612 10 19.748V21.8ZM10 17.659C8.66557 17.1872 7.54089 16.2589 6.82474 15.038C6.10858 13.8172 5.84707 12.3825 6.08641 10.9875C6.32575 9.59254 7.05054 8.32707 8.13268 7.41479C9.21482 6.50251 10.5846 6.00215 12 6.00215C13.4154 6.00215 14.7852 6.50251 15.8673 7.41479C16.9495 8.32707 17.6742 9.59254 17.9136 10.9875C18.1529 12.3825 17.8914 13.8172 17.1753 15.038C16.4591 16.2589 15.3344 17.1872 14 17.659V15.465C14.7626 15.0247 15.3586 14.3451 15.6955 13.5316C16.0325 12.7181 16.0916 11.8162 15.8637 10.9656C15.6358 10.1151 15.1336 9.36352 14.435 8.82749C13.7365 8.29145 12.8805 8.0009 12 8.0009C11.1195 8.0009 10.2635 8.29145 9.56495 8.82749C8.86638 9.36352 8.3642 10.1151 8.1363 10.9656C7.9084 11.8162 7.96751 12.7181 8.30448 13.5316C8.64145 14.3451 9.23743 15.0247 10 15.465V17.659ZM13 13.732V22H11V13.732C10.6187 13.5119 10.3207 13.1721 10.1522 12.7653C9.98376 12.3586 9.9542 11.9076 10.0681 11.4823C10.1821 11.057 10.4332 10.6813 10.7825 10.4132C11.1318 10.1452 11.5597 9.99995 12 9.99995C12.4403 9.99995 12.8682 10.1452 13.2175 10.4132C13.5668 10.6813 13.8179 11.057 13.9319 11.4823C14.0458 11.9076 14.0162 12.3586 13.8478 12.7653C13.6793 13.1721 13.3813 13.5119 13 13.732Z"
            fill="#0F172A"
          />
        </svg>
      ),
      content: "Amet nibh",
    },
    {
      id: 6,
      icon: (
        <svg
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 12V1C9 0.734784 9.10536 0.48043 9.29289 0.292893C9.48043 0.105357 9.73478 0 10 0C10.2652 0 10.5196 0.105357 10.7071 0.292893C10.8946 0.48043 11 0.734784 11 1V12H12C12.2652 12 12.5196 12.1054 12.7071 12.2929C12.8946 12.4804 13 12.7348 13 13C13 13.2652 12.8946 13.5196 12.7071 13.7071C12.5196 13.8946 12.2652 14 12 14H11V15C11 15.2652 10.8946 15.5196 10.7071 15.7071C10.5196 15.8946 10.2652 16 10 16C9.73478 16 9.48043 15.8946 9.29289 15.7071C9.10536 15.5196 9 15.2652 9 15V14H8C7.73478 14 7.48043 13.8946 7.29289 13.7071C7.10536 13.5196 7 13.2652 7 13C7 12.7348 7.10536 12.4804 7.29289 12.2929C7.48043 12.1054 7.73478 12 8 12H9ZM16 2V1C16 0.734784 16.1054 0.48043 16.2929 0.292893C16.4804 0.105357 16.7348 0 17 0C17.2652 0 17.5196 0.105357 17.7071 0.292893C17.8946 0.48043 18 0.734784 18 1V2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3C20 3.26522 19.8946 3.51957 19.7071 3.70711C19.5196 3.89464 19.2652 4 19 4H18V15C18 15.2652 17.8946 15.5196 17.7071 15.7071C17.5196 15.8946 17.2652 16 17 16C16.7348 16 16.4804 15.8946 16.2929 15.7071C16.1054 15.5196 16 15.2652 16 15V4H15C14.7348 4 14.4804 3.89464 14.2929 3.70711C14.1054 3.51957 14 3.26522 14 3C14 2.73478 14.1054 2.48043 14.2929 2.29289C14.4804 2.10536 14.7348 2 15 2H16ZM4 5H5C5.26522 5 5.51957 5.10536 5.70711 5.29289C5.89464 5.48043 6 5.73478 6 6C6 6.26522 5.89464 6.51957 5.70711 6.70711C5.51957 6.89464 5.26522 7 5 7H4V15C4 15.2652 3.89464 15.5196 3.70711 15.7071C3.51957 15.8946 3.26522 16 3 16C2.73478 16 2.48043 15.8946 2.29289 15.7071C2.10536 15.5196 2 15.2652 2 15V7H1C0.734784 7 0.48043 6.89464 0.292893 6.70711C0.105357 6.51957 0 6.26522 0 6C0 5.73478 0.105357 5.48043 0.292893 5.29289C0.48043 5.10536 0.734784 5 1 5H2V1C2 0.734784 2.10536 0.48043 2.29289 0.292893C2.48043 0.105357 2.73478 0 3 0C3.26522 0 3.51957 0.105357 3.70711 0.292893C3.89464 0.48043 4 0.734784 4 1V5Z"
            fill="#0F172A"
          />
        </svg>
      ),
      content: "Sed velit",
    },
  ];
  return (
    <section className="flex flex-col md:flex-row lg:flex-col  gap-8 md:gap-20 py-12 md:py-20 px-4 md:px-20 z-40   w-full">
      <div className="flex flex-col gap-6 z-40">
        <h1 class="text-black font-bold text-3xl md:text-7xl  text-center md:text-left">
          Grow your collection
        </h1>
        <p className="text-black text-lg text-center md:text-left   ">
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
          amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
          sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
          proin neque placerat at bibendum quam tellus.
        </p>
      </div>

      <div className="flex flex-col xl:flex-row overflow-hidden items-center xl:space-x-20 xl:space-y-8 xl:space-y-0  w-full z-40 ">
        <div className="flex xl:block xl:space-y-4 overflow-scroll scroll-smooth scroll-hidden w-full p-4">
          {sections.map((section) => (
            <div
              key={section.id}
              className="flex items-center p-4 pr-12 space-x-4"
            >
              <div className="">{section.icon}</div>

              <div className="text-xl font-medium leading-6 text-nowrap">
                {section.content}
              </div>
            </div>
          ))}
        </div>
        <img src={Test}  />
      </div>
      <div className="relative w-full ">
        <img className="absolute bottom-0 z-20 w-full" src={Brown} alt="brown" />
        <img className="absolute bottom-0 z-10 w-full" src={Yellow1} alt="yellow" />
        <img className="absolute bottom-0 z-0 w-full" src={Yellow2}  alt="yellow"/>
      </div>
    </section>
  );
};

export default Section6;
