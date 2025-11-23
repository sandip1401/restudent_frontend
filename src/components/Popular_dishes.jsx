import React from 'react'

export default function Popular_dishes () {
  return (
    <section className='px-6 py-20'>
      
      <h2 className='text-5xl text-center font-bold text-green-300'>Popular Dishes</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-14 gap-12 max-w-6xl mx-auto'>
        <div className='bg-white/10 backdrop-blur-lg p-5 rounded-2xl border border-green-400/40 hover:scale-105 duration-300'>
          <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092" 
          className='rounded-lg h-60 w-full object-cover' alt="Salad" />
          <h3 className='text-center font-semibold mt-3 text-green-200'>Grilled Chicken Salad</h3>
          <p className='text-gray-300'>
            Fresh chicken mixed with organic vegetables and herbs.
          </p>
        </div>
        <div className='bg-white/10 backdrop-blur-lg p-5 rounded-2xl border border-green-400/40 hover:scale-105 duration-300'>
          <img src="https://images.unsplash.com/photo-1525755662778-989d0524087e" 
          className='rounded-lg h-60 w-full object-cover' alt="Pasta" />
          <h3 className='text-center font-semibold mt-3 text-green-200'>Creamy Veg Pasta</h3>
          <p className='text-gray-300'>
            Perfectly cooked pasta tossed in creamy organic sauce.
          </p>
        </div>
        <div className='bg-white/10 backdrop-blur-lg p-5 rounded-2xl border border-green-400/40 hover:scale-105 duration-300'>
          <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092" 
          className='rounded-lg h-60 w-full object-cover' alt="Salad" />
          <h3 className='text-center font-semibold mt-3 text-green-200'>Fresh Fruit Bowl</h3>
          <p className='text-gray-300'>
            A refreshing bowl of fruits topped with honey and nuts.
          </p>
        </div>

      </div>
    </section>
  )
}

