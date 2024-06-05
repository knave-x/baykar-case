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
      description:
        "Egestas elit duiscelerisque ut eu purus aliquam vitae habitasse.",
    },
    {
      id: 2,
      title: "Title",
      image: image2,
      description:
        "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    },
    {
      id: 3,
      title: "Title",
      image: image3,
      description:
        "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    },
  ];

  const Product = ({ product }) => {
    return (
      <div className="relative bg-slate-900 shadow-2xl shadow-white rounded-lg p-4 w-full max-w-xs md:max-w-none md:w-[394.67px] h-[472px] flex flex-col">
        <img
          src={product.image}
          alt={product.title}
          className="absolute top-0 left-0 w-full h-[236px] object-cover rounded-t-lg"
        />
        <div className="flex flex-col justify-between flex-grow pt-[236px] mt-4">
          <div>
            <h2 className="text-lg font-medium mb-2 text-white">
              {product.title}
            </h2>
            <p className="text-gray-300 mb-2">{product.description}</p>
          </div>
          <button className="w-full px-4 py-2 border-2 flex gap-2 border-white rounded-lg text-custom-brown mt-auto">
            <span className="flex justify-center items-center w-full h-full text-white ">
              Buy Now
            </span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className="flex flex-col gap-8 md:gap-20 py-12 md:py-20 px-4 md:px-20 bg-slate-900">
      <div className="flex flex-col md:flex-row justify-between w-full">
        <h1 className="text-white font-bold text-3xl md:text-6xl text-center md:text-left">
          The best of the best
        </h1>
        <button className="px-4 py-2 border-2 flex gap-2 border-white rounded-lg text-custom-brown mt-3 text-white">
          <span className="flex justify-center items-center w-full h-full">
            Sign up now
          </span>
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-6 md:gap-20">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Section3;
