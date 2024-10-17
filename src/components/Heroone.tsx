import React from "react";
import heroImage from "../../public/img/flowerhome.svg"; // Hero bo'limidagi rasm

const Heroone: React.FC = () => {
  return (
    <section className="relative bg-gray-100">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto flex flex-col md:flex-row items-center left-40  justify-center h-screen text-center md:text-left px-6 z-10">
        {/* Right: Text content */}
        <div className="md:w-1/2 text-left md:ml-12 bg-yellow-200 p-8 left-8 rounded-2xl">
          <p className="text-gray-600 font-semibold uppercase mb-2">New Arrival</p>
          <h1 className="text-yellow-600 text-3xl md:text-5xl font-bold mb-4">
            Discover Our New Collection
          </h1>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <a
            href="#shop"
            className="bg-yellow-600 text-white py-3 px-6 rounded-lg hover:bg-yellow-700 transition duration-300"
          >
            Buy Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Heroone;
