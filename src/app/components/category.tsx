import React from 'react'
import Image from 'next/image'
import Cat1 from '../images/cat1.png'
import Cat2 from '../images/cat2.png'
import Cat3 from '../images/cat3.png'
import Cat4 from '../images/cat4.png'
import Cat5 from '../images/cat5.png'
import Cat6 from '../images/cat6.png'
import Cat7 from '../images/cat7.png'
import Cat8 from '../images/cat8.png'
import Cat9 from '../images/cat9.png'
import Cat10 from '../images/cat10.png'


const Categories = [ 
    {picture : Cat1 ,name: "Diamond Earring", more: "Explore >"},
    {picture : Cat2 ,name: "Gold Earring", more: "Explore >"},
    {picture : Cat3 ,name: "Wedding Ring", more: "Explore >"},
    {picture : Cat4 ,name: "Gold Necklace", more: "Explore >"},
    {picture : Cat5 ,name: "Bracelets", more: "Explore >"},
    {picture : Cat6 ,name: "Neckwear", more: "Explore >"},
    {picture : Cat7 ,name: "Nose Pin", more: "Explore >"},
    {picture : Cat8 ,name: "Diamond Necklace", more: "Explore >"},
    {picture : Cat9 ,name: "Gold Coins", more: "Explore >"},
    {picture : Cat10 ,name: "New Earring", more: "Explore >"},
   
    
]



const Category = () => {
  return (
    <div>  
      {/* Headings */}
        <div className='flex justify-center  '>
            <div className='my-5 flex flex-col items-center mt-10'>
            <p className='text-[#E8CF36] text-[25px] xl:text-[30px] font-bold  '>Shop By Category</p>
            <p className='text-[#bbbbbb] text-[12px] xl:text-[14px]'>Browse through your favourite categories. We have  them all!</p>
            </div>

        </div>


        <div className='flex justify-center items-center my-7 '>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7 md:gap-14 lg:gap-12'>
        {Categories.map((items,index)=>(
          // cards
            <div key={index} className='border-[#969595] bg-[#131313] border-[1px] rounded-[5px] w-[autopx] h-[200px] xl:h-[240px] hover:animate-popOut'>
                  {/* Image  */}
                <div><Image src={items.picture} alt='Categories' className='size-[150px] xl:size-[170px] '/></div>
                
                <div className='flex justify-center mt-1'>

                  {/* text inside the card */}
                  <div className='flex flex-col items-center'>
                  <p className='text-[#E8CF36] text-[14px] xl:text-[16px]'>{items.name}</p>
                  <p className='text-[#bbbbbb] text-[10px] xl:text-[11px] '>{items.more}</p>
                  </div>

                </div>

            </div>
            ))}
        </div>
        </div>
        
    </div>
  )
}

export default Category