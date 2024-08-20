import React from 'react'
import { Link } from 'react-router-dom';
import DormMinicard from '../components/DormMinicard';
import noPhotoExterior from '../assets/exterior/noPhotoExterior.jpg';

import langmuirX from '../assets/exterior/langmuirExterior.png';
import jamesX from '../assets/exterior/jamesExterior.png';
import ammannX from '../assets/exterior/ammannExterior.png';
import irvingX from '../assets/exterior/irvingExterior.png';
import grayX from '../assets/exterior/grayExterior.png';
import chavezX from '../assets/exterior/chavezExterior.png';
import tubmanX from '../assets/exterior/tubmanExterior.png';


export default function East() {
    return (
        <div className='flex flex-wrap justify-center gap-8 p-4'>

            <h1 className='text-center text-5xl font-semibold mt-6 w-full uppercase'>
                East&nbsp; &nbsp;Side
            </h1>

            {/*H community*/}
            <DormMinicard
                to='/east/langmuir'
                name='Langmuir Hall'
                community='H Community'
                image={langmuirX}
                rating='Insert Rating Here'
            />
            <DormMinicard
                to='/east/benedict'
                name='Benedict Hall'
                community='H Community'
                image={noPhotoExterior}
                rating='Insert Rating Here'
            />
            <DormMinicard
                to='/east/james'
                name='James Hall'
                community='H Community'
                image={jamesX}
                rating='Insert Rating Here'
            />


            {/*Mendelsohn*/}
            <DormMinicard
                to='/east/ammann'
                name='Ammann Hall'
                community='Mendelsohn Community'
                image={ammannX}
                rating='Insert Rating Here'
            />
            <DormMinicard
                to='/east/oneill'
                name='O&apos;neill Hall'
                community='Mendelsohn Community'
                image={noPhotoExterior}
                rating='Insert Rating Here'
            />
            <DormMinicard
                to='/east/irving'
                name='Irving Hall'
                community='Mendelsohn Community'
                image={irvingX}
                rating='Insert Rating Here'
            />
            <DormMinicard
                to='/east/gray'
                name='Gray Hall'
                community='Mendelsohn Community'
                image={grayX}
                rating='Insert Rating Here'
            />


            {/*Living learning*/}
            <DormMinicard
                to='/east/chavez'
                name='Chavez Hall'
                community='Living Learning Community'
                image={chavezX}
                rating='Insert Rating Here'
            />
            <DormMinicard
                to='/east/tubman'
                name='Tubman Hall'
                community='Living Learning Community'
                image={tubmanX}
                rating='Insert Rating Here'
            />
        </div>
    )
}
