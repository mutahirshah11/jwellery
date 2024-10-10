import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Logo from '../images/Logo.png'
import Image from 'next/image';


const navitems = [
 {item : "HOME"},
 {item : "GALLERY"},
 {item : "INFO"},
 {item : "EVENTS"},
 {item : "PRODUCTS"},
 {item : "STORE LOCATION"},
 {item : "CONTACT US"},
 {item : "LOGIN"},
 
  
]

const Navbar = () => {
  return (
    <div className='animate-fadeInDown '>

        {/* top div  */}

        <div className='bg-[#131313] w-[full] h-[135px] md:h-[190px] lg:h-[226px]   '>
              <div className='flex justify-evenly pt-2'>
              
              {/* number */}
              <p className='text-[#d3d3d3] text-[10px] mt-1 cursor-pointer md:text-[12px] md:px-5 lg:mt-[17px] xl:text-[17px]  '>(800) 998 765</p>
              
              {/* input bar */}
              <div className='flex relative '>
              <input type="text" placeholder='Search .. 'className=' border-[1.5px] border-[#8D8B8B] h-6 w-[220px]  bg-[#131313] rounded-full pl-5 text-[#8D8B8B]  py-1 cursor-text md:h-[30px] md:w-[500px] md:mr-4 lg:w-[600px] xl:w-[900px] lg:h-[36px] lg:mt-3 '    />
              <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#f1f1f1",}} className='size-2  md:size-3 md:mr-7 lg:mt-6 lg:mr-9 absolute  right-2 mt-2 cursor-pointer ' />
              </div>
              
              {/* icons social media  */}
              <div className='flex gap-1 lg:gap-2'>

              <FontAwesomeIcon icon={faFacebookF} style={{color: "#e8cf36",}} className='size-3 mt-1.5 md:size-[15px]  lg:size-[25px] lg:mt-[15px] cursor-pointer ' />
              <FontAwesomeIcon icon={faTwitter} style={{color: "#e8cf36",}} className='size-3 mt-1.5 md:size-[15px]  lg:size-[25px] lg:mt-[16px] cursor-pointer ' />
              <FontAwesomeIcon icon={faInstagram} style={{color: "#e8cf36",}} className='size-3 mt-1.5 md:size-[15px]  lg:size-[25px] lg:mt-[16px] cursor-pointer ' />
              </div>


              </div>

            {/* Logo */}
               <div className=''>
                  <div className='flex justify-center items-center '><Image src={Logo} alt='jwellery Logo' height={60} width={311} className=' w-[200px] h-[40px] mt-5 md:w-[320px]  md:h-[67px] md:mt-5 animate-flipX delay-1000' /></div>
                </div>
               
                {/* Home & other items  */}
                <div>

                  <div className='flex justify-center items-center mt-6 gap-4 md:gap-5 md:mt-8 lg:gap-14 xl:mt-11'>
                     {navitems.map((items,index)=>(
                      <div key={index} className=''>
                        <p className='text-[#E7E7E7] text-[7px] md:text-[13px]  lg:text-[15px] xl:text-[18px] font-mono hover:text-yellow-500 duration-[400ms] hover:underline underline-offset-[15.5px] decoration-[4px] cursor-pointer  '>{items.item}</p>
                      </div>
                     ))}
                  </div>

                </div>

        </div>
    </div>
  )
}

 export default Navbar