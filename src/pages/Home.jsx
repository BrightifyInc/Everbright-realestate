import React from 'react'
import Hero from '../components/Hero';
import Headlinecard from '../components/Headlinecard';
import Residences from '../components/Residences';
import Value from '../components/Value';
import Footer from '../components/Footer';
import Search from '../components/Search';

function Home() {
  return (
    // <section className='flex justify-center'>
                
    //     <div className='Container'>
    //         <div className='flex h-screen'>
    //             <motion.h1 
    //               initial={{ opacity: 0, y: -400}}
    //               animate={{
    //                 scale: 1.5,
    //                 opacity: 1,
    //                 y: 0,
    //                 transition: { duration: 2 },
    //                 rotate: 360,
    //               }}
    //               className='m-auto font-semibold text-[45px] text-green-600'>
    //                 Everbright Estate
    //             </motion.h1>
    //         </div>
    //     </div>
    // </section>
     <>
        <Hero />
        <Search />
        <Headlinecard />
        <Residences />
        <Value />
        <Footer />
        {/* <Contact />
        <About /> */}
     </>
  );
}

export default Home
