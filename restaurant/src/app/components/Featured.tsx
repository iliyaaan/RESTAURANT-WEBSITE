import Image from 'next/image'
import React from 'react'
import { featuredProducts } from '../data'

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-500 mb-2">
      {/* wrapper */}
      <div className="w-max flex">
        {/* single item */}

        
        {
          featuredProducts.map(item =>(

          
          <div key={item.id} className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]">
       {/* image container */}
        {item.img &&(
          <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
        
         <Image src={item.img} alt="pic" fill className="object-contain"/>
         </div>)}


         <div className="flex-1 flex flex-col gap-4 items-center text-center justify-center">
            {/* text container */}
            <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{item.title}</h1>
            <p className="p-2 2xl:p-8">{item.desc}</p>
            <span className=" text-xl font-bold">${item.price}</span>
            <button className="bg-red-500 text-white p-2 rounded-md">Add to Cart</button>
         </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Featured