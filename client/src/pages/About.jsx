import { Link } from 'react-router-dom';
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
                <Link to={`mailto:brookinns.sbu@gmail.com?subject=Feedback for BrookInns`} className='bg-red-700 text-white text-center p-2 sm:p-3 uppercase rounded-lg hover:opacity-95 flex-1'>
                    Contact Us
                </Link>
            </div>

            {/* Contact cards */}
            <div className='bg-white border-2 border-gray-300 shadow-sm hover:shadow-lg transition-shadow rounded-lg flex w-1/2 sm:w-1/2 mt-8'>
                <img src= alt='Calvin Chau photo' className='w-48 h-48 object-cover rounded-lg -ml-0.5' />
                <div className='p-6 flex flex-col justify-center'>
                    <p className='text-2xl font-bold'>Calvin Chau</p>
                    <p className='text-gray-600 italic text-lg'>Major: Computer Science</p>
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
        </div>
    );
}
