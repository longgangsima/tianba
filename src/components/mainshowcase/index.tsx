// components/MainShowcase.tsx
import React, { useState } from 'react';
import MainShowcaseImage from '../../app/images/mianshowcase.jpg';
const MainShowcase: React.FC = () => {
  // States to control the visibility of the popout panels
  const [showWomen, setShowWomen] = useState(false);
  const [showMen, setShowMen] = useState(false);

  // Dummy categories for demonstration
  const womenCategories = ['New Arrivals', 'Basic Tees', 'Accessories', 'Carry'];
  const menCategories = ['New Arrivals', 'Shirts', 'Watches', 'Wallets'];

  return (
    <div className="relative">
      <div
        className="flex flex-col items-center justify-center h-screen bg-cover bg-center w-full"
        style={{ backgroundImage: `url(${MainShowcaseImage.src})` }}
      >
        <h1 className="text-5xl text-white font-bold mb-4">New arrivals are here</h1>
        <p className="text-lg text-white mb-6">
          Check out the latest options from our summer small-batch release while they're still in stock.
        </p>
        <a className="text-white bg-blue-500 px-6 py-2 rounded-md text-lg font-medium hover:bg-blue-700 transition duration-300 cursor-pointer">
          Shop New Arrivals
        </a>
      </div>
    </div>
  );
};

export default MainShowcase;
