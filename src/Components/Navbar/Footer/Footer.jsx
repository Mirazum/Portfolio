import { FaFacebookF,FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineArrowUp } from 'react-icons/ai';
import "./Footer.css";

import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate =useNavigate();
  const home =() => {
    navigate('/')
  }
  return (
    <div className='bg-base-300'>
      <div className='flex flex-col items-center justify-center relative'>
        <div className='py-8  '>
          <div className='social-icon flex gap-6'>
            <div className='absolute top-8 right-3 lg:right-10' >
            <li className='list-none'><Link onClick={home} className='font-semibold link-4' spy={true} to="Banner" smooth={true} ><AiOutlineArrowUp></AiOutlineArrowUp></Link></li>
            </div>
            <a className='icon-1' target="blank" href='https://www.facebook.com/mirazum.parvin'><FaFacebookF></FaFacebookF></a>
            <a className='icon-2' target="blank" href='https://www.linkedin.com/in/mirazum-parvin-6a08ba130/'><FaLinkedinIn></FaLinkedinIn></a>
            <a className='icon-3' target="blank" href='https://github.com/Mirazum?tab=repositories'><FaGithub></FaGithub></a>
            

            
          </div>
        </div>
        <div className='w-full flex items-center'>
          <p className='text-center footer-border-set w-full py-5 text-sm md:text-base'>© Copyright 2023 Mirazum Parvin</p>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;



