import React from 'react';
import AllCategories from '../Categories/AllCategories';
import Banner from '../Banner/Banner';
import Advertisement from '../Advertisement/Advertisement';
import RecomandationOfBooks from '../RecomandationOfBooks/RecomandationOfBooks';
import BooksOnSale from '../BooksOnSale/BooksOnSale';


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <AllCategories></AllCategories>
          <Advertisement></Advertisement>
          <RecomandationOfBooks></RecomandationOfBooks>
          <BooksOnSale></BooksOnSale>
        </div>
    );
};

export default Home;