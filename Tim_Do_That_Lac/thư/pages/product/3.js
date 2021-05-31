/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-unresolved */
import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Product from 'components/Product';
import Link from 'next/link';

const ProductDetail = () => (
  <div>
    <Header />
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="/images/86f495e1f2ea7d3985cc2f72bfdc534e.jpg"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              Đồ dùng cá nhân
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              CÂY DÙ HÃNG UV
            </h1>
            <div className="flex mb-4">
              <div className="flex text-sm items-center">
                <div className="w-4 h-4 bg-yellow-300 rounded-full mr-2" />
                <div>15 mins ago</div>
              </div>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                Đà Nẵng
              </span>
            </div>
            <div className="flex items-center">
              <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                <a href="#" className="block relative">
                  <img
                    alt="profil"
                    src="https://www.tailwind-kit.com/images/person/6.jpg"
                    className="mx-auto object-cover rounded-full h-10 w-10 "
                  />
                </a>
              </div>
              <div className="">
                <div className="font-bold text-yellow-500">
                  Nguyễn Hữu Nhân
                </div>
                <div>
                  0386443555
                </div>
              </div>
            </div>
            <p className="leading-relaxed mt-6">
              Mình có nhặc được 1 cây dụ hiệu UV như hình tại văn phòng đoàn trường
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5" />
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900" />
              <button className="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">
                Contact
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Latest news
            </h1>
            <div className="h-1 w-20 bg-yellow-500 rounded" />
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          <Link href="/product/2">
            <div className="lg:w-1/3 md:w-1/2 p-4">
              <div className="bg-gray-100 shadow cursor-pointer overflow-hidden rounded-lg">
                <div className="h-40 overflow-hidden">
                  <img
                    className="h-40 transform transition duration-200 hover:scale-110 rounded w-full object-cover object-center mb-6"
                    src="/images/OIP (2).jpg"
                    alt="content"
                  />
                </div>

                <div className="p-6 pt-4 ">
                  <h2 className="text-lg text-black font-medium title-font mb-4">
                    MÁY TÍNH CASIO FX570
                  </h2>
                  <p className="leading-relaxed text-base">
                    Tôi có nhặt được 1 cái Máy tính casio fx570 như hình tại phòng A304
                  </p>
                </div>
                <div className="border-t justify-between p-4 border-gray-600 flex ">
                  <div className="flex text-sm items-center">
                    <div className="w-4 h-4 bg-yellow-300 rounded-full mr-2" />
                    <div>5 mins ago</div>
                  </div>
                  <div className="text-gray-400 font-bold text-sm">
                    Da Nang
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/product/2">
            <div className="lg:w-1/3 md:w-1/2 p-4">
              <div className="bg-gray-100 shadow cursor-pointer overflow-hidden rounded-lg">
                <div className="h-40 overflow-hidden">
                  <img
                    className="h-40 transform transition duration-200 hover:scale-110 rounded w-full object-cover object-center mb-6"
                    src="/images/20190419_7877f59e7cce832e20a9a1c71d48493b_1555651515.jpg"
                    alt="content"
                  />
                </div>

                <div className="p-6 pt-4 ">
                  <h2 className="text-lg text-black font-medium title-font mb-4">
                    CỤC SẠC MACBOOK
                  </h2>
                  <p className="leading-relaxed text-base">
                    Tôi có nhặt được 1 cục sạc macbook tại phòng máy tính 1
                  </p>
                </div>
                <div className="border-t justify-between p-4 border-gray-600 flex ">
                  <div className="flex text-sm items-center">
                    <div className="w-4 h-4 bg-yellow-300 rounded-full mr-2" />
                    <div>10 mins ago</div>
                  </div>
                  <div className="text-gray-400 font-bold text-sm">
                    Da Nang
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/product/2">
            <div className="lg:w-1/3 md:w-1/2 p-4">
              <div className="bg-gray-100 shadow cursor-pointer overflow-hidden rounded-lg">
                <div className="h-40 overflow-hidden">
                  <img
                    className="h-40 transform transition duration-200 hover:scale-110 rounded w-full object-cover object-center mb-6"
                    src="/images/86f495e1f2ea7d3985cc2f72bfdc534e.jpg"
                    alt="content"
                  />
                </div>

                <div className="p-6 pt-4 ">
                  <h2 className="text-lg text-black font-medium title-font mb-4">
                    CÂY DÙ HÃNG UV
                  </h2>
                  <p className="leading-relaxed text-base">
                    Mình có nhặc được 1 cây dụ hiệu UV như hình tại văn phòng đoàn trường
                  </p>
                </div>
                <div className="border-t justify-between p-4 border-gray-600 flex ">
                  <div className="flex text-sm items-center">
                    <div className="w-4 h-4 bg-yellow-300 rounded-full mr-2" />
                    <div> mins ago</div>
                  </div>
                  <div className="text-gray-400 font-bold text-sm">
                    Da Nang
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default ProductDetail;
