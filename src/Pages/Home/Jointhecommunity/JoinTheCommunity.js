import React from 'react';
import joincombg from '../../../assets/joincommunitybg/joincommunitybg1.png';

const JoinTheCommunity = () => {
    return (
     
           <div className='mx-10 mb-16'>
             <div className=" {
                hero
             justify-start " style={{ backgroundImage: `url(${joincombg})` }}>
            
            <div className="hero-content lg:ml-20 lg:mb-28 lg:mt-12 sm:mb-24 sm:mt-12 sm:ml-12 mt-16 mb-28  justify-center sm:text-left text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 lg:text-5xl md:text-5xl sm:text-4xl text-3xl font-bold text-white">Join The Community</h1>
                <p className="mb-5 text-white">Enter your email address to receive regular updates, as well as news on upcoming events and specific offers.</p>
                <div className="flex sm:flex-row flex-col sm:justify-start justify-center">
			<input type="text" placeholder="your email address" className=" p-3 sm:rounded-l-lg sm:rounded-r-none rounded-t-lg sm:px-16" />
			<button type="button" className=" p-2 font-semibold sm:rounded-r-lg sm:px-8 sm:rounded-l-none rounded-b-lg  bg-[#F44344] text-white">Subscribe</button>
		</div> 
              </div>
            </div>
          </div>
           </div>
       
    );
};

export default JoinTheCommunity;
