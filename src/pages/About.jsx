import React from 'react'
import Footer from '../components/Footer'

export default function About() {
  return (
    <section className="text-text-black-700 body-font">
      <div className="container mx-10 flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="p-5 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-text-black-900">
            What you need to know about us 
          </h1>
          <p className="mb-8 leading-relaxed">
            Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out 
            fixie 90's microdosing. Tacos pinterest fanny pack venmo, 
            post-ironic heirloom try-hard pabst authentic iceland.
          </p>
          
          <p className="text-sm mt-1 text-gray-500 mb-8 w-full">
            Neutra shabby chic ramps, viral fixie.
          </p>
          <button className='bg-skin-color border-2 px-12 p-3 rounded-lg text-white hover:bg-transparent hover:border-2 hover:font-semibold hover:text-text-black-900 border-blue-700'>
            Get in touch
          </button>
          
        </div>
        <div class="p-5 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src="./r2.png"/>
        </div>
      </div>

      <br/>
      <br/>
     
      <div className="container px-5 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-text-black-900">2.7K</h2>
            <p className="leading-relaxed">Users</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-text-black-900">1.8K</h2>
            <p className="leading-relaxed">Subscribes</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-text-black-900">1.5k</h2>
            <p className="leading-relaxed">Puchased</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-text-black-900">5.5k</h2>
            <p className="leading-relaxed">Products</p>
          </div>
        </div>
      </div>
      
      <br/>
      <br/>
      
      <div className="container mt-10 px-5 pt-10 py-24 mx-auto">
        <h1 className="text-3xl font-semibold title-font text-text-black-900 mb-12 text-center">Testimonials</h1>
        <div className="flex flex-wrap -m-4 px-5">
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-gray-100 p-8 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
              <a className="inline-flex items-center">
                <img alt="testimonial" src="./ts.jpg" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">Holden Caulfield</span>
                  <span className="text-gray-500 text-sm">UI DEVELOPER</span>
                </span>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-gray-100 p-8 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
              <a className="inline-flex items-center">
                <img alt="testimonial" src="./bright.png" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">Alper Kamu</span>
                  <span className="text-gray-500 text-sm">DESIGNER</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-bg-black-900 rounded-xl m-10 mt-20">
        <Footer />
      </div>
      


    </section>
  )
}
