/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { IoVolumeMute,IoVolumeHigh } from "react-icons/io5";
import GenreDropdown from '../Elements/Dropdown/GenreDropDown';
const HeroLayouts = ({bgimage , title, description , genres}) => {
  const [isMuted, setIsMuted] = useState(false);
  return (
    <div className="relative bg-gray-900 text-white h-[587px]">
    <img
      src={bgimage.imgsrc}
      alt={bgimage.alt}
      className="absolute w-full h-full object-cover"
    />
   
    <div className="absolute inset-0 bg-gradient-to-t from-[#181A1C] to-transparent h-full">
      
    </div>
    
    <div className="relative flex justify-center relative h-full items-end pb-16">
    <div className="absolute invisible top-10 w-11/12 mb-4 sm:visible">
    {genres &&  <GenreDropdown genres = {genres}/>}
   
    </div>
  
      <div className="w-11/12 mb-4">
     
        <div className="text-left max-w-2xl mb-4">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="mb-4 min lg:line-clamp-4 line-clamp-2">
          {description}
          </p>
        </div>
        <div className="flex items-center">
          <div className="flex items-center space-x-5">
            <button className="bg-customBlue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Mulai
            </button>
            <button className="bg-[#22282A] hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
              Selengkapnya
            </button>
            <span className="bg-gray-700 text-white py-1 px-2 rounded-full bg-opacity-0  border border-gray-700 ">18+</span>
          </div>
          {!isMuted ? (
            <IoVolumeHigh className="text-white text-2xl ml-auto rounded-full cursor-pointer" onClick={() => setIsMuted(!isMuted)}/>
          ) : (
            <IoVolumeMute className="text-white text-2xl ml-auto rounded-full cursor-pointer" onClick={() => setIsMuted(!isMuted)}/>
          )}
          
        </div>
      </div>
    </div>
  </div>
  )
}
 
export default HeroLayouts
