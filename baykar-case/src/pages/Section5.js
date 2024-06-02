import React from "react";

const Section5 = () => {
  const testimonials = [
    {
      id: 1,
      company: "Zoomerr",
      feedback:
        "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
      name: "Hellen Jummy",
      position: "Team Lead",
      img: "path_to_hellen_image",
    },
    {
      id: 2,
      company: "SHELLS",
      feedback:
        "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
      name: "Hellena John",
      position: "Co-founder",
      img: "path_to_hellena_image",
    },
    {
      id: 3,
      company: "ArtVenue",
      feedback:
        "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
      name: "David Oshodi",
      position: "Manager",
      img: "path_to_david_image",
    },
    {
      id: 4,
      company: "ArtVenue",
      feedback:
        "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
      name: "David Oshodi",
      position: "Manager",
      img: "path_to_david_image",
    },
    {
      id: 5,
      company: "ArtVenue",
      feedback:
        "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
      name: "David Oshodi",
      position: "Manager",
      img: "path_to_david_image",
    },
    {
      id: 6,
      company: "ArtVenue",
      feedback:
        "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
      name: "David Oshodi",
      position: "Manager",
      img: "path_to_david_image",
    },
    {
      id: 7,
      company: "ArtVenue",
      feedback:
        "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
      name: "David Oshodi",
      position: "Manager",
      img: "path_to_david_image",
    },
  ];

  const TestimonialCard = ({ company, feedback, name, position, img }) => (
    <div className=" flex bg-white rounded-lg shadow-md p-6 m-4 w-96 h-96 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold mb-2">{company}</h3>
        <p className="text-gray-700 mb-4">{feedback}</p>
      </div>
      <div className="flex items-center">
        <img src={img} alt={name} className="w-10 h-10 rounded-full mr-4" />
        <div>
          <p className="text-gray-900 font-semibold">{name}</p>
          <p className="text-gray-600">{position}</p>
        </div>
      </div>
    </div>
  );
  return (
    <section className="flex flex-col  gap-8 md:gap-20 py-12 md:py-20 relative">
      <div className="flex flex-col md:flex-row justify-between md:mx-20">
        <h1 class="text-black font-bold text-3xl md:text-6xl text-center md:text-left ">
          Because they love us
        </h1>
        <div className="hidden md:block">
          <svg
            width="120"
            height="48"
            viewBox="0 0 126 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_dd_1_1220)">
              <rect
                x="4"
                y="3"
                width="46"
                height="46"
                rx="23"
                stroke="#78350F"
                stroke-width="2"
              />
              <path
                d="M33.5 26H21H33.5ZM21 26L27 20L21 26ZM21 26L27 32L21 26Z"
                fill="#78350F"
              />
              <path
                d="M21 26L27 32M33.5 26H21H33.5ZM21 26L27 20L21 26Z"
                stroke="#78350F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <g filter="url(#filter1_dd_1_1220)">
              <rect
                x="76"
                y="3"
                width="46"
                height="46"
                rx="23"
                stroke="#78350F"
                stroke-width="2"
              />
              <path
                d="M93 26H105.5H93ZM105.5 26L99.5 20L105.5 26ZM105.5 26L99.5 32L105.5 26Z"
                fill="#78350F"
              />
              <path
                d="M105.5 26L99.5 32M93 26H105.5H93ZM105.5 26L99.5 20L105.5 26Z"
                stroke="#78350F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_dd_1_1220"
                x="0"
                y="0"
                width="54"
                height="54"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_1220"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_1_1220"
                  result="effect2_dropShadow_1_1220"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_1_1220"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_dd_1_1220"
                x="72"
                y="0"
                width="54"
                height="54"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_1220"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_1_1220"
                  result="effect2_dropShadow_1_1220"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_1_1220"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="h-[421px] absolute w-full	mt-20 px-20">
        <div className=" bg-amber-200 h-[421px] w-full	mt-20 "></div>
      </div>

      <div className="relative mt-16 ">
        <div className="relative overflow-x-scroll  h-[421px]">
          <div className="flex px-6 absolute  ">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
