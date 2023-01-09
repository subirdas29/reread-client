import React from 'react';
import AllCategories from '../Categories/AllCategories';
import Banner from '../Banner/Banner';
import Advertisement from '../Advertisement/Advertisement';
import RecomandationOfBooks from '../RecomandationOfBooks/RecomandationOfBooks';
// import RecomandationOfBooks from '../RecomandationOfBooks/RecomandationOfBooks';



const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <AllCategories></AllCategories>
          <Advertisement></Advertisement>
          <RecomandationOfBooks></RecomandationOfBooks>
          
        </div>
    );
};

export default Home;