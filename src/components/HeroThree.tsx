"use client"; // Bu yerda komponentni client-side component qilish

import React, { useState } from "react";
import Img1 from "../../public/img/browone.svg";
import Img2 from "../../public/img/browtwo.svg";
import Img3 from "../../public/img/browtree.svg";
import Img4 from "../../public/img/browone.svg";
import Img5 from "../../public/img/browone.svg";
import Img6 from "../../public/img/browone.svg";
import Img7 from "../../public/img/browone.svg";
import Img8 from "../../public/img/browone.svg";

const products = [
  {
    name: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    oldPrice: 'Rp 3.500.000',
    discount: '-30%',
    image: Img1,
  },
  {
    name: 'Leviosa',
    description: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    image: Img2,
  },
  {
    name: 'Lolito',
    description: 'Luxury big sofa',
    price: 'Rp 7.000.000',
    oldPrice: 'Rp 14.000.000',
    discount: '-50%',
    image: Img3,
  },
  {
    name: 'Respira',
    description: 'Outdoor bar table and stool',
    price: 'Rp 500.000',
    label: 'New',
    image: Img4,
  },
  {
    name: 'Grifo',
    description: 'Night lamp',
    price: 'Rp 1.500.000',
    image: Img5,
  },
  {
    name: 'Muggo',
    description: 'Small mug',
    price: 'Rp 150.000',
    label: 'New',
    image: Img6,
  },
  {
    name: 'Pingky',
    description: 'Cute bed set',
    price: 'Rp 7.000.000',
    oldPrice: 'Rp 14.000.000',
    discount: '-50%',
    image: Img7,
  },
  {
    name: 'Potty',
    description: 'Minimalist flower pot',
    price: 'Rp 500.000',
    label: 'New',
    image: Img8,
  },
];

const itemsPerPage = 4; // Har bir sahifada ko'rsatiladigan elementlar soni

const HeroThree: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Joriy sahifaga mos keladigan mahsulotlarni hisoblang
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Sahifalarni hisoblash
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-10">Shop</h1>

        <div className="flex justify-between items-center mb-6 flex-wrap">
          <div className="flex items-center space-x-4">
            <button className="bg-gray-200 px-4 py-2 rounded">Filter</button>
            <span>Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, products.length)} of {products.length} results</span>
          </div>
          <div className="flex space-x-4 items-center mt-4 md:mt-0">
            <span>Show</span>
            <select className="border-gray-300 border px-2 py-1 rounded">
              <option value="16">16</option>
              <option value="32">32</option>
              <option value="48">48</option>
            </select>
            <span>Sort by</span>
            <select className="border-gray-300 border px-2 py-1 rounded">
              <option value="default">Default</option>
              <option value="price">Price</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentProducts.map((product, index) => (
            <div
              key={index}
              className="relative bg-white p-4 rounded-lg shadow-md overflow-hidden group"
            >
              {product.discount && (
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
                  {product.discount}
                </div>
              )}
              {product.label && (
                <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 text-xs rounded">
                  {product.label}
                </div>
              )}
              <div className="flex justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-500">{product.description}</p>
                <div className="flex items-center mt-2">
                  <span className="text-lg font-bold">{product.price}</span>
                  {product.oldPrice && (
                    <span className="text-sm text-gray-400 line-through ml-2">
                      {product.oldPrice}
                    </span>
                  )}
                </div>
              </div>
              <div className="absolute inset-0 bg-gray-800 bg-opacity-0 group-hover:bg-opacity-70 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-10 text-center">
          <ul className="inline-flex space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index}>
                <button
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handlePageChange(currentPage + 1 > totalPages ? totalPages : currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200'}`}
              >
                Next
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroThree;
