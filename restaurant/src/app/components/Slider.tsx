"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Slider = () => {

const data = [
  {id:1,
  title:"Always fresh & always crispy & always hot",
  image:"/slide1.png",
  },
  {id:2,
  title:"We deliver your order wherever you are in NY!",
  image:"/slide2.png",
  },
  {id:3,
  title:"The best pizza to share with your family!",
  image:"/slide3.jpg",
  },
]

const [currentSlide, setCurrentslide]= useState(0)

useEffect(()=>{
  const interval = setInterval(
    () => setCurrentslide((prev) => (prev ===data.length -1 ? 0 : prev + 1)),
  2000);
  return ()=> clearInterval(interval);
},[]);


  return (
    <div className="flex flex-col h-[calc(130vh-1rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50 ">

      {/* text container */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold ">
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl ">{data[currentSlide].title}</h1>
        <button className="bg-red-500 text-white py-2 px-4 mb-2 md:py-4 md:px-8 ">Order Now</button>
      </div>

      {/* image container */}
      <div className=" w-full flex-1 relative">
<Image 
src={data[currentSlide].image} 
alt="image" 
className="object-cover"
fill
/>
      </div>
    </div>
  );
};

export default Slider