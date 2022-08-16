import { Vapers } from '../data/vaper'
import { Card } from './components/Card'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'

function App () {
  const bannerUrl = 'https://drive.google.com/uc?id=1uUtQ6C78BrRuESJkhDF1jNt5eVYpsU57'
  
  return (
    <div className='leading-normal tracking-normal text-indigo-400'>
      <div
        className='h-full p-6  bg-cover bg-fixed'
        style={{ backgroundImage: 'url(\'https://raw.githubusercontent.com/tailwindtoolbox/Rainblur-Landing-Page/main/header.png\')' }}
      >
        <Header />
        <Hero />
      </div>
      <div className='bg-neutral-100'>
        <img className='w-full h-20' src={bannerUrl} alt='banner oferta' />
        <div className='flex justify-center align-center py-8'>
          <h1 className='text-3xl text-stone-900 font-bold'>
            Catálogo
          </h1>
        </div>
        <div className='flex justify-center align-center'>
          <div className='grid grid-cols-1 gap-8'>
            {
              Vapers.map(vaper => {
                const { title, description, image, tags } = vaper
                return (
                  <Card
                    key={title}
                    title={title}
                    description={description}
                    image={image}
                    tags={tags}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default App
