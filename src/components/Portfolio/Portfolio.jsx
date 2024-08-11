import React from 'react'
export default function Portfolio() {
  return (
    <>
      <div className="bg-white  ">
        <div className=" w-35">
          <div className="text-center pt-4">
            <h1 className='mt-24 mb-3 uppercase text-slate-900 text-3xl'>portfolio component</h1>
          </div>
        </div>
      </div>
            <div className="text-start container flex flex-wrap gap-5 w-[80%] m-auto mb-5">
              <div className="row gap-5">

              <div className="w-1/3">
                <img className='rounded-xl ' src='https://routeegy.github.io/startFramework/assets/images/poert1.png' alt="" />
              </div>
              <div className="w-1/3">
                <img className='rounded-xl' src='https://routeegy.github.io/startFramework/assets/images/poert1.png' alt="" />
              </div>
              <div className="w-1/3">
                <img className='rounded-xl' src='https://routeegy.github.io/startFramework/assets/images/poert1.png' alt="" />
              </div>
              
              </div>
              <div className="row gap-5">

              <div className="w-1/3">
                <img className='rounded-xl ' src='https://routeegy.github.io/startFramework/assets/images/poert1.png' alt="" />
              </div>
              <div className="w-1/3">
                <img className='rounded-xl' src='https://routeegy.github.io/startFramework/assets/images/poert1.png' alt="" />
              </div>
              <div className="w-1/3">
                <img className='rounded-xl' src='https://routeegy.github.io/startFramework/assets/images/poert1.png' alt="" />
              </div>
              
              </div>
            </div>
    </>
  )
}
