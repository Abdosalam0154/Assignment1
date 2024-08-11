import React from 'react'

export default function About() {
  return (
    <>
      <div className="home flex justify-center items-center h-screen">
        <div className=" w-35">
          <div className="text-center pt-4">
            <h1 className='mb-3 uppercase text-2xl '>about component</h1>
          </div>
            <div className="text-start container">
              <div className="row px-5">
                <div className="col-md-6 ps-md-5 px-10 ">
                  <p>
                    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                  </p>
                </div>
                <div className="col-md-6 ps-md-5 px-10 ">
                  <p>
                    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                  </p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}
