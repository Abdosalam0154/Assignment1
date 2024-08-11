import React from 'react'

export default function Footer() {
  return (
    <>

      <div className="footer bg-gray-700  bottom-0 right-0 left-0   p-10">
        <div className="card-group m-4 flex flex-wrap justify-center  ">
          <div className="card  text-white p-4 w-1/3">
            <div className="card-body  ">
              <p className='pt-5 mb-2 text-3xl'>LOCATION</p>
              <p className='mb-4'>2215 John Daniel Drive</p>
              <p className='mb-4'>Clark, MO 65243</p>
            </div>
          </div>
          <div className="card text-white p-4 w-1/3">
            <div className="card-body text-center">

              <p className='pt-5 mb-2 text-3xl'>AROUND THE WEB</p>
              <div className="icons">
                <i className='fa-brands fa-facebook mx-1 icon'></i>
                <i className='fa-brands fa-twitter mx-1 icon'></i>
                <i className='fa-brands fa-linkedin mx-1 icon'></i>
                <i className='fa-solid fa-globe mx-1 icon'></i>
              </div>
            </div>

          </div>
          <div className="card text-white p-4 w-1/3">
            <div className="card-body text-center">

              <p className='pt-5 mb-2 text-3xl'>ABOUT FREELANCER</p>
              <p className='mb-4'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>

          </div>
        </div>
      </div>
      <div className='text-center  text-white bg-gray-800 p-3'>
        <h3 className=' pt-3 mb-4'>Copyright © Your Website 2023</h3>
      </div>



    </>
  )
}
