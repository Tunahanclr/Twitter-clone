import React from 'react'
import { BookIcon, ExploreIcon, HomeIcon, ListIcon, MessageIcon, MoreIcon, NotiIcon, ProfileIcon, SideLogo } from '../images/İmages'
import twitterlogo from '../images/twitter.png'
import twitterpp from '../images/pp.png'
export default function Sidebar() {
  return (
    <div className=' w-72 px-2 flex flex-col justify-between'>
    <div className=''>  
        <div className=' flex justify-center items-center cursor-pointer mt-2 hover:bg-primary-light rounded-full w-9'>
    <img className='w-9 h9' src={twitterlogo} alt="" />
        </div>
    <nav className=' ml-2 mt-4'>
      <ul className='flex gap-7 w-500 flex-col'>
        <li><a className='flex gap-3 font-semibold hover:bg-primary-light rounded-full hover:w-32 items-center text-2xl font-light' href=""><HomeIcon/>Home</a></li>
        <li><a className='flex gap-3 hover:bg-primary-light rounded-full hover:w-32 items-center text-2xl font-light' href=""><ExploreIcon/>Explore</a></li>
        <li><a className='flex gap-3  hover:bg-primary-light rounded-full hover:w-48 items-center text-2xl font-light' href=""><NotiIcon/>Notification</a></li>
        <li><a className='flex gap-3 hover:bg-primary-light rounded-full hover:w-36 items-center text-2xl font-light' href=""><MessageIcon/>Messages</a></li>
        <li><a className='flex gap-3 hover:bg-primary-light rounded-full hover:w-32 items-center text-2xl font-light' href=""><ListIcon/>Lists</a></li>
        <li><a className='flex gap-3 hover:bg-primary-light rounded-full hover:w-32 items-center text-2xl font-light' href=""><ProfileIcon/>Profile</a></li>
        <li><a className='flex gap-3 hover:bg-primary-light rounded-full hover:w-32 items-center text-2xl font-light' href=""><MoreIcon/>More</a></li>


      </ul>
    </nav>
    <button className=' mt-6 w-56 shadow-lg hover:bg-primary-dark h-12 bg-primary-base rounded-full text-white '>Tweet</button>
    </div>
    <div className=' mb-7 hover:bg-primary-hover rounded-full cursor-pointer items-center flex'>
        <div> 
          <img className='w-12 object-cover rounded-full' src={twitterpp} alt="" />
        </div>
        <div className='px-3'>
          <h4 className='font-semibold'>Tunahan Çeler</h4>
          <p className='text-sm font-light'>@TunahanClr</p>
        </div>
        <button className='text-5xl  flex'>...</button>
    </div>
    
    </div>
  )
}
