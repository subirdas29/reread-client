import React from 'react';
import AllCategories from '../Categories/AllCategories';
import Banner from '../Banner/Banner';
import Advertisement from '../Advertisement/Advertisement';


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <AllCategories></AllCategories>
          <Advertisement></Advertisement>
        </div>
    );
};

export default Home;