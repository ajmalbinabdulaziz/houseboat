import Head from 'next/head'
import Image from 'next/legacy/image';
import Banner from '../components/Banner';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';
import cardData from '../utils/cardsData';
import exploreHouseBoats from '../utils/exploreboats'


const Home = () => {

  console.log(exploreHouseBoats)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">

      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className='pt-6' >
          <h2 className='text-4xl font-semibold pb-5'>Explore Houseboats</h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreHouseBoats.map((item) =>(
              <SmallCard 
                key={item.img}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>

        </section>  

        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>

          <div className='flex space-x-3 overflow-scroll scrollbar-hide'>
            {cardData.map((item) =>(
              <MediumCard 
                key={item.img}
                img={item.img}
                title={item.title}
              />
            ))}
          </div>
        </section>

      </main>

    </div>
  )
}

export default Home

