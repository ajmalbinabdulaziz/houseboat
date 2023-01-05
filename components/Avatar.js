import { useSession } from 'next-auth/react'
import React from 'react'
import Image from 'next/legacy/image';



const Avatar = ({seed, large}) => {
  const {data: session} = useSession()

  return (
        <div className={`relative h-9 w-9 overflow-hidden rounded-full border-gray-300 bg-gray-200 ${
            large && 'h-2 w-20'
        }`}
        >
        <Image 
            layout="fill"
            src={`https://avatars.dicebear.com/api/micah/${
                seed || 'placeholder'}.svg`}
        />
        </div>
    )
}

export default Avatar