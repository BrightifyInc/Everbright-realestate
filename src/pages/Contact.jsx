import React from 'react'
import Footer from '../components/Footer'

export default function Contact() {
  return (

    <section className="text-text-black-700 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">

        <div className="lg:w-2/3 mx-auto py-20">
          <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
            <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="./contact.jpg" />
            <div className="text-center relative z-9 w-full">
              <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">Contact Us</h2>
              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aspernatur voluptatum 
                minima ut numquam tempora repellendus, natus eius ex laboriosam.
              </p>
              <a className="mt-3 text-indigo-500 inline-flex items-center text-skin-color">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

       
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            {/* <iframe width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe> */}
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1">Lagos</p>
              </div>
              <div className="lg:w-full px-6 mt-5 ">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                <a className="text-skin-color leading-relaxed">jb617465@email.com</a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                <p className="leading-relaxed">+234 906 438 3921</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Send Us A Message</h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              We are very responsive to message, leave us a message by filling the form below with your request
            </p>
            <div className="relative mb-4">
              <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
              <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-skin-color focus:ring-2 focus:ring-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-skin-color focus:ring-2 focus:ring-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
              <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-skin-color focus:ring-2 focus:ring-blue-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button className="text-white bg-skin-color border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
              Submit
            </button>
          </div>
        </div>

      </div>

      <div className="bg-bg-black-900 rounded-xl m-10 mt-20">
        <Footer />
      </div>

    </section>
  )
}
