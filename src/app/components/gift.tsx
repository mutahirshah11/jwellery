import React from 'react';
import gift from '../images/gift1.png';
import Image from 'next/image';

const Gift = () => {
  return (
    <div className=" "> 

       {/* left side div  */}
      <div className="bg-[#C0C0C0] bg-opacity-10 mt-16 h-[850px] md:h-[700px] w-[max] lg:h-[430px]  lg:flex lg:justify-evenly  "> 
        
        <div className="flex flex-col items-center text-center"> 
          {/* Bangles */}
          <Image src={gift} alt="Bangles" className='mt-5 ml-6'  />
          {/* make a gift and other text  */}
          <p className="text-[24px] text-[#F4F4F4] mt-2 lg:mt-4 underline  decoration-[#E8CF36] underline-offset-[15px] hover:text-[#E8CF36] cursor-pointer ">MAKE A GIFT</p>
          <p className="w-[80%] text-[#bbbbbb] mt-5 lg:mt-10">
            Bangles are timeless accessories, symbolizing beauty, tradition, and cultural pride. They make a perfect gift, adding grace and charm to any occasion.
          </p>
        </div>

            {/* Right side div  */}
        <div className='mt-9 flex flex-col items-center text-center lg:w-[1100px] '>

            {/*  our store text  */}
            <p className='mt-10 text-[24px] text-[#F4F4F4] underline  decoration-[#E8CF36] underline-offset-[15px] hover:text-[#E8CF36] cursor-pointer '>OUR STORE</p>

             {/* other text  */}
            <p className='w-[80%] mt-10 text-[#bbbbbb]'>Discover timeless pieces designed to celebrate your unique style, from stunning bracelets to delicate necklaces. Whether you're shopping for a special occasion or adding a touch of luxury to your everyday look, we offer a collection that captures beauty, tradition, and modern flair. Let your sparkle shine with our exquisite jewelry!</p>

             {/* Find more button  */}
            <button className='px-12 py-[7px] border-[1px] border-[#E8CF36] mt-10 text-[#E8CF36] hover:bg-[#E8CF36] hover:text-[black]'>Find Out More</button>
        </div>




      </div>
    </div>
  );
}

export default Gift;
