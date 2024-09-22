import React from 'react'
import connectStore from '../assests/connectStore.png'
const ConnectStoreSec = () => {
  return (
    <div className="flex justify-center items-center w-full sm:w-[60%] m-8 mx-auto">
    <div className="fex  p-2  gap-2 w-full justify-center [background:linear-gradient(45deg,#d1fae5,theme(colors.green.100)_50%,#d1fae5)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.green.300/.48)_80%,_theme(colors.green.400)_86%,_theme(colors.green.200)_90%,_theme(colors.green.400)_94%,_theme(colors.green.300/.48))_border-box] rounded-2xl border-4 border-transparent animate-border">
      <img src={connectStore} alt="Connect your store" />
    </div>
  </div>
  )
}

export default ConnectStoreSec

