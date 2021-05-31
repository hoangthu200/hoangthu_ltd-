/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unreachable */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-unresolved */
import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Link from 'next/link';

const Item = () => (
  <div className="flex lg:w-3/4 flex-wrap -m-4">
    <Link href="/product/3">
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
              <div>15 mins ago</div>
            </div>
            <div className="text-gray-400 font-bold text-sm">
              Da Nang
            </div>
          </div>
        </div>
      </div>
    </Link>
    <Link href="/product/4">
      <div className="lg:w-1/3 md:w-1/2 p-4">
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
            <div className="text-gray-400 font-bold text-sm">
              Da Nang
            </div>
          </div>
        </div>
      </div>
    </Link>
    <Link href="/product/11">
      <div className="lg:w-1/3 md:w-1/2 p-4">
        <div className="bg-gray-100 shadow cursor-pointer overflow-hidden rounded-lg">
          <div className="h-40 overflow-hidden">
            <img
              className="h-40 transform transition duration-200 hover:scale-110 rounded w-full object-cover object-center mb-6"
              src="/images/68c9e1cb260d59a06316522efe8ed7db_tn.jpg"
              alt="content"
            />
          </div>

          <div className="p-6 pt-4 ">
            <h2 className="text-lg text-black font-medium title-font mb-4">
              MŨ LƯỠI TRAI MÀU CAM
            </h2>
            <p className="leading-relaxed text-base">
              Mình có lượm được 1 cái mũ màu cam tại hộc bàn phòng B105
            </p>
          </div>
          <div className="border-t justify-between p-4 border-gray-600 flex ">
            <div className="flex text-sm items-center">
              <div className="w-4 h-4 bg-yellow-300 rounded-full mr-2" />
              <div>1 Hour ago</div>
            </div>
            <div className="text-gray-400 font-bold text-sm">
              Da Nang
            </div>
          </div>
        </div>
      </div>
    </Link>
    <Link href="/product/12">
      <div className="lg:w-1/3 md:w-1/2 p-4">
        <div className="bg-gray-100 shadow cursor-pointer overflow-hidden rounded-lg">
          <div className="h-40 overflow-hidden">
            <img
              className="h-40 transform transition duration-200 hover:scale-110 rounded w-full object-cover object-center mb-6"
              src="/images/op-chia-khoa-xe-o-to-toyota-v4.jpg"
              alt="content"
            />
          </div>

          <div className="p-6 pt-4 ">
            <h2 className="text-lg text-black font-medium title-font mb-4">
              CHÌA KHÓA XE OTO
            </h2>
            <p className="leading-relaxed text-base">
              Mình có nhặt được 1 chìa khóa xe oto như hình tại tầng 2 trước phòng a206
            </p>
          </div>
          <div className="border-t justify-between p-4 border-gray-600 flex ">
            <div className="flex text-sm items-center">
              <div className="w-4 h-4 bg-yellow-300 rounded-full mr-2" />
              <div>1 Hour 20 min ago</div>
            </div>
            <div className="text-gray-400 font-bold text-sm">
              Da Nang
            </div>
          </div>
        </div>
      </div>
    </Link>
    <Link href="/product/13">
      <div className="lg:w-1/3 md:w-1/2 p-4">
        <div className="bg-gray-100 shadow cursor-pointer overflow-hidden rounded-lg">
          <div className="h-40 overflow-hidden">
            <img
              className="h-40 transform transition duration-200 hover:scale-110 rounded w-full object-cover object-center mb-6"
              src="/images/cam_nag_chon_vi_da_nam14.jpg"
              alt="content"
            />
          </div>

          <div className="p-6 pt-4 ">
            <h2 className="text-lg text-black font-medium title-font mb-4">
              VÍ DA NAM
            </h2>
            <p className="leading-relaxed text-base">
              Mình có nhặt được 1 ví da nam như hình tại bàn số 8 bên trái phòng A104
            </p>
          </div>
          <div className="border-t justify-between p-4 border-gray-600 flex ">
            <div className="flex text-sm items-center">
              <div className="w-4 h-4 bg-yellow-300 rounded-full mr-2" />
              <div>1 Hour 30 mins ago</div>
            </div>
            <div className="text-gray-400 font-bold text-sm">
              Da Nang
            </div>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

const ItemDoDienTu = () => (
  <div className="flex lg:w-3/4 flex-wrap -m-4">
    <Link href="/product/1">
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
              MÁY TÍNH CASIO FX 570
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
    <Link href="/product/3">
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
              <div>15 mins ago</div>
            </div>
            <div className="text-gray-400 font-bold text-sm">
              Da Nang
            </div>
          </div>
        </div>
      </div>
    </Link>
    <Link href="/product/4">
      <div className="lg:w-1/3 md:w-1/2 p-4">
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
            <div className="text-gray-400 font-bold text-sm">
              Da Nang
            </div>
          </div>
        </div>
      </div>
    </Link>
    <Link href="/product/5">
      <div className="lg:w-1/3 md:w-1/2 p-4">
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
            <div className="text-gray-400 font-bold text-sm">
              Da Nang
            </div>
          </div>
        </div>
      </div>
    </Link>
    <Link href="/product/6">
      <div className="lg:w-1/3 md:w-1/2 p-4">
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
            <div className="text-gray-400 font-bold text-sm">
              Da Nang
            </div>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

const ItemGiayTo = () => (
  <div className="flex lg:w-3/4 flex-wrap -m-4">
    <Link href="/product/1">
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
              MÁY TÍNH CASIO FX 570
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
    <Link href="/product/14">
      <div className="lg:w-1/3 md:w-1/2 p-4">
        <div className="bg-gray-100 shadow cursor-pointer overflow-hidden rounded-lg">
          <div className="h-40 overflow-hidden">
            <img
              className="h-40 transform transition duration-200 hover:scale-110 rounded w-full object-cover object-center mb-6"
              src="/images/pin-sac-du-phong-remax-rpp149-10000mah-loi-lipolymer-2-cong-sac-1598253469-6e1edc.jpg"
              alt="content"
            />
          </div>

          <div className="p-6 pt-4 ">
            <h2 className="text-lg text-black font-medium title-font mb-4">
              SẠC DỰ PHÒNG
            </h2>
            <p className="leading-relaxed text-base">
              Mình có nhặt được 1 cục sạc dự phòng tại phòng A305
            </p>
          </div>
          <div className="border-t justify-between p-4 border-gray-600 flex ">
            <div className="flex text-sm items-center">
              <div className="w-4 h-4 bg-yellow-300 rounded-full mr-2" />
              <div>20 mins ago</div>
            </div>
            <div className="text-gray-400 font-bold text-sm">
              Da Nang
            </div>
          </div>
        </div>
      </div>
    </Link>
    <Link href="/product/7">
      <div className="lg:w-1/3 md:w-1/2 p-4">
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
            <div className="text-gray-400 font-bold text-sm">
              Da Nang
            </div>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

const ItemDocanhan = () => (
  <div className="flex lg:w-3/4 flex-wrap -m-4">
    <Link href="/product/5">
      <div className="lg:w-1/3 md:w-1/2 p-4">
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
            <div className="text-gray-400 font-bold text-sm">
              Da Nang
            </div>
          </div>
        </div>
      </div>
    </Link>
    <Link href="/product/6">
      <div className="lg:w-1/3 md:w-1/2 p-4">
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
            <div className="text-gray-400 font-bold text-sm">
              Da Nang
            </div>
          </div>
        </div>
      </div>
    </Link>
    <Link href="/product/8">
      <div className="lg:w-1/3 md:w-1/2 p-4">
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
            <div className="text-gray-400 font-bold text-sm">
              Da Nang
            </div>
          </div>
        </div>
      </div>
    </Link>
    <Link href="/product/10">
      <div className="lg:w-1/3 md:w-1/2 p-4">
        <div className="bg-gray-100 shadow cursor-pointer overflow-hidden rounded-lg">
          <div className="h-40 overflow-hidden">
            <img
              className="h-40 transform transition duration-200 hover:scale-110 rounded w-full object-cover object-center mb-6"
              src="/images/Rddfbbff886f5f0b5a487cfe9f16ad948.jpg"
              alt="content"
            />
          </div>

          <div className="p-6 pt-4 ">
            <h2 className="text-lg text-black font-medium title-font mb-4">
              THẺ SINH VIÊN
            </h2>
            <p className="leading-relaxed text-base">
              Mình có nhặt được thẻ sinh viên tại sảnh khu B như hình
            </p>
          </div>
          <div className="border-t justify-between p-4 border-gray-600 flex ">
            <div className="flex text-sm items-center">
              <div className="w-4 h-4 bg-yellow-300 rounded-full mr-2" />
              <div>55 mins ago</div>
            </div>
            <div className="text-gray-400 font-bold text-sm">
              Da Nang
            </div>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

const ProductList = () => {
  const [step, setStep] = React.useState(0);
  const [data, setData] = React.useState({
    0: [0, 1, 2, 3, 4, 5, 6],
    1: [0, 1, 2, 3],
    2: [0, 1, 2],
    3: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  });

  const a = (step1) => {
    switch (step1) {
      // chỗ ni là anh thêm cách trường hợp như kiểu đồ cá nhân vô nữa
      case 0:
        return <ItemDoDienTu />;
      case 1:
        return <ItemGiayTo />;
      default: return <Item />;
      case 2:
        return <ItemDocanhan />;
    }
    return;
  };

  return (
    <div>
      <Header />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Category
              </h1>
              <div className="h-1 w-20 bg-yellow-500 rounded" />
            </div>
          </div>
          <div className="flex">
            <div className="lg:w-1/4 pr-2">
              <div className="mb-4">
                <input
                  type="text"
                  id="create-account-pseudo"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  name="pseudo"
                  placeholder="Search"
                />
              </div>
              <div className="flex flex-col mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow">
                <ul className="flex flex-col divide divide-y">
                  <li onClick={() => setStep(0)} className="flex flex-row">
                    <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                      <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                        <a href="#" className="block relative">
                          <img
                            alt="profil"
                            src="images/7ed3336192a31e7783d41682b1bfb302.jpg"
                            className="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div className="font-medium dark:text-white">Tất cả</div>
                    </div>
                  </li>
                  <li onClick={() => setStep(1)} className="flex flex-row">
                    <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                      <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                        <a href="#" className="block relative">
                          <img
                            alt="profil"
                            src="images/1.jpg"
                            className="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div className="font-medium dark:text-white">
                        Đồ dùng điện tử
                      </div>
                    </div>
                  </li>
                  <li onClick={() => setStep(2)} className="flex flex-row">
                    <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                      <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                        <a href="#" className="block relative">
                          <img
                            alt="profil"
                            src="images/120417913_344167240362271_7917613400886231733_n.jpg"
                            className="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div className="font-medium dark:text-white">Giấy tờ</div>
                    </div>
                  </li>
                  <li onClick={() => setStep(3)} className="flex flex-row">
                    <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                      <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                        <a href="#" className="block relative">
                          <img
                            alt="profil"
                            src="images/86f495e1f2ea7d3985cc2f72bfdc534e.jpg"
                            className="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div className="font-medium dark:text-white">
                        Đồ dùng cá nhân
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              {
                a(step)
              }
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductList;
