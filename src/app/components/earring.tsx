import React from 'react'
import Image from 'next/image'
import ear from "../images/earmy.png"
import earring from '../images/toppng.png'


const Earring = () => {
    return (
      <div className='flex justify-center px-8 '>
       
        <div className='bg-[#C0C0C0] bg-opacity-10 w-[90%] h-[350px] my-10 rounded-lg  lg:w-[1200px] lg:h-[290px] xl:w-[1200px] xl:h-[290px] lg:flex lg:justify-evenly cursor-pointer '>
            
           {/* Earrings   */}
          <div className=''>
            <Image src={earring} alt='Earrings' className='size-[105px] md:size-[130px] lg:size-[200px] xl:size-[200px] lg:ml-10 lg:mt-10  hover:animate-popOut' />
          </div>

          

           {/* text  */}
           <div className=' h-[150px] flex justify-center items-center px-10 lg:w-[515px] lg:mt-16 lg:ml-24   '>
           
           <div className=' text-center md:mb-10 lg:mb-0 xl:ml-2 cursor-pointer'>
             <p className='relative text-[18px] md:text-[22px]  mt-5 font-bold text-[#F4F4F4] hover:text-[#e8cf36]  hover:underline underline-offset-[15px] decoration-[#e8cf36] decoration-4 dealy '>Silver-Diamond Earring</p>
             <p className='sm:text-[11px] text-[#bbbbbb] mt-5 md:text-[19px] lg:w-[590px] xl:w-[650px]'>Discover stunning silver and diamond jewelry at Silver Diamond Earning. Shop our unique collection online and elevate your style with elegant pieces for every occasion.</p>
             <p className='text-[#E8CF36] md:text-[18px] mt-5 cursor-pointer hover:underline'>Learn More</p>
           </div>

         </div>

          {/* ear  */}
          <div className=' xs:hidden lg:block '>
            <div ><Image src={ear} alt='Ear with a Earring' className=' size-[290px] xl:ml-[50px] hover:opacity-90 '/></div>
          </div>

          
        </div>
      </div>
    );
  };
  

export default Earring