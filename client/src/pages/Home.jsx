import React from 'react';
import fullLogoFrontPage from '../assets/logos/fullLogoFrontPage.png';
import backgroundImage from '../assets/logos/homeBackgroundBlur.jpg';

export default function Home() {
    return (
        <div className='flex flex-col'>
            <div className='relative w-full h-auto bg-cover bg-center' style={{ backgroundImage: `url(${backgroundImage})`}}>
                {/* Blurred Background */}
                <div className='absolute inset-0 backdrop-blur-lg backdrop-brightness-95'></div>

                {/* Foreground Content */}
                <div className='relative flex flex-col md:flex-row items-center space-x-4 px-4'>
                    <img src={fullLogoFrontPage} alt='Header Name' className='w-full md:w-1/2 object-contain mb-4 md:mb-0 scale-75' />
                    <h1 className='w-full md:w-1/2 text-center tracking-wide font-semibold text-xl sm:text-4xl pb-2 leading-tight md:leading-snug lg:leading-normal'>
                        Find and Review Dorms at <br />
                        <span className='block font-bold text-2xl sm:text-5xl mt-2'>
                            Stony Brook University
                        </span>
                    </h1>
                </div>
            </div>

            <div className='flex flex-col md:flex-row md:space-x-4 py-8 font-semibold text-xl'>
                <ul className='w-full md:w-1/3 text-center'>Most Reviewed</ul>
                <ul className='w-full md:w-1/3 text-center'>Highest Reviewed</ul>
                <ul className='w-full md:w-1/3 text-center'>Lowest Reviewed</ul>
            </div>


        </div>
    );
}
