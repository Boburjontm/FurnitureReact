'use client';  // Ushbu direktiva client-side komponent ekanligini bildiradi

import { useState } from 'react';
import Img1 from '../../public/img/browone.svg';
import Img2 from '../../public/img/browtwo.svg';
import Img3 from '../../public/img/browtree.svg';
import Img4 from '../../public/img/browone.svg';

const rooms = [
  {
    id: 1,
    imageUrl: Img1,
    title: 'Bed Room',
    description: 'Inner Peace',
  },
  {
    id: 2,
    imageUrl: Img2,
    title: 'Dining Room',
    description: 'Bright and Simple',
  },
  {
    id: 3,
    imageUrl: Img3,
    title: 'Living Room',
    description: 'Cozy and Comfortable',
  },
  {
    id: 4,
    imageUrl: Img4,
    title: 'Study Room',
    description: 'Quiet and Focused',
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === rooms.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? rooms.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex w-full items-center justify-center min-h-screen bg-yellow-100">
      <div className="bg-yellow-100 border-none rounded-lg p-6 w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Chap tomondagi matn qismi */}
          <div className="col-span-1 p-4">
            <h2 className="text-3xl font-bold">
              50+ Beautiful rooms inspiration
            </h2>
            <p className="mt-2 text-gray-600">
              Our designer already made a lot of beautiful prototype of rooms
              that inspire you
            </p>
            <button className="mt-4 px-6 py-2 bg-yellow-500 text-white font-semibold rounded">
              Explore More
            </button>
          </div>

          {/* Carousel rasm */}
          <div className="col-span-2 relative">
            <img
              src={rooms[currentIndex].imageUrl}
              alt={rooms[currentIndex].title}
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="absolute bottom-5 left-5 bg-white bg-opacity-75 p-4 rounded-lg shadow">
              <h3 className="text-lg font-bold">
                {rooms[currentIndex].title}
              </h3>
              <p className="text-gray-600">{rooms[currentIndex].description}</p>
            </div>

            {/* Navigatsiya tugmalari */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full"
            >
              &#9664;
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full"
            >
              &#9654;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
