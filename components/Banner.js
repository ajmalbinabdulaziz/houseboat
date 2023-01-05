import Image from 'next/legacy/image'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'


const Banner = () => {

    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    <div className='embla h-[500px] xl:h-[600px] 2xl:h-[700px]' ref={emblaRef}>

        <div className="embla__container relative w-screen h-screen">
            <div className="embla__slide ">
                <Image src="/hb2.jpg" layout='fill' />
            </div>
            <div className="embla__slide">
                <Image src="/hb10.jpg" layout='fill' />
            </div>
            <div className="embla__slide">
                <Image src="/hb11.jpg" layout='fill' />
            </div>
        </div>
               
    </div>
  )
}

export default Banner