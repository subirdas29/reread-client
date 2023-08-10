import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaBook, FaCanadianMapleLeaf, FaStore, FaUsers } from "react-icons/fa";
import React from 'react';

const State = () => {
    return (
        <section className="my-32 mx-10 dark:text-gray-100">
        <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
            <div className="flex p-4 space-x-4 rounded-lg md:space-x-6  dark:text-black outline-dashed outline-1 outline-[#f44344] ">
                <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 border drop-shadow-md ">
                <FaBook className='h-9 w-9 text-[#f44344]'></FaBook>
                </div>
                <div className="flex flex-col justify-center align-middle">
                    <p className="text-3xl font-semibold leadi">30,000</p>
                    <p className="text-lg">Book Collections</p>
                </div>
            </div>
            <div className="flex p-4 space-x-4 rounded-lg md:space-x-6  dark:text-black outline-dashed outline-1 outline-[#f44344] ">
                <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 border drop-shadow-md ">
                <FaStore className='h-9 w-9 text-[#f44344]'></FaStore>
                </div>
                <div className="flex flex-col justify-center align-middle">
                    <p className="text-3xl font-semibold leadi">1490</p>
                    <p className="text-lg">Our Stores</p>
                </div>
            </div>
            <div className="flex p-4 space-x-4 rounded-lg md:space-x-6  dark:text-black outline-dashed outline-1 outline-[#f44344] ">
                <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 border drop-shadow-md ">
                <FaUsers className='h-9 w-9 text-[#f44344]'></FaUsers>
                </div>
                <div className="flex flex-col justify-center align-middle">
                    <p className="text-3xl font-semibold leadi">110,772</p>
                    <p className="text-lg">Happy Customers</p>
                </div>
            </div>
            <div className="flex p-4 space-x-4 rounded-lg md:space-x-6  dark:text-black outline-dashed outline-1 outline-[#f44344] ">
                <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 border drop-shadow-md ">
                <FaCanadianMapleLeaf className='h-9 w-9 text-[#f44344]'></FaCanadianMapleLeaf>
                </div>
                <div className="flex flex-col justify-center align-middle">
                    <p className="text-3xl font-semibold leadi">510</p>
                    <p className="text-lg">Famous Writers</p>
                </div>
            </div>
            
           
        </div>
    </section>
    );
};

export default State;

