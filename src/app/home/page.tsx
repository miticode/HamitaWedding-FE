import Carousel from "@/app/components/carousel/page";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaHeart, FaCamera, FaVideo, FaTshirt } from "react-icons/fa";


const Home = () => {
 
  const Service = [
    {
      title: "Chụp ảnh tiệc cưới",
      description: "Dịch vụ chụp ảnh tiệc cưới chuyên nghiệp, đẳng cấp",
      image: "/images/service1.jpg",
      icon: <FaCamera />,
    },
    {
      title: "Chụp ngoại cảnh",
      description: "Dịch vụ chụp ảnh tiệc cưới chuyên nghiệp, đẳng cấp",
      image: "/images/service3.jpg",
      icon: <FaCamera />,
    },
    {
      title: "Quay phim truyền thống - Phóng sự - Fly cam",
      description: "Dịch vụ thuê váy cưới chuyên nghiệp, đẳng cấp",
      image: "/images/service4.jpg",
      icon: <FaVideo />,
    },
    {
      title: "Thuê váy cưới",
      description: "Dịch vụ thuê váy cưới chuyên nghiệp, đẳng cấp",
      image: "/images/service2.jpg",
      icon: <FaHeart />,
    },
    {
      title: "Thuê áo dài cô dâu",
      description: "Dịch vụ thuê váy cưới chuyên nghiệp, đẳng cấp",
      image: "/images/service5.jpg",
      icon: <FaHeart />,
    },
    {
      title: "Thuê Vest chú rể",
      description: "Dịch vụ thuê váy cưới chuyên nghiệp, đẳng cấp",
      image: "/images/service6.jpg",
      icon: <FaTshirt />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-white to-pink-50"
    >
      <div className="pt-28">
        <Carousel />

        {/* Hero Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center p-8 bg-white/80 backdrop-blur-sm shadow-xl rounded-xl mx-4 md:mx-12 lg:mx-24 mt-10"
        >
          <h1 className="text-4xl font-bold mb-6 text-gray-800 tracking-wide">
            HAMITA WEDDING HOUSE
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto mb-8"></div>

          <div className="space-y-6 max-w-3xl mx-auto">
            <p className="text-xl">
              <span className="font-semibold text-pink-600">
                Hamita Wedding
              </span>
              <span className="mx-2">-</span>
              <span className="text-gray-700">
                Đơn vị có hệ sinh thái cưới lớn tại Long An sở hữu Phim trường
                độc quyền với diện tích 1.200m2.
              </span>
            </p>

            <p className="text-gray-600 leading-relaxed">
              Hamita là nơi sẵn sàng lắng nghe, thấu hiểu cùng câu chuyện của
              khách hàng...
            </p>
          </div>
        </motion.div>

        {/* Services Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            BẢNG GIÁ DỊCH VỤ
          </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16">
            {Service.map((service, index) => (
              <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative overflow-hidden rounded-xl shadow-lg h-96"
              >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <Image
                src={service.image}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="relative z-20 p-6 h-full flex flex-col justify-end">
                <div className="text-white">
                <div className="flex items-center gap-2 mb-3">
                  {service.icon}
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-200">{service.description}</p>
                </div>
              </div>
              </motion.div>
            ))}
            </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Home;
