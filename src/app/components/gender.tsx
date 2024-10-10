import React from 'react'
import Image from 'next/image'
import man2 from '../images/man2.jpg'
import Women1 from '../images/women1.jpg'
import kid2 from '../images/kid2.jpg'

const categories = [

  {picture : Women1 , name : "Women" , more : "Explore >"},
  {picture : man2, name : "Men" , more : "Explore >"},
  {picture : kid2 , name : "Kids" , more : "Explore >"}
]


const Gender = () => {
  return (
    <div>
               {/* Headings  */}
      <div className='flex justify-center  '>
            <div className='my-14  md:mt-14 flex flex-col items-center '>
            <p className='text-[#E8CF36] text-[25px] md:text-[30px] font-bold  '>Shop By Gender</p>
            <p className='text-[#bbbbbb] text-[13px] md:text-[14px]'>Explore our latest designs curated just for you!</p>
            </div>
        
        </div>


         <div className=' flex justify-center items-center'>
                {/* Cards */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10  '>
               {categories.map((items , index)=>(
                
                  <div key={index} className=' w-[230px] h-[200px] md:w-[280px] md:h-[230px]  xl:w-[340px] xl:h-[275px] border-[1px] border-[#969595] rounded-md bg-[#131313] hover:animate-popOut'>
                    <div><Image src={items.picture} alt='Person Picture' className='rounded-md'/></div>
                    <div  >
                      <div className='text-white flex justify-between mt-2 '>
                      <p className='text-[#E8CF36] ml-3 xl:ml-5 xl:mt-[1px] cursor-pointer'>{items.name}</p>
                      <p className='text-[#bbbbbb] text-[12px] mr-3 mt-1 xl:mr-5 cursor-pointer hover:opacity-60 '>{items.more}</p>
                      </div>
                    </div>
                  </div>
               ))}
            </div>
          
          </div>

    </div>
  )
}

export default Gender