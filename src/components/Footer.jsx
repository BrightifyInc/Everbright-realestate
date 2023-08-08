import React from 'react'

import { AiFillInstagram, AiOutlineTwitter   } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="footer p-[5rem] mx-8 mb-4 bg-greyIsh text-text-black-700 rounded-[10px] gap-[8] grid md:grid-cols-2 lg:grid-cols-5 m-auto items-center justify-center">
      <div>
        <div className="logoDiv">
          <h1 className="logo text-[25px] text-skin-color pb-[1.5rem]">
            <strong>Everbright</strong> estate
          </h1>
        </div>

        <p className='pb-13px opacity-70 leading-7'>
          We always make our seeker and companies find the best job and employers 
          find the best candidates.
        </p>
      </div>

      <div className="gridx mt-10 md:mt-10 lg:ml-5">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-text-black-900">
          Companies
        </span>
        <div className="grid gap-3">

          <li className="text-text-black-700 opacity-[.7] hover:opacity-[1]">
            About Us
          </li>
          <li className="text-text-black-700 opacity-[.7] hover:opacity-[1]">
            Residencies
          </li>
          <li className="text-text-black-700 opacity-[.7] hover:opacity-[1]">
            News
          </li>
          <li className="text-text-black-700 opacity-[.7] hover:opacity-[1]">
            FAQ
          </li>
        </div>
      </div>
      

      <div className="gridx mt-10 md:mt-10">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-text-black-900">
          Resources
        </span>
        <div className="grid gap-3">

          <li className="text-text-black-700 opacity-[.7] hover:opacity-[1]">
            Account
          </li>
          <li className="text-text-black-700 opacity-[.7] hover:opacity-[1]">
            Support Center
          </li>
          <li className="text-text-black-700 opacity-[.7] hover:opacity-[1]">
            Feedback
          </li>
          <li className="text-text-black-700 opacity-[.7] hover:opacity-[1]">
            Contact Us
          </li>
        </div>
      </div>

      <div className="gridx mt-10 md:mt-10">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-text-black-900">
          Support
        </span>
        <div className="grid gap-3">

          <li className="text-text-black-700 opacity-[.7] hover:opacity-[1]">
            Event
          </li>
          <li className="text-text-black-700 opacity-[.7] hover:opacity-[1]">
            Promo
          </li>
          <li className="text-text-black-700 opacity-[.7] hover:opacity-[1]">
            Req Demo
          </li>
          <li className="text-text-black-700 opacity-[.7] hover:opacity-[1]">
            Membership
          </li>
        </div>
      </div>

      <div className="gridx mt-10 md:mt-10">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-text-black-900">
          Contact Info
        </span>
        <div>
          <small className="text-[14px] text-text-black-700">
            Brightiweobi.ib@gmail.com
          </small>
          <div className="icons flex gap-4 py-[1rem]">
            <AiFillInstagram className='bg-bg-black-50 p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor' />
            <BsFacebook className='bg-bg-black-50 p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor' />
            <AiOutlineTwitter className='bg-bg-black-50 p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer
