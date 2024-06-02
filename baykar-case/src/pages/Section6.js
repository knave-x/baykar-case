import React from "react";

const Section6 = () => {
  const sections = [
    {
      id: 1,

      content: "Bibendum tellus",
    },
    {
      id: 2,

      content: "Cras eget",
    },
    {
      id: 3,

      content: "Dolor pharetra",
    },
    {
      id: 4,

      content: "Amet, fringilla",
    },
    {
      id: 5,

      content: "Amet nibh",
    },
    {
      id: 6,

      content: "Sed velit",
    },
  ];
  return (
    <section className="flex flex-col md:flex-row gap-8 md:gap-20 py-12 md:py-20 px-4 md:px-20">
      <div className="flex flex-col gap-6 ">
        <h1 class="text-black font-bold text-3xl md:text-7xl  text-center md:text-left">
          Grow your collection
        </h1>
        <p class="text-black text-lg text-center md:text-left   ">
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
          amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
          sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
          proin neque placerat at bibendum quam tellus.
        </p>
      </div>
    </section>
  );
};

export default Section6;
