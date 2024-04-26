import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="absolute w-screen aspect-video pt-[20%] bg-gradient-to-r from-black  px-24  text-white">
      <h1 className='font-bold text-3xl'>{title}</h1>
      <p className='py-6 text-md w-1/2'>{overview}</p>
      <div className=''>
        <button className='bg-white text-black p-4 py-2 px-10 text-lg font-semibold  rounded-md hover:bg-opacity-60'>Play</button>
        <button className='bg-gray-500 text-black p-4 py-2 px-10 text-lg mx-2 font-semibold rounded-md hover:bg-opacity-40'>More info</button>
      </div>
    </div>
  )
}

export default VideoTitle
//absolute w-screen aspect-video pt-[20%] bg-gradient-to-r from-black  px-24  text-white