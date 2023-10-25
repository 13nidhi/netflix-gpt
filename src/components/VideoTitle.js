import React from 'react';
import { ImPlay3 } from "react-icons/im";
import {AiOutlineInfoCircle} from "react-icons/ai";

//Patwa@132196
//Patwa@1396#Nidhi
const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[15%] px-14 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-xs w-2/4'>{overview}</p>
        <div className="flex">
            <button className='bg-white text-black p-2 px-6 text-xl rounded-md flex items-center gap-1 hover:bg-opacity-80'>
              <ImPlay3 /><span>Play</span> 
            </button>
            <button className='mx-2 bg-gray-400 text-white p-2 px-5 text-xl bg-opacity-50 rounded-md flex items-center gap-1 hover:bg-opacity-30'>
              <AiOutlineInfoCircle /><span>More Info</span>
            </button>
        </div>
    </div>
  )
}

export default VideoTitle;