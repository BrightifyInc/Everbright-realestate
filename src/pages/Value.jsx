import React from 'react'
import Footer from '../components/Footer'

function Value() {
  return (

    <div className='max-w-[1640px] m-auto mx-4 px-4 py-12' name="value">
        <h1 className='text-skin-color font-bold text-4xl text-center mb-3'>
            The value that holds us true
        </h1>

        <div className="grid md:grid-cols-2 lg:gap-[4rem] lg:grid-cols-4 lg:gap-[2rem]  items-center py-2">

            <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
            <div className="flex items-center gap-3">
                <div className="imgDev p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                <img 
                src="./aprove.png"
                alt="/" 
                className='w-full object-cover rounded-lg'
                />
                </div>

                <span className="font-semibold text-textColor text-[18px]">
                Simplicity
                </span>
            </div>

            <p className="text-[13] text-textColor opacity-[.7] py-[1rem] font-semibold">
                Things being made beautifully simple are at the heart of everything we do.
            </p>
            </div>

            <div className="singleGrid rounded-[10px] hover:bg-[#f7edf5] p-[1.5rem]">
            <div className="flex items-center gap-3">
                <div className="imgDev p-[4px] rounded-[.8rem] bg-[#f7d1e1] h-[40px] w-[40px] flex items-center justify-center">
                <img 
                src="./auth.jpg"
                alt="/" 
                className='w-full object-cover rounded-lg'
                />
                </div>

                <span className="font-semibold text-textColor text-[18px]">
                Simplicity
                </span>
            </div>

            <p className="text-[13] text-textColor opacity-[.7] py-[1rem] font-semibold">
                We believe in making things better for everyone, even if just by a little bit!
            </p>
            </div>

            <div className="singleGrid rounded-[10px] hover:bg-[#fcfae3] p-[1.5rem]">
            <div className="flex items-center gap-3">
                <div className="imgDev p-[4px] rounded-[.8rem] bg-[#f3f2ad] h-[40px] w-[40px] flex items-center justify-center">
                <img 
                src="./smile.png"
                alt="/" 
                className='w-full object-cover rounded-lg'
                />
                </div>

                <span className="font-semibold text-textColor text-[18px]">
                Simplicity
                </span>
            </div>

            <p className="text-[13] text-textColor opacity-[.7] py-[1rem] font-semibold">
                Things being made beautifully simple are at the heart of everything we do.
            </p>
            </div>

            <div className="singleGrid rounded-[10px] hover:bg-[#e2fcf4] p-[1.5rem]">
            <div className="flex items-center gap-3">
                <div className="imgDev p-[4px] rounded-[.8rem] bg-[#cef5e9] h-[40px] w-[40px] flex items-center justify-center">
                <img 
                src="./popup.png"
                alt="/" 
                className='w-full object-cover rounded-lg'
                />
                </div>

                <span className="font-semibold text-textColor text-[18px]">
                Simplicity
                </span>
            </div>

            <p className="text-[13] text-textColor opacity-[.7] py-[1rem] font-semibold">
                Things being made beautifully simple are at the heart of everything we do.
            </p>
            </div>

        </div>

        <div className="card gap-6 mt-[2rem] flex justify-between flex-wrap bg-greyIsh p-[5rem] rounded-[10px]">
            <div>
            <h1 className="text-blueColor text-30px font-bold">
                Explore Our Most Suitable Home
            </h1>
            <h2 className="text-blueColor text-25px font-semibold">
                Let's get started!
            </h2>
            </div>
            <button className='flex items-center border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor hover:bg-white border-blueColor'>
            Get Started
            <svg 
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2 mt-1"
                viewBox="0 0 24 24" 
            >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
            </button>
        </div>

        <ul className="max-w-[1640px]container mx-auto flex px-5  md:flex-row flex-col items-center gap-10 mt-10 py-10">
            <li className="companyLogo relative">
                <img src="./equinix.png" className="w-[300px] h-[75px]" alt="/" />
            </li>
            <li className="companyLogo relative">
                <img src="./prologis.png" className="w-[250px] h-[75px]" alt="/" />
            </li>
            <li className="companyLogo relative">
                <img src="./realty.png" className="w-[250px] h-[75px]" alt="/" />
            </li>
            <li className="companyLogo relative">
                <img src="./tower.png" className="w-[250px] h-[75px]" alt="/" />
            </li>
        </ul>

        <div className="bg-bg-black-900 rounded-xl mt-20">
            <Footer />
        </div>
      
    </div>
  )
}

export default Value
