import React from 'react'

function Headlinecard() {
  return (

    <div className='max-w-[1640px] mx-auto mx-4 p-4 py-12'>

        <div className='mx-4 grid md:grid-cols-3 gap-6'>
        
            {/* *** CARD *** */}
            <div className='rounded-xl relative hover:scale-105 duration-300'>
                {/* *** OVERLAY *** */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white px-4'>
                    <p className='font-bold text-2xl pt-4'>
                        House Name
                    </p>
                    <p className='mt-2 md:text-[11px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut natus tempore corrupti?
                    </p>
                    <button className="absolute bottom-5 flex">
                        Learn More
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
                <img 
                    src="./r1.png" 
                    alt="/"
                    className='max-h-[180px] md:max-h-[200px] w-full object-cover rounded-xl'
                />
            </div>
        

            {/* *** CARD *** */}
            <div className='rounded-xl relative hover:scale-105 duration-300'>
                {/* *** OVERLAY *** */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white px-4'>
                    <p className='font-bold text-2xl pt-4'>
                        House Name
                    </p>
                    <p className='mt-2 md:text-[11px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut natus tempore corrupti?
                    </p>
                    <button className="absolute bottom-5 flex">
                        Learn More
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
                <img 
                    src="./r2.png" 
                    alt="/"
                    className='max-h-[180px] md:max-h-[200px] w-full object-cover rounded-xl'
                />
            </div>
        

            {/* *** CARD *** */}
            <div className='rounded-xl relative hover:scale-105 duration-300'>
                {/* *** OVERLAY *** */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white px-4'>
                    <p className='font-bold text-2xl pt-4'>
                        House Name
                    </p>
                    <p className='mt-2 md:text-[11px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut natus tempore corrupti?
                    </p>
                    <button className="absolute bottom-5 flex">
                        Learn More
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
                <img 
                    src="./r3.png" 
                    alt="/"
                    className='max-h-[180px] md:max-h-[200px] w-full object-cover rounded-xl'
                />
            </div>

        </div>
      
    </div>

  );
};

export default Headlinecard;
