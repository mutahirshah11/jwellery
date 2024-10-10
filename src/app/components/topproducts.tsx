import React from 'react'
import Image from 'next/image'
import pic1 from '../images/2jwel1.png'
import pic2 from "../images/2jwel2.png"
import pic3 from "../images/2jwel3.png"
import pic4 from "../images/2jwel4.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'




const jwels = [ 
  {pics: pic1 , name:"Silver Whisper Chain " , price : 'Rs.82300'},
  {pics: pic2 , name:"Dazzling Chic Tops" , price : 'Rs.34500'},
  {pics: pic3 , name:"Eternal Sparkle Ring" , price : 'Rs.23000 '},
  {pics: pic4 , name:"Celestial Beauty Necklace" , price : 'Rs.14800'},

]


const Topproducts = () => {
  return (
    <div className='my-10  lg:px-12 lg:pl-3'>

       {/* heading of top product and see similar products  */}
        <div className='flex justify-between py-5 '>
            <p className='text-[20px] md:text-[24px] lg:text-[24px] text-white ml-8 cursor-pointer  hover:text-[#e8cf36]  hover:underline underline-offset-[15px] decoration-[#e8cf36] decoration-4 dealy'>New Products</p>
            <div className=' text-[#e8cf36] text-[12px] md:text-[16px] mt-[5px] md:mt-[8px] xl:mt-[4px] mr-8 cursor-pointer'><p className='flex gap-1'>Get Similiar Products <FontAwesomeIcon icon={faArrowRight} style={{color: "#e8cf36",}}  className='size-4 mt-[3px] lg:mt-[2px]'/> </p></div>
            
        </div>

        {/* cards section */}
      
      <div className=' flex justify-center items-center my-5 '>
         
         <div className=' grid-cols-1 gap-4 md:gap-20 lg:gap-20 grid  md:grid-cols-2 lg:grid-cols-4 lg:ml-3 xl:ml-4  items-center'>{jwels.map((items , index)=>(
               <div key={index} className='border-[#838181] border-2 rounded-[5px] bg-[#101010] w-[200px] h-[250px]  xl:w-[255px] xl:h-[310px]  items-center hover:animate-popOut'>
                
                {/* image  */}
                <div className='pl-2'><Image src={items.pics} alt='jwellerychain' className='size-[150px] mt-4 ml-4 xl:size-[190px] xl:ml-6 xl:mt-6'
                /></div>

                {/* name  */}

                <div className=' ml-4'>
                  <p className='text-[#c7c7c7] text-[14px]  pl-2 mt-2 xl:text-[17px] xl:pl-5 xl:mt-2.5 font-light ' >{items.name}</p>

                 <div className='flex justify-evenly gap-5 xl:gap-9'>

                  {/* pricing with stars  */}

                  <p className='text-[#E7E7E7] font-semibold pt-3 xl:text-[18px] '>{items.price}</p>
                  <div className='flex mt-[17px] gap-[2px] xl:gap-[3px]'>
                  <FontAwesomeIcon icon={faStar} style={{color: "#e8cf36",}} className='size-3 xl:size-4  '/>
                  <FontAwesomeIcon icon={faStar} style={{color: "#e8cf36",}} className='size-3 xl:size-4  ' />
                  <FontAwesomeIcon icon={faStar} style={{color: "#e8cf36",}} className='size-3 xl:size-4  ' />
                  <FontAwesomeIcon icon={faStar} style={{color: "#e8cf36",}} className='size-3 xl:size-4 ' />
                  <FontAwesomeIcon icon={faStar} style={{color: "#e8cf36",}} className='size-3 xl:size-4  ' />
 
                 </div>
                                   
                 </div>
               </div>
                

                </div>
           ))}</div>

      </div>
        
      
    </div>
  )
}

export default Topproducts


{/* <FontAwesomeIcon icon={faStar} style={{color: "#e8cf36",}} /> */}