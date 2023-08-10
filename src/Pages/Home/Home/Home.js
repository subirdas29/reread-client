import React from 'react';
import AllCategories from '../Categories/AllCategories';
import Banner from '../Banner/Banner';
import Advertisement from '../Advertisement/Advertisement';
import RecomandationOfBooks from '../RecomandationOfBooks/RecomandationOfBooks';
import DealsWeek from '../Deals of the week/DealsWeek';
import JoinTheCommunity from '../Jointhecommunity/JoinTheCommunity';
import WhatClientSay from '../ClientsSay/WhatClientSay';
import State from '../State/State';
// import RecomandationOfBooks from '../RecomandationOfBooks/RecomandationOfBooks';



const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <AllCategories></AllCategories>
          <DealsWeek></DealsWeek>
          <RecomandationOfBooks></RecomandationOfBooks>
          <Advertisement></Advertisement>
          <WhatClientSay></WhatClientSay>
          <State></State>
          <JoinTheCommunity></JoinTheCommunity>
          
          
        </div>
    );
};

export default Home;