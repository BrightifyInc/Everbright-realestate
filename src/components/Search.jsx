import React from 'react'

// Import Icons from React Icons =====>
import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {BsHouseDoor} from 'react-icons/bs'
import {CiLocationOn} from 'react-icons/ci'

const Search = () => {
  return (
    <div className='searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem] m-5 mt-20'>

      
      <form action="">

        <div className="firstDev flex flex-wrap justify-between items-center rounded-[8px] 
        gap-[10px] bg-white p-5 shadow-greyIsh-700">

          <div className="flex gap-3 items-center">
            <AiOutlineSearch className="text-[30px] icon" />
            <input type="text" className='bg-transparent text-blue-500 focus:outline-none 
            w-[100%]' placeholder="Search Here..."/>
            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:textColor icon" />
          </div>

          <div className="flex gap-3 items-center">
            <BsHouseDoor className="text-[30px] icon" />
            <input type="text" className='bg-transparent text-blue-500 focus:outline-none 
            w-[100%]' placeholder="Search by type..."/>
            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:textColor icon" />
          </div>

          <div className="flex gap-3 items-center">
            <CiLocationOn className="text-[30px] icon" />
            <input type="text" className='bg-transparent text-blue-500 focus:outline-none 
            w-[100%]' placeholder="Search by location..."/>
            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:textColor icon" />
          </div>

          <button className="bg-skin-color mt-5 w-full p-3 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300">
            Search
          </button>

        </div>
      </form>

    </div>
  )
}

export default Search
