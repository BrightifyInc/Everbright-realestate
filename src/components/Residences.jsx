import React, { useState } from 'react'
import { data } from '../data/data.js'

function Residences() {

    const [residences, setResidences] = useState(data);

    // ==== Filter Type By Category ====
    const filterType = (category) => {
        setResidences(
            data.filter((item) => {
                return item.category === category;
            })
        );
    };

    // ==== Filter Type By Category ====
    const filterPrice = (price) => {
        setResidences(
            data.filter((item) => {
                return item.price === price;
            })
        );
    };

  return (

    <div className='max-w-[1640px] m-auto mx-4 px-4 py-12' name="residencies">

      <h1 className='text-skin-color font-bold text-4xl text-center'>
        Top Rated Residences
      </h1>

      {/* *** Filter Row *** */}
      <div className='flex flex-col lg:flex-row justify-between'>

        {/* *** Filter Type *** */}
        <div>
            <p className='font-bold text-text-black-900 py-5'>
                Filter Type
            </p>
            <div className='flex justify-between flex-wrap'>
                <button 
                    onClick={() => setResidences(data)}
                    className='m-1 border-2 px-3 py-1 rounded-xl border-skin-color text-skin-color hover:bg-skin-color hover:text-white'>
                    All
                </button>
                <button 
                    onClick={() => filterType('Villa')} 
                    className='m-1 border-2 px-3 py-1 rounded-xl border-skin-color text-skin-color hover:bg-skin-color hover:text-white'>
                    Villa
                </button>
                <button 
                    onClick={() => filterType('Bungalow')} 
                    className='m-1 border-2 px-3 py-1 rounded-xl border-skin-color text-skin-color hover:bg-skin-color hover:text-white'>
                    Bungalow
                </button>
                <button 
                    onClick={() => filterType('Ranch-style')} 
                    className='m-1 border-2 px-3 py-1 rounded-xl border-skin-color text-skin-color hover:bg-skin-color hover:text-white'>
                    Ranch-style
                </button>
                <button 
                    onClick={() => filterType('Georgian')} 
                    className='m-1 border-2 px-3 py-1 rounded-xl border-skin-color text-skin-color hover:bg-skin-color hover:text-white'>
                    Georgian
                </button>
            </div>
        </div>

        {/* *** Filter Price *** */}
        <div>
            <p className='font-bold text-text-black-900 py-5'>
                Filter Price
            </p>
            <div className='flex justify-between max-w-[390px] w-full'>
                <button 
                    onClick={() => filterPrice('$')}
                    className='m-1 border-2 px-3 py-1 rounded-xl border-skin-color text-skin-color hover:bg-skin-color hover:text-white'
                >
                    $
                </button>
                <button 
                    onClick={() => filterPrice('$$')}
                    className='m-1 border-2 px-3 py-1 rounded-xl border-skin-color text-skin-color hover:bg-skin-color hover:text-white' 
                >
                    $$
                </button>
                <button 
                    onClick={() => filterPrice('$$$')}
                    className='m-1 border-2 px-3 py-1 rounded-xl border-skin-color text-skin-color hover:bg-skin-color hover:text-white' 
                >
                    $$$
                </button>
                <button 
                    onClick={() => filterPrice('$$$$')}
                    className='m-1 border-2 px-3 py-1 rounded-xl border-skin-color text-skin-color hover:bg-skin-color hover:text-white' 
                >
                    $$$$
                </button>
            </div>
        </div>

      </div>

      {/* *** Display Image *** */}
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-5'>
        {
            residences.map((item, index) => {

                return (

                    <div
                        key={index}
                        className='border shadow-lg rounded-lg hover:scale-105 duration-300'
                    >
                        <img 
                            src={item.image}
                            alt={item.name} 
                            className='w-full h-[230px] object-cover rounded-t-lg lg:h-[200px]'
                        />
                        <div className=" p-2">
                            <p className="font-semibold text-text-black-900">
                                {item.name}
                            </p>
                            <p className="text-text-black-700 text-[14px] mt-2">
                                {item.detail}
                            </p>
                        </div>
                        <div className='flex justify-between'>
                            <a className='m-2 border-2 px-3 py-1 mb-3 rounded-xl border-skin-color text-skin-color hover:bg-skin-color hover:text-white'>
                                Learn More 
                            </a>
                            <p className='text-text-black-700 mt-3 mr-3'>
                                {item.price}
                            </p>
                        </div>
                    </div>
                )

            })
        }
      </div>

    </div>

  )
}

export default Residences
