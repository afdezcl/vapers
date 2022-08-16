export const Card = ({ title, description, image, tags }) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-xl'>
      <img className='w-full' src={image} alt='Sunset in the mountains' />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{title}</div>
        <p className='text-gray-700 text-base'>
          {description}
        </p>
      </div>
      <div className='px-6 pt-4 pb-2'>
        {
          tags.map(tag =>
            <span key={tag} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>{tag}</span>
          )
        }
      </div>
    </div>
  )
}
