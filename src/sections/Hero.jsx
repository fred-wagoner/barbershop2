import React, { useEffect } from 'react'
import heroimg from '../assets/images/Haircut.jpeg'
import { FaLocationDot } from 'react-icons/fa6'
import { MdOutlinePhoneAndroid } from 'react-icons/md'
import { FaHeadphones } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import sissor from '../assets/images/sissor.png'
import menshair from '../assets/images/menshair.png'
import trimmer from '../assets/images/trimmer.png'
import womenhair from '../assets/images/womenhair.png'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Hero = () => {

  useEffect(() => {
  AOS.init({
    offset: 200,
    duration: 800,
    easing: 'ease-in-sine',
    delay: 100,
  });
}, [])

  return (
    <>
      <section id='home' className='w-full md:px-[120] px-10  flex flex-col md:flex-row
      justify-center items-center gap-20'>
      <div id='content-box' className='flex flex-col display:grid justify-center items-start gap-10'>
        <h1 data-aos="zoom-in" className='text-2xl p-3 text-black
        font-semibolds'>WELCOME TO</h1>
        <h1 data-aos="zoom-in" className='text-6xl text-black 
        font-bold'>Barbershop <br></br> in Fort Worth<br></br>Texas</h1>
        <div data-aos="slide-up" id='icon-list' className='flex flex-col 
        justify-center items-start gap-6'>
          <div id='icon-box' className='flex justify-center items-center gap-3'>
            <FaLocationDot className='text-black size-6' /> 
            <h1 className='text-xl text-gray-800 font-semibold'>5400 Brewer Fort Worth, Tx 76123</h1>
           </div>
            <div id='icon-box' className='flex justify-center items-center gap-3'>
            <MdOutlinePhoneAndroid className='text-black size-6' /> 
            <h1 className='text-xl text-gray-800 font-semibold'>(817) 555-5555</h1>
           </div>
            <div id='icon-box' className='flex justify-center items-center gap-3'>
            <MdEmail className='text-black size-6' /> 
            <h1 className='text-xl text-gray-800 font-semibold'>companyemai@gmail.com</h1>
           </div>
            <div id='icon-box' className='flex justify-center items-center gap-3'>
            <FaHeadphones className='text-black size-6' /> 
            <h1 className='text-xl text-gray-800 font-semibold'>customerservice@gmail.com</h1>
           </div>
        </div>
           <button data-aos="zoom-in" className='px-10 py-4 rounded-xl border-2
           border-black text-black font-semibold text-lg hover:bg-black
           hover:text-white'>BOOK ONLINE</button>
    </div>
    <div data-aos="zoom-in" id='image-box' className='md:w-[50%] w-full'>
      <img src= {heroimg} alt="" className='rounded-2xl w-[600px] pt-8 md:h-[700px] h-[300px]'/>
    </div>
 </section>
 <section className='grid grid-cols-1 md:grid-cols-4 justify-center items-start 
 w-full md:px-[120px] px-10 py-10 gap-10' >
  <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center 
  items-center gap-4'>
    <img src={sissor} alt="" className='size-16 transform hover: scale 110
    tranisition-transform duration-300 cursor-pointer'/>
    <h1 className='text-2xl text-black font-semibold'>Regular Haircut</h1>
    <button className='px-10 py-3 bg-black text-white text-md font-semibold
      rounded-xl hover:bg-gray-300 hover:text-black cursor-pointer'>MORE</button>
  </div>
  <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center 
  items-center gap-4'>
    <img src={menshair} alt="" className='size-16 transform hover: scale 110
    tranisition-transform duration-300 cursor-pointer'/>
    <h1 className='text-2xl text-black font-semibold'>Regular Haircut</h1>
    <button className='px-10 py-3 bg-black text-white text-md font-semibold
      rounded-xl hover:bg-gray-300 hover:text-black cursor-pointer'>MORE</button>
  </div>
  <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center 
  items-center gap-4'>
    <img src={trimmer} alt="" className='size-16 transform hover: scale 110
    tranisition-transform duration-300 cursor-pointer'/>
    <h1 className='text-2xl text-black font-semibold'>Regular Haircut</h1>
    <button className='px-10 py-3 bg-black text-white text-md font-semibold
      rounded-xl hover:bg-gray-300 hover:text-black cursor-pointer'>MORE</button>
  </div>
  <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center 
  items-center gap-4'>
    <img src={womenhair} alt="" className='size-16 transform hover: scale 110
    tranisition-transform duration-300 cursor-pointer'/>
    <h1 className='text-2xl text-black font-semibold'>Regular Haircut</h1>
    <button className='px-10 py-3 bg-black text-white text-md font-semibold
      rounded-xl hover:bg-gray-300 hover:text-black cursor-pointer'>MORE</button>
  </div>
 </section>
    </>
  )
}

export default Hero

