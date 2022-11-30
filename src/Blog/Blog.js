import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
    return (

<div>
<div className="hero min-h-[300px] border-2" 
        style={{ backgroundImage: `url("https://i.ibb.co/2yWkq0G/Untitled-1.jpg")` }}
        >
         

          <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row'>
          
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        {/* <div className="hero-content text-center text-neutral-content"> */}
          <div className=" w-full lg:w-full  my-auto p-20 text-center">
          <h2 className='text-8xl font-bold'>Blogs</h2>
          </div>
         
         
          <div className='w-full lg:w-full  flex justify-end'><img className='w-full' src='https://i.ibb.co/DQw0d5R/6721756.png '/>
          </div>
        
        </div>
        </div>
<section>
<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 mx-auto my-32">
	<a rel="noopener noreferrer" href="#" className="dark:bg-gray-100 border drop-shadow-xl block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline  focus:no-underline lg:grid lg:grid-cols-12 ">
		<img src="https://i.ibb.co/c2Nxf3P/aleks-dorohovich-n-Jdw-UHma-Y8-A-unsplash.jpg" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 " />
		<div className="p-6 space-y-2 lg:col-span-5">
			<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline hover:text-[#F44344]">Noster tincidunt reprimique ad pro</h3>
			<span className="text-xs dark:text-gray-400">February 19, 2021</span>
			<p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
		</div>
	</a>
	<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
		<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-100 border drop-shadow-xl">
			<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.ibb.co/QQpnxWr/thought-catalog-mm-Wqrsj-Z4-Lw-unsplash.jpg" />
			<div className="p-6 space-y-2">
				<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline hover:text-[#F44344]">In usu laoreet repudiare legendos</h3>
				<span className="text-xs dark:text-gray-400">January 21, 2021</span>
				<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
			</div>
		</a>
		<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-100 border drop-shadow-xl">
			<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.ibb.co/NnbTxd2/thought-catalog-505eect-W54k-unsplash.jpg" />
			<div className="p-6 space-y-2">
				<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline hover:text-[#F44344]">In usu laoreet repudiare legendos</h3>
				<span className="text-xs dark:text-gray-400">January 22, 2021</span>
				<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
			</div>
		</a>
		<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-100 border drop-shadow-xl">
			<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.ibb.co/Rb97Fm4/banner.jpg" />
			<div className="p-6 space-y-2">
				<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline hover:text-[#F44344]">In usu laoreet repudiare legendos</h3>
				<span className="text-xs dark:text-gray-400">January 23, 2021</span>
				<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
			</div>
		</a>
	
	
	
	</div>
	<div className="flex justify-center">
		<button type="button" className="px-6 py-3 text-sm rounded-md hover:underline bg-black px-12 mt-5 rounded-full text-white py-5 hover:bg-[#F44344]">Load more posts...</button>
	</div>
</div>
</section>
</div>
      
    );
};

export default Blog;