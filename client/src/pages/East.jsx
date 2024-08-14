import React from 'react'
import { Link } from 'react-router-dom';


export default function East() {
    return (
        <div>
            {/*H community*/}
            <Link to='/east/langmuir'>
                <li className='text-black font-semibold text-base sm:text-lg px-4 py-2 pb-4 sm:pb-0 uppercase'>Langmuir</li>
            </Link>
            <Link to='/east/benedict'>
                <li className='text-black font-semibold text-base sm:text-lg px-4 py-2 pb-4 sm:pb-0 uppercase'>Benedict</li>
            </Link>
            <Link to='/east/james'>
                <li className='text-black font-semibold text-base sm:text-lg px-4 py-2 pb-4 sm:pb-0 uppercase'>James</li>
            </Link>


            {/*Mendelsohn*/}
            <Link to='/east/ammann'>
                <li className='text-black font-semibold text-base sm:text-lg px-4 py-2 pb-4 sm:pb-0 uppercase'>Ammann</li>
            </Link>
            <Link to='/east/oneill'>
                <li className='text-black font-semibold text-base sm:text-lg px-4 py-2 pb-4 sm:pb-0 uppercase'>Oneill</li>
            </Link>
            <Link to='/east/irving'>
                <li className='text-black font-semibold text-base sm:text-lg px-4 py-2 pb-4 sm:pb-0 uppercase'>Irving</li>
            </Link>
            <Link to='/east/gray'>
                <li className='text-black font-semibold text-base sm:text-lg px-4 py-2 pb-4 sm:pb-0 uppercase'>Gray</li>
            </Link>


            {/*Living learning*/}
            <Link to='/east/chavez'>
                <li className='text-black font-semibold text-base sm:text-lg px-4 py-2 pb-4 sm:pb-0 uppercase'>Chavez</li>
            </Link>
            <Link to='/east/tubman'>
                <li className='text-black font-semibold text-base sm:text-lg px-4 py-2 pb-4 sm:pb-0 uppercase'>Tubman</li>
            </Link>
        </div>
    )
}
