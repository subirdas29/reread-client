import React from 'react';
import AllCategories from '../Categories/AllCategories';
import Navbar from '../../Navbar/Navbar';
import Banner from '../Banner/Banner';


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <AllCategories></AllCategories>
        </div>
    );
};

export default Home;