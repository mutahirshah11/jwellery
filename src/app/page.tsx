import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Featuredproduct from './components/featured'
import Topproducts from './components/topproducts'
import Earring from './components/earring'
import Newproducts from './components/newproducts'
import Category from './components/category'
import Gender from './components/gender'
import Gift from './components/gift'
import Footer from './components/footer'
import Copyrights from './components/copyrights'


const Page = () => {
  return (
    <div className=''>
     <Navbar/>
     <Hero/>
     <Featuredproduct/>
     <Newproducts/>
     <Earring/>
     <Topproducts/> 
     <Category/>
     <Gender/>
     <Gift/>
     <Footer/>
     <Copyrights/>

    </div>
  )
}

export default Page