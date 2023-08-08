import React, { useState } from 'react'

import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag, AiFillTags } from 'react-icons/ai';
import { BsFillSaveFill, BsHouseDoor } from 'react-icons/bs';
import { FaUserFriends, FaWallet } from 'react-icons/fa';
import { MdFavorite, MdHelp, MdContactMail } from 'react-icons/md';
import { FcAbout } from 'react-icons/fc';

import '../../index.css'
import { Link, NavLink } from 'react-router-dom';


function Header() {

    $(window).on("load", function () {
        setTimeout(function () {
          $("#loading").fadeOut("slow");
          $("#loading-img").delay(150).fadeOut("slow");
          document.getElementById("containerz").style.display = "none";
        document.getElementById("contentz").style.display = "block";
        }, 1000);
      });

    const [nav, setNav] = useState(false)
    
  return (

    <body>
        <div id="containerz">

            <div id="loading">
                <span id="loading-img">Loading...</span>
            </div>

        </div>

        <div id="contentz">

            {/* <!-- **********NAVBAR************ --> */}
            {/* <nav className="bg-white">
                <div class="shadow_nav_Slider">
                    <div class="nav_nav_Slider fadeInRightBig wow">
                        <div class="slide_nav">
                            <div class="Slides">
                                <a href="">All</a>
                            </div>
                            <div class="Slides">
                                <a href="">Bungalow</a>
                            </div>
                            <div class="Slides">
                                <a href="">Ranch-style</a>
                            </div>
                            <div class="Slides">
                                <a href="">Villa</a>
                            </div>
                            <div class="Slides">
                                <a href="">Georgian</a>
                            </div>
                            <div class="Slides">
                                <a href="">Top Rated Residencies</a>
                            </div>
                            <div class="Slides">
                                <a href="">All</a>
                            </div>
                            <div class="Slides">
                                <a href="">Georgian</a>
                            </div>
                            <div class="Slides">
                                <a href="">Ranch-style</a>
                            </div>
                            <div class="Slides">
                                <a href="">Villa</a>
                            </div>
                            <div class="Slides">
                                <a href="">Bungalow</a>
                            </div>
                            <div class="Slides">
                                <a href="">Georgian</a>
                            </div>
                            <div class="Slides">
                                <a href="">Georgian</a>
                            </div>
                            <div class="Slides">
                                <a href="">Ranch-style</a>
                            </div>
                            <div class="Slides">
                                <a href="">Villa</a>
                            </div>
                            <div class="Slides">
                                <a href="">Bungalow</a>
                            </div>
                            <div class="Slides">
                                <a href="">All</a>
                            </div>
                            <div class="Slides">
                                <a href="">Latest released</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav> */}

            <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 bg-white">
                {/* LEFT SIDE */}
                <div className="flex items-center ">
                    <div 
                        onClick={() => setNav(!nav)}
                        className="cursor-pointer text-text-black-900">
                        <AiOutlineMenu size={30} />
                    </div>
                    <h1 className="text-2xl text-text-black-900 sm:text-3xl lg:text-4xl px-2 text">
                        <NavLink to="/">
                            Everbright <span className='font-bold text-skin-color'>Estate</span>
                        </NavLink>
                    </h1>
                    <div className='hidden lg:flex items-center bg-gray-100 rounded-full p-1 text-[14px]'>
                        <p className='bg-skin-color text-white rounded-full p-2 ml-2'>
                            <NavLink to="/residencies">Residencies</NavLink>
                        </p>
                        <p className='p-3'>
                            <NavLink to="/value">Our Value</NavLink>
                        </p>
                    </div>
                </div>

                {/* Search Input */}
                <div 
                    className='bg-grey-200 rounded-full flex item-center px-2 w-[200px] 
                    sm:w-[400px] lg:w-[500px] border-bg-black-50  border-2' >
                    <AiOutlineSearch size={20} className='text-[25px] text-skin-color mt-3' />
                    <input 
                        type='text' 
                        className='bg-transparent p-2 w-full focus:outline-none 
                        rounded-full'
                        placeholder='Search Here...' 
                    />
                </div>

                {/* Register Button */}
                <button 
                    className='hidden md:flex items-center rounded-[6px] 
                    py-2 btn contact-btn'>
                    <Link to='/contact' className="bg-skin-color px-12 text-white rounded-full p-2">Contact Us </Link>  
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
                    <AiOutlineClose 
                        onClick={() => setNav(!nav)}
                        size={30} 
                        className='absolute right-4 top-4 cursor-pointer text-red-500 opacity-30 hover:opacity-100' 
                    />
                    <h1 className="text-2xl p-4 text-text-black-900">
                        Everbright 
                        <span className="font-bold text-skin-color ml-2">Estate</span>
                    </h1>
                    <nav>
                        <ul className="flex flex-col p-4 text-text-black-700 ">
                            <li >
                                <NavLink to="/" className="text-xl py-4 flex hover:text-text-black-900 cursor-pointer">
                                    <BsHouseDoor className="text-[25px] mr-4 icon" />
                                    Home
                                </NavLink>
                            </li>
                            <li >
                                <NavLink to="/about" className="text-xl py-4 flex hover:text-text-black-900 cursor-pointer">
                                    <FcAbout className="text-[25px] mr-4 icon" />
                                    About
                                </NavLink>
                            </li>
                            <li >
                                <NavLink to="/contact" className="text-xl py-4 flex hover:text-text-black-900 cursor-pointer">
                                    <MdContactMail className="text-[25px] mr-4 icon" />
                                    Contact
                                </NavLink>
                            </li>
                            <li className="text-xl py-4 flex hover:text-text-black-900 cursor-pointer">
                                <MdFavorite className="text-[25px] mr-4 icon" />
                                Favorites
                            </li>
                            <li className="text-xl py-4 flex hover:text-text-black-900 cursor-pointer">
                                <FaWallet className="text-[25px] mr-4 icon" />
                                Wallet
                            </li>
                            <li className="text-xl py-4 flex hover:text-text-black-900 cursor-pointer">
                                <MdHelp className="text-[25px] mr-4 icon" />
                                Help
                            </li>
                            <li className="text-xl py-4 flex hover:text-text-black-900 cursor-pointer">
                                <AiFillTags className="text-[25px] mr-4 icon" />
                                Promotions
                            </li>
                            <li className="text-xl py-4 flex hover:text-text-black-900 cursor-pointer">
                                <BsFillSaveFill className="text-[25px] mr-4 icon" />
                                Best Ones 
                            </li>
                            <li className="text-xl py-4 flex hover:text-text-black-900 cursor-pointer">
                                <FaUserFriends className="text-[25px] mr-4 icon" />
                                Invite Friends
                            </li>
                        </ul>
                    </nav>

                </div>
            </div>

        </div>
    </body>
  )
}

export default Header
