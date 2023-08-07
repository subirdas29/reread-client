import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllDealsBook from "./AllDealsBook";
import bg_banner_img from "../../../assets/Deals-book-bg/bh.png";
const DealsWeek = () => {
  // const dealsBook = useLoaderData()
  // console.log(dealsBook)
  const [dealsBook, setDealsBook] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => {
        setDealsBook(data);
      });
  }, []);
  return (
    <div>
      <p className="text-4xl font-bold text-center mb-10">
        Best Deals Of The Week!
      </p>
      <div className="grid lg:grid-cols-3 mx-10 ">
        <div
          className="lg:col-span-2 w-full relative"
          //    style={{ backgroundImage: `url(${bg_banner_img})` }}
        >
          <img className="lg:min-h-[1020px] min-h-[600px] lg:mb-0 mb-6 " src={bg_banner_img} />
          <div className=" w-full  my-auto lg:p-20 md:p-14 sm:p-12 px-10 text-center absolute lg:bottom-44 md:bottom-40 sm:bottom-32 bottom-20  text-[#FFFFFF] grid justify-items-start ">
            <h1 className="lg:mb-5 mb-2 lg:text-xl md:text-sm sm:text-sm text-xs text-left">NEW YEAR, NEW BOOKS</h1>
            <h1 className="lg:mb-5 mb-2  font-bold lg:text-5xl md:text-3xl text-2xl text-left">
              The 19 Best New YA Books of January
            </h1>
            <h1 className="lg:mb-5 text-left">
              Without further ado,here are some of the most anticipated YA book
              coming out this January.
             
            </h1>

            <button className="bg-white lg:px-14 md:px-8 sm:px-8 px-4 lg:mb-5 md:mt-5 mt-5 rounded-full text-black hover:text-white hover:outline outline-1  outline-white lg:py-3 md:py-2 sm:py-2 py-1 lg:text-lg  text-sm hover:bg-[#F44344] ">
              See More
            </button>
          </div>
        </div>

        <div className="">
          {dealsBook?.map((dealBook) => (
            <AllDealsBook
              key={dealBook.book_id}
              dealBook={dealBook}
            ></AllDealsBook>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default DealsWeek;
