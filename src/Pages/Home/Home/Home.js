import React from 'react';
import AllCategories from '../Categories/AllCategories';
import Banner from '../Banner/Banner';
import Advertisement from '../Advertisement/Advertisement';
import RecomandationOfBooks from '../RecomandationOfBooks/RecomandationOfBooks';
import DealsWeek from '../Deals of the week/DealsWeek';
import JoinTheCommunity from '../Jointhecommunity/JoinTheCommunity';
import WhatClientSay from '../ClientsSay/WhatClientSay';
// import RecomandationOfBooks from '../RecomandationOfBooks/RecomandationOfBooks';



const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <AllCategories></AllCategories>
          <DealsWeek></DealsWeek>
          <Advertisement></Advertisement>
          <RecomandationOfBooks></RecomandationOfBooks>
          <JoinTheCommunity></JoinTheCommunity>
          <WhatClientSay></WhatClientSay>
          
        </div>
    );
};

export default Home;