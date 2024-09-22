import React from 'react'
import about1 from './../assests/about1.png'
import about2 from './../assests/about2.png'
import about3 from './../assests/about3.png'

const About = () => {
  return (
    <div>
    <section className='p-2 m-10'>
        <div className='flex flex-col sm:flex-row flex-wrap justify-center m-2 gap-4'>
            <div className="p-2 flex flex-col gap-2 w-full max-w-[422px] mx-6 [background:linear-gradient(45deg,#d1fae5,theme(colors.green.100)_50%,#d1fae5)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.green.300/.48)_80%,_theme(colors.green.400)_86%,_theme(colors.green.200)_90%,_theme(colors.green.400)_94%,_theme(colors.green.300/.48))_border-box] rounded-2xl border-4 border-transparent animate-border">
                <img src={about1} alt="" width={150} height={150} className='rounded-full'/>
                <h1 className='p-1 items-start  text-xl font-bold' >Higher Profits</h1>
                <p className='w-[400px] items-start p-1  '>We offer some of the lowest prices in the industry because print providers continuously compete to win your business.</p>
            </div>
            <div className="p-2 flex flex-col gap-2 w-full max-w-[422px] mx-6 [background:linear-gradient(45deg,#d1fae5,theme(colors.green.100)_50%,#d1fae5)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.green.300/.48)_80%,_theme(colors.green.400)_86%,_theme(colors.green.200)_90%,_theme(colors.green.400)_94%,_theme(colors.green.300/.48))_border-box] rounded-2xl border-4 border-transparent animate-border">
               <img src={about2} alt="" width={150} height={150} className='rounded-full'/>
                <h1 className='p-1 items-start text-xl font-bold'>Robust Scaling</h1>
                <p className='w-[400px]  p-1  '>Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.</p>
            </div>
            <div className="p-2 flex flex-col gap-2 w-full max-w-[422px] mx-6 [background:linear-gradient(45deg,#d1fae5,theme(colors.green.100)_50%,#d1fae5)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.green.300/.48)_80%,_theme(colors.green.400)_86%,_theme(colors.green.200)_90%,_theme(colors.green.400)_94%,_theme(colors.green.300/.48))_border-box] rounded-2xl border-4 border-transparent animate-border">
                <img src={about3} alt="" width={150} height={150} className='rounded-full'/>
                <h1 className='p-1 items-start text-xl font-bold'>Best Selection</h1>
                <p className='w-[400px]  p-1 items-start '>With 900+ products and top quality brands, you can choose the best products for your business.</p>
            </div>
        </div>
    </section>
</div>
  )
}

export default About
