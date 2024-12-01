"use client"
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='pt-28' >
     <div className='flex justify-center items-center'>
      <div className='flex flex-col'>
      <h1>Giới thiệu
      Hamita Studio</h1>
      <span>Chào mừng bạn đến với Hamita, nơi những câu chuyện tình yêu được kể bằng hình ảnh và những khoảnh khắc quý giá được lưu giữ mãi mãi.</span>
      <span>Chúng tôi tự hào là điểm đến tin cậy của các cặp đôi, mang đến những trải nghiệm chụp ảnh cưới và dịch vụ cưới hỏi trọn gói, chuyên nghiệp và đẳng cấp.</span>
      </div>
      <div>
<Image src="/images/gt1.jpg" alt="Giới thiệu Hamita Studio" width={100} height={100}/>
      </div>
     </div>
    </div>
  )
}

export default About