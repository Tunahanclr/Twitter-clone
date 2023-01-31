import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { Timeline } from 'react-twitter-widgets'

export default function Widget() {
  return (
    <>
         <aside className='w-350 bg-purple-200'>
            <div className='flex items-center  space-x-2 p-3 m-3 bg-gray-200 rounded-full text-gray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base '>
            <AiOutlineSearch className='text-2xl'/>
              <input type="text" placeholder='Search Twitter' className='focus-within:text-black   placeholder:text-gray-dark outline-none w-full bg-transparent text-sm '  />
            </div>
            <div className='flex  flex-col space-x-2 p-4 mt-3 m-3 rounded-xl bg-gray-200 '>
                  <div>
                    <h3 className='font-semibold text-xl'>Trends for you</h3>
                  </div>
                  <div className='flex flex-col mt-5 cursor-pointer  bg-gray-200 hover:bg-gray-100 rounded-md '>
                    <span className='text-xs opacity-50'>Politics-Trending</span>
                    <h3 className='font-semibold'>Akbank</h3>
                    <span className='text-xs opacity-50'>11.2K Tweets</span>
                  </div>
                  <div className='flex flex-col mt-5 cursor-pointer  bg-gray-200 hover:bg-gray-100 rounded-md '>
                    <span className='text-xs opacity-50'>Politics-Trending</span>
                    <h3 className='font-semibold'>Akbank</h3>
                    <span className='text-xs opacity-50'>11.2K Tweets</span>
                  </div>
                  <div className='flex flex-col mt-5 cursor-pointer  bg-gray-200 hover:bg-gray-100 rounded-md '>
                    <span className='text-xs opacity-50'>Politics-Trending</span>
                    <h3 className='font-semibold'>Akbank</h3>
                    <span className='text-xs opacity-50'>11.2K Tweets</span>
                  </div>
                  <div className='flex flex-col mt-5 cursor-pointer  bg-gray-200 hover:bg-gray-100 rounded-md '>
                    <span className='text-xs opacity-50'>Politics-Trending</span>
                    <h3 className='font-semibold'>Akbank</h3>
                    <span className='text-xs opacity-50'>11.2K Tweets</span>
                  </div>
                  <div className='flex flex-col mt-5 cursor-pointer  bg-gray-200 hover:bg-gray-100 rounded-md '>
                    <span className='text-xs opacity-50'>Politics-Trending</span>
                    <h3 className='font-semibold'>Akbank</h3>
                    <span className='text-xs opacity-50'>11.2K Tweets</span>
                  </div>
                  <button className='text-primary-base'>Show More</button>
            </div>
             <div className='mt-10'>
                <Timeline
                dataSource={{
                  sourceType: 'profile',
                  screenName: 'elonmusk'
                }}
                options={{
                  height: '400'
                }}
              />
                </div>
      </aside>
    </>
  )
}
