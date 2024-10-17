import React from 'react';
import Heroone from '../components/Heroone';
import HeroTwo from '../components/HeroTwo';
import HeroThree from '../components/Herothree';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <Heroone/>
      <HeroTwo/>
      <HeroThree/>
      <Carousel/>
      <Footer/>
    </div>
  );
};

export default Home;
