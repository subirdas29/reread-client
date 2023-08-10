import React from "react";
import Carousel from "react-elastic-carousel";
// import {Playground, Props } from 'docz';
import './Slider/Clientslider.css'
import Item from "./Slider/SimpleItem";
import img1 from "../../../assets/clientsimages/pic01.jpg";
import img2 from "../../../assets/clientsimages/pic02.jpg";
import img3 from "../../../assets/clientsimages/pic03.jpg";
import img4 from "../../../assets/clientsimages/pic04.jpg";
import img5 from "../../../assets/clientsimages/pic05.jpg";
import img6 from "../../../assets/clientsimages/pic06.jpg";
const WhatClientSay = () => {
  return (
    <div className="mx-10 mb-16">
      <h1 className="text-4xl font-bold text-center mb-10">What Client Says</h1>
      <Carousel itemsToShow={1}>
        <Item>
          <section className=" dark:bg-white dark:text-black drop-shadow-xl w-full">
            <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-16 h-16 dark:text-[#F44344]"
              >
                <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
                <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"></path>
              </svg>
              <p className="sm:px-6 sm:py-2 p-0  font-semibold text-center sm:font-bold md:text-4xl sm:text-3xl text-lg lg:max-w-2xl xl:max-w-4xl dark:text-black">
                "This is the best website for resale book.I got my favourite book from here with cheap rate.Thanks for the book "
              </p>
              <div className="flex sm:flex-row flex-col justify-center sm:text-left text-center sm:space-x-3 space-x-1">
                <img
                  src={img1}
                  alt=""
                  className="sm:w-20 sm:h-20 w-12 h-12 bg-center bg-cover rounded-md mx-auto dark:bg-gray-500 dark:bg-gray-700"
                />
                <div>
                  <p className="leadi sm:text-4xl text-lg ">Leroy Jenkins</p>
                  <p className="sm:text-sm text-xs leadi dark:text-gray-600">
                  California
                  </p>
                  <a
                    className="flex items-center py-2 space-x-1 sm:text-sm text-xs dark:text-[#F44344]"
                    href="/"
                  >
                    <span>Read full story</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </Item>
        <Item>
          <section className=" dark:bg-white dark:text-black drop-shadow-xl w-full">
            <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-16 h-16 dark:text-[#F44344]"
              >
                <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
                <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"></path>
              </svg>
              <p className="sm:px-6 sm:py-2 p-0  font-semibold text-center sm:font-bold md:text-4xl sm:text-3xl text-lg lg:max-w-2xl xl:max-w-4xl dark:text-black">
                "This is the best website for resale book.I got my favourite book from here with cheap rate.Thanks for the book "
              </p>
              <div className="flex sm:flex-row flex-col justify-center sm:text-left text-center sm:space-x-3 space-x-1">
                <img
                  src={img2}
                  alt=""
                  className="sm:w-20 sm:h-20 w-12 h-12 bg-center bg-cover rounded-md mx-auto dark:bg-gray-500 dark:bg-gray-700"
                />
                <div>
                  <p className="leadi sm:text-4xl text-lg ">Angelina Gomes</p>
                  <p className="sm:text-sm text-xs leadi dark:text-gray-600">
                  Houston
                  </p>
                  <a
                    className="flex items-center py-2 space-x-1 sm:text-sm text-xs dark:text-[#F44344]"
                    href="/"
                  >
                    <span>Read full story</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </Item>
        <Item>
          <section className=" dark:bg-white dark:text-black drop-shadow-xl w-full">
            <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-16 h-16 dark:text-[#F44344]"
              >
                <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
                <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"></path>
              </svg>
              <p className="sm:px-6 sm:py-2 p-0  font-semibold text-center sm:font-bold md:text-4xl sm:text-3xl text-lg lg:max-w-2xl xl:max-w-4xl dark:text-black">
                "This is the best website for resale book.I got my favourite book from here with cheap rate.Thanks for the book "
              </p>
              <div className="flex sm:flex-row flex-col justify-center sm:text-left text-center sm:space-x-3 space-x-1">
                <img
                  src={img3}
                  alt=""
                  className="sm:w-20 sm:h-20 w-12 h-12 bg-center bg-cover rounded-md mx-auto dark:bg-gray-500 dark:bg-gray-700"
                />
                <div>
                  <p className="leadi sm:text-4xl text-lg ">Debanjan Roy</p>
                  <p className="sm:text-sm text-xs leadi dark:text-gray-600">
                  Los Angeles
                  </p>
                  <a
                    className="flex items-center py-2 space-x-1 sm:text-sm text-xs dark:text-[#F44344]"
                    href="/"
                  >
                    <span>Read full story</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </Item>
        <Item>
          <section className=" dark:bg-white dark:text-black drop-shadow-xl w-full">
            <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-16 h-16 dark:text-[#F44344]"
              >
                <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
                <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"></path>
              </svg>
              <p className="sm:px-6 sm:py-2 p-0  font-semibold text-center sm:font-bold md:text-4xl sm:text-3xl text-lg lg:max-w-2xl xl:max-w-4xl dark:text-black">
                "This is the best website for resale book.I got my favourite book from here with cheap rate.Thanks for the book "
              </p>
              <div className="flex sm:flex-row flex-col justify-center sm:text-left text-center sm:space-x-3 space-x-1">
                <img
                  src={img4}
                  alt=""
                  className="sm:w-20 sm:h-20 w-12 h-12 bg-center bg-cover rounded-md mx-auto dark:bg-gray-500 dark:bg-gray-700"
                />
                <div>
                  <p className="leadi sm:text-4xl text-lg ">Kelli hansen</p>
                  <p className="sm:text-sm text-xs leadi dark:text-gray-600">
                  New York
                  </p>
                  <a
                    className="flex items-center py-2 space-x-1 sm:text-sm text-xs dark:text-[#F44344]"
                    href="/"
                  >
                    <span>Read full story</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </Item>
        <Item>
          <section className=" dark:bg-white dark:text-black drop-shadow-xl w-full">
            <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-16 h-16 dark:text-[#F44344]"
              >
                <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
                <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"></path>
              </svg>
              <p className="sm:px-6 sm:py-2 p-0  font-semibold text-center sm:font-bold md:text-4xl sm:text-3xl text-lg lg:max-w-2xl xl:max-w-4xl dark:text-black">
                "This is the best website for resale book.I got my favourite book from here with cheap rate.Thanks for the book "
              </p>
              <div className="flex sm:flex-row flex-col justify-center sm:text-left text-center sm:space-x-3 space-x-1">
                <img
                  src={img5}
                  alt=""
                  className="sm:w-20 sm:h-20 w-12 h-12 bg-center bg-cover rounded-md mx-auto dark:bg-gray-500 dark:bg-gray-700"
                />
                <div>
                  <p className="leadi sm:text-4xl text-lg ">Jane Gray</p>
                  <p className="sm:text-sm text-xs leadi dark:text-gray-600">
                  Chicago
                  </p>
                  <a
                    className="flex items-center py-2 space-x-1 sm:text-sm text-xs dark:text-[#F44344]"
                    href="/"
                  >
                    <span>Read full story</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </Item>
        <Item>
          <section className=" dark:bg-white dark:text-black drop-shadow-xl w-full">
            <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-16 h-16 dark:text-[#F44344]"
              >
                <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
                <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"></path>
              </svg>
              <p className="sm:px-6 sm:py-2 p-0  font-semibold text-center sm:font-bold md:text-4xl sm:text-3xl text-lg lg:max-w-2xl xl:max-w-4xl dark:text-black">
                "This is the best website for resale book.I got my favourite book from here with cheap rate.Thanks for the book "
              </p>
              <div className="flex sm:flex-row flex-col justify-center sm:text-left text-center sm:space-x-3 space-x-1">
                <img
                  src={img6}
                  alt=""
                  className="sm:w-20 sm:h-20 w-12 h-12 bg-center bg-cover rounded-md mx-auto dark:bg-gray-500 dark:bg-gray-700"
                />
                <div>
                  <p className="leadi sm:text-4xl text-lg ">Jonhey Depp</p>
                  <p className="sm:text-sm text-xs leadi dark:text-gray-600">
                  Philadelphia
                  </p>
                  <a
                    className="flex items-center py-2 space-x-1 sm:text-sm text-xs dark:text-[#F44344]"
                    href="/"
                  >
                    <span>Read full story</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </Item>
      </Carousel>
    </div>
  );
};

export default WhatClientSay;

