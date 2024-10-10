import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone ,faMessage } from '@fortawesome/free-solid-svg-icons'
import playstore from '../images/pngegg (18) 2.png'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


const UsefulLinks = [
    {name:"Delivery Details"},
    {name:"International Shipping"},
    {name:"Payment Options"},
    {name:"Track Your Order"},
    {name:"Return"},
    {name:"Find a Store"},
]

const Information = [ 
    {name:"Career"},
    {name:"Blog"},
    {name:"Offer Details"},
    {name:"Help & FAQs"},
    {name:"About"},
]



const Footer = () => {
  return (
    <div>
        <div className='bg-[#131313] w-full h-[460px] md:h-[300px] lg:h-[360px] ' >
           <div>
             <div className=' flex flex-col justify-center items-center 
               '>
               <div className=' grid md:grid-cols-4 grid-cols-2 lg:gap-10 xl:gap-28'>     


                {/* Useful Link  */}
                <div className='mt-10 xl:mt-[60px] '>
                <p className='text-[#E8CF36] mb-6 text-[11px] lg:text-[21px]'>Useful Links</p>
                {UsefulLinks.map((items,link )=>(
                 <div key={link}>
                    
                    <div><p className='text-[#bbbbbb] text-[10px]  lg:text-[19px] mt-2 hover:text-[white]'>{items.name}</p></div>
                 </div>
                 ))}    
                </div> 



                 {/* Information */}
                 <div className='mt-10 xl:mt-[58px]  '>
                <p className='text-[#E8CF36] mb-6 text-[11px] lg:text-[21px]'>Information</p>
                {Information.map((items , link)=>(
                 <div key={link}>
                    
                    <div><p className='text-[#bbbbbb] text-[10px] lg:text-[19px] mt-2 hover:text-[white]'>{items.name}</p></div>
                 </div>
                 ))}    
                </div> 



                 {/* contact us  */}
                 <div className='mt-10 xl:mt-[58px] cursor-pointer'>
                <p className='text-[#E8CF36] mb-6 text-[11px] lg:text-[21px]'>Contact Us</p>
                   
                   {/* Mail  */}
                  <div className='flex'><FontAwesomeIcon icon={faEnvelope} style={{color: "#e8cf36",}} className='size-2  lg:size-5 mt-1.5' /> <p className='ml-2 text-[#bbbbbb] text-[10px] lg:text-[15px] lg:mt-1'>Mail Us</p> </div>
                  
                  {/* Phone */}
                  <div className='flex mt-2'><FontAwesomeIcon icon={faPhone} style={{color: "#e8cf36",}} className='size-2 lg:size-5 mt-1.5' /> <p className='ml-2 text-[#bbbbbb] text-[10px] lg:text-[15px] lg:mt-1'>+99 6975267221</p> </div>
                   
                   {/* Chat  */}
                  <div className='flex mt-2'><FontAwesomeIcon icon={faMessage} style={{color: "#e8cf36",}} className='size-2 lg:size-5 mt-1.5' /> <p className='ml-2 text-[#bbbbbb] text-[10px] lg:text-[15px] lg:mt-1'>Chat to Us</p> </div>


                </div> 


                 {/* app */}
                 <div className='mt-10 xl:mt-[55px]'>
                 <p className='text-[#E8CF36] mb-6 text-[11px] lg:text-[21px]'>Download The Apps </p>
                 <div><Image src={playstore} alt='playstore' className='w-[112px] h-[85px] lg:w-[198px] lg:h-[126px] cursor-pointer ' /></div>

                 <div className='flex gap-3  mt-5'>

                  <p className=' text-[#E8CF36] lg:mt-3 '>Follow us On </p>
                  <FontAwesomeIcon icon={faFacebookF} style={{color: "#e8cf36",}} className='size-3 mt-1.5 cursor-pointer lg:size-6 ' />
                  <FontAwesomeIcon icon={faTwitter} style={{color: "#e8cf36",}}     className='size-3  mt-1.5 cursor-pointer lg:size-6' />
                  <FontAwesomeIcon icon={faInstagram} style={{color: "#e8cf36",}}     className='size-3 mt-1.5 cursor-pointer lg:size-6 ' />

                 </div>
                    
                </div> 



                </div>

              </div>
           </div>
        </div>
    </div>
    
  )
}

export default Footer