import React from 'react'
import video from './../assests/screen-capture.mp4'
import { FaCheck } from "react-icons/fa6";
import ButtonHover from './button'


const Hero = () => {
 
  const videoRef = React.createRef();

  function playVideo() {
    if (videoRef.current.readyState > 0) {
      videoRef.current.play();
    }
  }
  return (
    <div>
      <section className="m-10 ">
        <div className="flex justify-center flex-wrap items-center">
          <div className="flex flex-col gap-7 m-4">
            <h1 className='text-5xl font-bold'>Create and sell <br /> custom products </h1>
            <ul className="flex flex-col gap-3 text-lg">
              <li className="flex items-center gap-2"><FaCheck className='text-green-500'/> 100% Free to use</li>
              <li className="flex items-center gap-2"><FaCheck className='text-green-500'/> 900+ High-Quality Products</li>
              <li className="flex items-center gap-2"><FaCheck className='text-green-500'/> Largest global print network</li>
            </ul>
            <div className="flex flex-col md:flex-row gap-2">
              <ButtonHover text="Start for free" />
              <ButtonHover text="How it works?" />
              
            </div>
            <p className="text-xl text-green-600">Trusted by over 8M sellers around the world</p>
          </div>
          <div className="flex flex-col lg:flex-row m-4 [background:linear-gradient(45deg,#d1fae5,theme(colors.green.100)_50%,#d1fae5)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.green.300/.48)_80%,_theme(colors.green.400)_86%,_theme(colors.green.200)_90%,_theme(colors.green.400)_94%,_theme(colors.green.300/.48))_border-box] rounded-2xl border-4 border-transparent animate-border">
            <video width="500" height="500"  className='rounded-2xl' onLoad={playVideo} autoPlay loop ref={videoRef} onMouseOver={playVideo}>
              <source src={video} type="video/mp4"/>
            </video>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero



  

