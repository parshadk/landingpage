import React from 'react'
import ButtonHover from './button'
const talktosalesSection = () => {
  return (
    <div>
        <section className="p-6 m-10 relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:content-[''] before:opacity-[0.05] before:z-10 before:pointer-events-none before:bg-[url('https://res.cloudinary.com/dzl9yxixg/image/upload/noise_yvdidf.gif')]">
            <div className='bg-green-600 items-center justify-center p-8 rounded-xl'>
                <div className='flex flex-row flex-wrap  items-center justify-center gap-2'>
                    <h4 className='flex  text-lg sm:text-2xl font-bold  text-white '>
                        Are you a large business looking for custom solutions?
                    </h4>
                    <ButtonHover text="Talk to sales" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default talktosalesSection;
