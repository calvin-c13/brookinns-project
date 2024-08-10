import { Link } from 'react-router-dom';
import headerHouseLogo from '../assets/homePageLogo.png';
import oneLineWhiteLogo from '../assets/headerNameWhite.png';

export default function Header() {
    return (
        <header>
            <div className='flex flex-col sm:flex-row items-center max-w-screen-xxl mx-auto py-4 px-4 sm:px-8 bg-black'>
                {/* Left: Logos */}
                <div className='flex justify-center items-center w-full sm:w-1/4 mb-4 sm:mb-0'>
                    <Link to='/'>
                        <img src={headerHouseLogo} alt='Header Logo' className='h-9 w-auto object-contain' />
                    </Link>
                    <Link to='/'>
                        <img src={oneLineWhiteLogo} alt='Header Name' className='h-8 w-auto object-contain' />
                    </Link>
                </div>

                {/* Center: East Side and West Side */}
                <div className='flex flex-col sm:flex-row flex-1 justify-center items-center text-center space-y-2 sm:space-x-28 sm:space-y-0 w-1/2'>
                    <Link to='/east'>
                        <ul className='text-white font-semibold text-base sm:text-lg px-4 py-2 pb-4 sm:pb-0 hover:opacity-85 uppercase'>East Side</ul>
                    </Link>
                    <Link to='/west'>
                        <ul className='text-white font-semibold text-base sm:text-lg px-4 py-2 pb-4 sm:pb-0 hover:opacity-85 uppercase'>West Side</ul>
                    </Link>
                </div>

                {/* Right: About */}
                <div className='w-1/4 flex justify-center sm:justify-end'>
                    <ul className='flex items-center hidden sm:inline'>
                        <Link to='/about'>
                            <li className='text-white font-semibold text-base sm:text-lg px-4 py-2 hover:opacity-85 uppercase'>About</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </header>
    );
}
