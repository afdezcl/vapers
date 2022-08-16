import { InstagramIcon } from '../icons/InstagramIcon'

export const Header = () => {
  return (
    <div className='w-full container mx-auto'>
      <div className='w-full flex items-center justify-between'>
        <a className='flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl' href='#'>
          Your<span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500'>Vapers</span>
        </a>
        <div className='flex w-1/2 justify-end content-center'>
          <a
            className='inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out'
            href='https://instagram.com/yourvapers/' target='_blank' rel='noreferrer'
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </div>
  )
}
