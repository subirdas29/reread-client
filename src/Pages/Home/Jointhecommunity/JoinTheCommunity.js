import React from 'react';
import joincombg from '../../../assets/joincommunitybg/joincommunitybg1.png';

const JoinTheCommunity = () => {
    return (
     
           <div className='mx-10 mb-16'>
             <div className=" {
                hero
             justify-start" style={{ backgroundImage: `url(${joincombg})` }}>
            
            <div className="hero-content lg:ml-24 lg:mb-28 lg:mt-12 p-18 justify-center text-left text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold text-white">Join The Community</h1>
                <p className="mb-5 text-white">Enter your email address to receive regular updates, as well as news on upcoming events and specific offers.</p>
                <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col justify-start">
			<input type="text" placeholder="your email address" className=" p-3 rounded-l-lg " />
			<button type="button" className=" p-2 font-semibold rounded-r-lg  dark:bg-[#F44344] dark:text-white">Subscribe</button>
		</div> 
              </div>
            </div>
          </div>
           </div>
       
    );
};

export default JoinTheCommunity;
