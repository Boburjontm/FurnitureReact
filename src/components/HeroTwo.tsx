import React from "react";
import Dining from "../../public/img/browone.svg"; 
import Living from "../../public/img/browtwo.svg"; 
import Bedroom from "../../public/img/browtree.svg"; 

const HeroTwo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-center text-3xl font-bold mb-6">Browse The Range</h1>
        <p className="text-center text-gray-500 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Dining */}
          <div className="bg-white rounded-lg shadow-md cursor-pointer overflow-hidden">
            <img 
              src={Dining}
              alt="Dining"
              className="w-full h-90 object-cover" // Balandlikni 64 ga oshirdik
            />
            <h2 className="text-xl font-semibold text-center mt-4">Dining</h2>
          </div>
          
          {/* Living */}
          <div className="bg-white rounded-lg shadow-md cursor-pointer overflow-hidden">
            <img 
              src={Living}
              alt="Living"
              className="w-full h-90 object-cover" // Balandlikni 64 ga oshirdik
            />
            <h2 className="text-xl font-semibold text-center mt-4">Living</h2>
          </div>

          {/* Bedroom */}
          <div className="bg-white rounded-lg shadow-md cursor-pointer overflow-hidden">
            <img 
              src={Bedroom}
              alt="Bedroom"
              className="w-full h-90 object-cover" // Balandlikni 64 ga oshirdik
            />
            <h2 className="text-xl font-semibold text-center mt-4">Bedroom</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;
