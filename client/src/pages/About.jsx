import { Link } from 'react-router-dom';
import calvinPhoto from '../assets/headshots/calvinPhoto.png';
import jadePhoto from '../assets/headshots/jadePhoto.png';
import noPhoto from '../assets/headshots/noPhoto.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function About() {
    return (
        <div className='py-8 sm:py-10 px-6 sm:px-2 max-w-6xl mx-auto'>
            <div className='flex flex-col items-center space-y-4'>
                <h1 className='text-3xl font-bold justify-center text-center flex-1'>About BrookInns</h1>
                <p className='text-slate-700 justify-center px-4 sm:px-4 pb-2 leading-relaxed text-center flex-1'>
                    BrookInns is an evolving website created by students, for students at Stony Brook University.
                    Our goal is to provide a convenient and reliable resource for anyone interested in exploring the features and
                    atmosphere of the dorms at Stony Brook without the need to search through Reddit or other online sources.
                </p>
                <Link to={`mailto:brookinns.sbu@gmail.com?subject=Feedback for BrookInns`} className='bg-red-700 text-white text-center p-3 sm:p-4 uppercase rounded-lg hover:opacity-90 flex-1'>
                    Contact Us
                </Link>
            </div>

            {/* Contact cards */}
            <div className='flex flex-col sm:flex-row justify-center items-center sm:space-x-40 mt-10 p-5'>
                <div className='bg-white border-2 border-gray-100 shadow-md hover:shadow-xl transition-shadow rounded-lg flex flex-col max-w-[200px] h-[400px] mb-10 sm:mb-0'>
                    <img src={calvinPhoto} alt='Calvin Chau photo' className='w-full h-3/5 object-cover rounded-t-lg' />
                    <div className='flex flex-col items-center p-4 h-1/2 justify-center text-center'>
                        <p className='text-xl font-bold'>Calvin Chau</p>
                        <p className='text-xs text-gray-600 italic text-center mt-1'>Major: Computer Science</p>
                        <p className='text-gray-600 mt-4'>Socials:</p>
                        <div className='flex space-x-4 mt-2'>
                            {/* Social Icons */}
                            <a href="https://www.linkedin.com/in/calvin-chau-6a1ab3272/" target='_blank' rel='noopener noreferrer' className='text-gray-800 hover:text-gray-300 transition-colors duration-300 ease-in-out'>
                                <FaLinkedin size={24} />
                            </a>
                            <a href="https://github.com/calvin-c13" target='_blank' rel='noopener noreferrer' className='text-gray-800 hover:text-gray-300 transition-colors duration-300 ease-in-out'>
                                <FaGithub size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='bg-white border-2 border-gray-100 shadow-md hover:shadow-xl transition-shadow rounded-lg flex flex-col max-w-[200px] h-[400px] mb-10 sm:mb-0'>
                    <img src={jadePhoto} alt='Jade Fang photo' className='w-full h-3/5 object-cover rounded-t-lg' />
                    <div className='flex flex-col items-center p-4 h-1/2 justify-center text-center'>
                        <p className='text-xl font-bold'>Jade Fang</p>
                        <p className='text-xs text-gray-600 italic text-center mt-1'>Major: Economics & Pol Sci</p>
                        <p className='text-gray-600 mt-4'>Socials:</p>
                        <div className='flex space-x-4 mt-2'>
                            {/* Social Icons */}
                            <a href="https://www.linkedin.com/in/jade-fang-5b41702a6/" target='_blank' rel='noopener noreferrer' className='text-gray-800 hover:text-gray-300 transition-colors duration-300 ease-in-out'>
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='bg-white border-2 border-gray-100 shadow-md hover:shadow-xl transition-shadow rounded-lg flex flex-col max-w-[200px] h-[400px] mb-10 sm:mb-0'>
                    <img src={noPhoto} alt='Jeremy Alleyne photo' className='w-full h-3/5 object-cover rounded-t-lg' />
                    <div className='flex flex-col items-center p-4 h-1/2 justify-center text-center'>
                        <p className='text-xl font-bold'>Jeremy Alleyne</p>
                        <p className='text-xs text-gray-600 italic mt-1'>Major: Accounting (SJU)</p>
                        <p className='text-gray-600 mt-4'>Socials:</p>
                        <div className='flex space-x-4 mt-2'>
                            {/* Social Icons */}
                            <a href="https://www.linkedin.com/in/jeremy-alleyne-b165b3260/" target='_blank' rel='noopener noreferrer' className='text-gray-800 hover:text-gray-300 transition-colors duration-300 ease-in-out'>
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
