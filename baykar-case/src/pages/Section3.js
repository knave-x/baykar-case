import React from "react";
import image1 from "../image1.jpeg";
import image2 from "../image2.jpeg";
import image3 from "../image3.jpeg";

const Section3 = () => {
  const products = [
    {
      id: 1,
      title: "Title",
      image: image1,
      description: "Egestas elit duiscelerisque ut eu purus aliquam vitae habitasse.",
    },
    {
      id: 2,
      title: "Title",
      image: image2,
      description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    },
    {
      id: 3,
      title: "Title",
      image: image3,
      description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    },
  ];

  const Product = ({ product }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 w-[394.67px] h-[472px] flex flex-col">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-[236px] object-cover mb-4"
        />
        <div className="flex flex-col justify-between flex-grow">
          <div>
            <h2 className="text-lg font-medium mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-2">{product.description}</p>
          </div>
          <button className="w-full px-4 py-2 border-2 flex gap-2 border-custom-brown rounded-lg text-custom-brown">
            <span className="flex justify-center items-center w-full h-full">Buy Now</span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className="flex flex-col gap-8 md:gap-20 py-12 md:py-20 px-4 md:px-20">
      <div className="flex flex-col md:flex-row justify-between w-full">
        <h1 className="text-black font-bold text-3xl md:text-6xl text-center md:text-left">
          The best of the best
        </h1>
        <button className="px-4 py-2 border-2 flex gap-2 border-custom-brown rounded-lg text-custom-brown mt-10">
            <span className="flex justify-center items-center w-full h-full">Sign up now</span>
          </button>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-20 items-center mx-auto">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Section3;
