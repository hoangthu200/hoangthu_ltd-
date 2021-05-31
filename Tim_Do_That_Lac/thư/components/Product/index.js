/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Link from 'next/link';

const Product = () => (
  <div className="flex flex-wrap -m-4">
    <Link href="/product/1">
      <div className="xl:w-1/4 md:w-1/2 p-4">
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
            <div className="text-gray-400 font-bold text-sm">Da Nang</div>
          </div>
        </div>
      </div>
    </Link>
    <Link href="/product/2">
      <div className="xl:w-1/4 md:w-1/2 p-4">
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
            <div className="text-gray-400 font-bold text-sm">Da Nang</div>
          </div>
        </div>
      </div>
    </Link>
    <Link href="/product/3">
      <div className="xl:w-1/4 md:w-1/2 p-4">
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
              <div>15 mins ago</div>
            </div>
            <div className="text-gray-400 font-bold text-sm">Da Nang</div>
          </div>
        </div>
      </div>
    </Link>
    <Link href="/product/4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 shadow cursor-pointer overflow-hidden rounded-lg">
          <div className="h-40 overflow-hidden">
            <img
              className="h-40 transform transition duration-200 hover:scale-110 rounded w-full object-cover object-center mb-6"
              src="/images/OIP (1).jpg"
              alt="content"
            />
          </div>

          <div className="p-6 pt-4 ">
            <h2 className="text-lg text-black font-medium title-font mb-4">
              VÍ NỮ MÀU HỒNG
            </h2>
            <p className="leading-relaxed text-base">
              Mình có nhặt được một cái ví da nữ màu hồng như ảnh tại phòng B202
            </p>
          </div>
          <div className="border-t justify-between p-4 border-gray-600 flex ">
            <div className="flex text-sm items-center">
              <div className="w-4 h-4 bg-yellow-300 rounded-full mr-2" />
              <div>20 mins ago</div>
            </div>
            <div className="text-gray-400 font-bold text-sm">Da Nang</div>
          </div>
        </div>
      </div>
    </Link>
    <Link href="/product/5">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 shadow cursor-pointer overflow-hidden rounded-lg">
          <div className="h-40 overflow-hidden">
            <img
              className="h-40 transform transition duration-200 hover:scale-110 rounded w-full object-cover object-center mb-6"
              src="/images/Rd6a32d11ea5a339d3fbc41590ca5bbb3.jpg"
              alt="content"
            />
          </div>

          <div className="p-6 pt-4 ">
            <h2 className="text-lg text-black font-medium title-font mb-4">
              CHỨNG MINH NHÂN DÂN
            </h2>
            <p className="leading-relaxed text-base">
              Mình có nhặt được 1 CMND như hình tại sảnh chờ khu A
            </p>
          </div>
          <div className="border-t justify-between p-4 border-gray-600 flex ">
            <div className="flex text-sm items-center">
              <div className="w-4 h-4 bg-yellow-300 rounded-full mr-2" />
              <div>30 mins ago</div>
            </div>
            <div className="text-gray-400 font-bold text-sm">Da Nang</div>
          </div>
        </div>
      </div>
    </Link>
    <Link href="/product/6">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 shadow cursor-pointer overflow-hidden rounded-lg">
          <div className="h-40 overflow-hidden">
            <img
              className="h-40 transform transition duration-200 hover:scale-110 rounded w-full object-cover object-center mb-6"
              src="/images/120417913_344167240362271_7917613400886231733_n.jpg"
              alt="content"
            />
          </div>

          <div className="p-6 pt-4 ">
            <h2 className="text-lg text-black font-medium title-font mb-4">
              VÉ GIỮ XE
            </h2>
            <p className="leading-relaxed text-base">
              Mình có nhặt được vé giữ xe ở nhà giữ xe của trường như hình
            </p>
          </div>
          <div className="border-t justify-between p-4 border-gray-600 flex ">
            <div className="flex text-sm items-center">
              <div className="w-4 h-4 bg-yellow-300 rounded-full mr-2" />
              <div>35 mins ago</div>
            </div>
            <div className="text-gray-400 font-bold text-sm">Da Nang</div>
          </div>
        </div>
      </div>
    </Link>
    <Link href="/product/7">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 shadow cursor-pointer overflow-hidden rounded-lg">
          <div className="h-40 overflow-hidden">
            <img
              className="h-40 transform transition duration-200 hover:scale-110 rounded w-full object-cover object-center mb-6"
              src="/images/1.jpg"
              alt="content"
            />
          </div>
          <div className="p-6 pt-4 ">
            <h2 className="text-lg text-black font-medium title-font mb-4">
              ĐIỆN THOẠI IPHONE 12
            </h2>
            <p className="leading-relaxed text-base">
              mình có lượm được 1 chiếc điện thoại iphone 12 như hình tại phòng A105
            </p>
          </div>
          <div className="border-t justify-between p-4 border-gray-600 flex ">
            <div className="flex text-sm items-center">
              <div className="w-4 h-4 bg-yellow-300 rounded-full mr-2" />
              <div>40 mins ago</div>
            </div>
            <div className="text-gray-400 font-bold text-sm">Da Nang</div>
          </div>
        </div>
      </div>
    </Link>
    <Link href="/product/8">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 shadow cursor-pointer overflow-hidden rounded-lg">
          <div className="h-40 overflow-hidden">
            <img
              className="h-40 transform transition duration-200 hover:scale-110 rounded w-full object-cover object-center mb-6"
              src="/images/R5ea1c7052eb1fce74202b9c1c62cb804.jpg"
              alt="content"
            />
          </div>

          <div className="p-6 pt-4 ">
            <h2 className="text-lg text-black font-medium title-font mb-4">
              BẰNG LÁI XE
            </h2>
            <p className="leading-relaxed text-base">
              Mình có nhặt được 1 bằng lái xe mang tên như hình thư viện trường
            </p>
          </div>
          <div className="border-t justify-between p-4 border-gray-600 flex ">
            <div className="flex text-sm items-center">
              <div className="w-4 h-4 bg-yellow-300 rounded-full mr-2" />
              <div>50 mins ago</div>
            </div>
            <div className="text-gray-400 font-bold text-sm">Da Nang</div>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default Product;
