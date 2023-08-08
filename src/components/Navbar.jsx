import React, { useState } from 'react'

import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { MdFavorite, MdHelp } from 'react-icons/md'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import {BsFillSaveFill} from 'react-icons/bs'


export default function Navbar() {

    const [nav, setNav] = useState(false)

  return (
    
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
        {/* LEFT SIDE */}
        <div className="flex items-center ">
            <div onClick={() => setNav(!nav)}
                className="cursor-pointer">
                <AiOutlineMenu size={30} />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 text">
                Everbright <span className='font-bold text-skin-color'>Estate</span>
            </h1>
            <div className='hidden lg:flex items-center bg-gray-100 rounded-full p-1 text-[14px]'>
                <p className='bg-bg-black-100 text-white rounded-full p-2'>
                    <a href="">Residencies</a>
                </p>
                <p className='p-3'>
                    <a href="">Our Value</a>
                </p>
            </div>
        </div>

        {/* Search Input */}
        <div className='bg-grey-200 rounded-full flex item-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]' >
            <AiOutlineSearch size={20} />
            <input 
                type='text' 
                className='bg-transparent p-2 w-full focus:outline-none'
                placeholder='Search Here...' 
            />
        </div>

        {/* Register Button */}
        <button className='bg-skin-color text-white hidden md:flex items-center px-12 rounded-[6px] py-2'>
            Contact Us  
        </button>



        {/* Mobile Menu Overlay */}
        {
            nav ? <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div> : ''
        }

        <div 
            className={ 
                nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300'
                :
                'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'
            } 
            >
            <AiOutlineClose size={30} className='absolute right-4 top-4 cursor-pointer'/>
            <h1 className="text-2xl p-4">
                Everbright 
                <span className="font-bold">Estate</span>
            </h1>
            <nav>
                <ul className="flex flex-col p-4 text-gray-800">
                    <li className="text-xl py-4 flex">
                        <BsHouseDoor className="text-[25px] mr-4 icon" />
                        Home
                    </li>
                    <li className="text-xl py-4 flex">
                        <MdFavorite className="text-[25px] mr-4 icon" />
                        Favorites
                    </li>
                    <li className="text-xl py-4 flex">
                        <FaWallet className="text-[25px] mr-4 icon" />
                        Wallet
                    </li>
                    <li className="text-xl py-4 flex">
                        <MdHelp className="text-[25px] mr-4 icon" />
                        Help
                    </li>
                    <li className="text-xl py-4 flex">
                        <AiFillTag className="text-[25px] mr-4 icon" />
                        Promotions
                    </li>
                    <li className="text-xl py-4 flex">
                        <BsFillSaveFill className="text-[25px] mr-4 icon" />
                        Best Ones 
                    </li>
                    <li className="text-xl py-4 flex">
                        <FaUserFriends className="text-[25px] mr-4 icon" />
                        Invite Friends
                    </li>
                </ul>
            </nav>

        </div>
    </div>
  )
}
