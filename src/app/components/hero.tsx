import React from 'react';
import Image from 'next/image';
import bg from '../images/slider .png';  // Make sure the path is correct
import ring from '../images/rings.png';


const Hero = () => {
  return (
    <div className='relative w-full h-[250px] md:h-[260px] lg:h-[430px] xl:h-[460px]'> 
      {/* Background Image */}
      <Image
        src={bg}
        alt='gray-background'
        layout='fill' // Makes it cover the whole container
        objectFit='cover' // Ensures the image covers the div without stretching
      />
      
      

    <div className=' flex justify-center items-center '>
      {/* Ring Image */}

      {/* <div className='absolute left-3 bottom-[120px] lg:bottom-[200px]'><Image src={left} alt='arrow'/> </div> */}
      <div className='absolute top-16 size-40  left-5 md:size-[250px] md:ml-10 lg:size-[370px] lg:mt-8 xl:size-[450px] xl:ml-20 xl:mt-5 animate-bounceIn'>
        <Image 
          src={ring} 
          alt='ring-picture'
          
          objectFit='contain' // Keeps the aspect ratio
          
        />


      </div>


         {/* Text  */}

         <div className= ' absolute text-[#F4F4F4] max-w-[350px] h-[100px] ml-44 mt-48 md:ml-[270px] lg:mt-[260px] xl:mt-[320px] animate-bounceIn transition duration-1000'>
          
        <div className='inline-flex'><span className='text-white text-[20px] font-bold gap-1 md:text-[25px]  lg:text-[33px]  lg:w-[500px] xl:text-[35px]  '>NEW COLLECTION <p className=' text-[#E8CF36] '>"IN DIAMONDS"</p></span></div>
        
        <p className='text-[10px]  text-[#E7E7E7] font-sans mt-1 md:text-[12px] md:w-[420px] lg:text-[15px] lg:w-[530px] xl:text-[16px] xl:w-[650px] '>Step into the world of timeless elegance and unparalleled brilliance with our brand-new diamond collection. Each piece is meticulously crafted to perfection, combining the finest quality diamonds with stunning designs </p>
        <button className='text-[#E8CF36] border-[#E8CF36] border-2 rounded-md text-[10px] md:text-[13px] px-3 py-1 md:px-6 md:py-2.5 mt-2 lg:text-[15px] lg:mt-5 xl:text-[16px] xl:mt-6 hover:bg-yellow-400/90 hover:text-black hover:font-semibold'>FIND OUT MORE</button>
      
       
      </div>


      
       
      </div>

    </div>
  );
};

export default Hero;
