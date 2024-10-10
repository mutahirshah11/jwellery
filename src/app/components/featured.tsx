import React from 'react'
import Image from 'next/image'
import pic1 from '../images/feature2.png'
import pic2 from '../images/feature3.png'
import pic3 from '../images/feature1.png'


const Jwellery = [
    {pic: pic1 , name:"GOLD & BRACELETS", description:"Explore our exquisite collection of gold bracelets, designed to add a touch of elegance to any outfit."},
    {pic: pic2 , name:"GOLD & DIAMOND RINGS", description:"Discover our stunning range of gold and diamond rings, where luxury meets sophistication. "},
    {pic: pic3 , name:"GOLD & NECKALCE", description:"Adorn yourself with our beautiful gold necklaces, designed to enhance your beauty and grace. ", }


]

const Featuredproduct = () => {

  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 my-5 xl:px-4'>
            {Jwellery.map( (items,index)=>(
                <div key={index} className='flex justify-center items-center '>
                    {/* cards */}
                    <div className='bg-[#C0C0C0] bg-opacity-15 w-[280px] h-[140px] lg:w-[315px] lg:h-[170px] xl:w-[375px]  xl:h-[200px]  mt-5 inline-flex justify-center items-center gap-5 rounded-lg hover:bg-opacity-25 animate-flipY'>
                    <Image src={items.pic} alt='jwellery' className='size-20 lg:size-24 lg:ml-3 lg:mt-0  xl:size-[130px] xl:ml-4 xl:mt-0  ' />
                      {/* text inside the cards */}
                    <div className='w-[130px] h-[112px] lg:w-[250px] mt-14 lg:mt-6 lg:mr-3 xl:w-[300px] xl:mt-[-1px] '>
                    <h3 className='text-[#E8CF36] text-[10px] lg:text-[13px] md:w-[90px] lg:w-[120px] xl:text-[16px] xl:w-[150px] xl:pb-2 '>{items.name}</h3>
                    <p className='text-[#E7E7E7] text-[8px] lg:text-[11.5px] xl:text-[12px] xl:mt-0'>{items.description}</p>
                    </div>
                    
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Featuredproduct