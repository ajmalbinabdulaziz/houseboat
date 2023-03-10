import Image from 'next/image'
import React from 'react'


const MediumCard = ({ img, title }) => {
  return (
    <div className='cursor-pointer hover:scale-105 transition transform duration-200 ease-linear pr-4'>
        <div className='relative h-80 w-80'>
            <Image src={img} fill className='rounded-md' />
        </div>
        <h3 className='text-2xl mt-3'>{title}</h3>
    </div>
  )
}

export default MediumCard