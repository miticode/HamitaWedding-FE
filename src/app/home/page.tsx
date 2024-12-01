import Carousel from "@/app/components/carousel/page";
import React from "react";

const Home = () => {
  return (
    <div className="pt-28">
      <Carousel />
    <div className="text-center p-6 bg-[#F8F9FA] shadow-md rounded-lg pt-20">
      <div className="text-3xl font-bold mb-4">HAMITA WEDDING HOUSE</div>
      <hr className="border-t-2 border-black mb-4 w-1/2 mx-auto" />
      <div className="text-lg mb-4">
        <span className="font-semibold text-lg text-pink-600">Hamita Wedding</span>
        <span className="mx-2">-</span>
        <span className="">
        Đơn vị có hệ sinh thái cưới lớn tại Long An sở hữu Phim trường độc
        quyền với diện tích 1.200m2.
        </span>
      </div>
      <div className="text-base mb-4">
        Hamita là nơi sẵn sàng lắng nghe, thấu hiểu cùng câu chuyện của
        khách hàng. Sẵn sàng trao giá trị, đồng hành cùng các cặp đôi trong
        hành trình hạnh phúc của họ.
      </div>
      <div className="text-base mb-4">
        Ngày cưới của bạn cũng là ngày trọng đại nhất của chúng tôi
      </div>
      <div className="text-base mb-4">
        Đằng nào cũng cưới hãy để Hamita chăm sóc cho bạn tận tình trong ngày
        cưới trọng đại nhất
      </div>
      <div className="text-xl font-bold ">VÌ BẠN XỨNG ĐÁNG!</div>
    </div>
    <div>
      
    </div>
    </div>
  );
};

export default Home;
