import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import ConnectButton from '../ConnectButton/ConnectButton';
import '../../index.css'
import img from '../../assets/mira.png'
import './Banner.css'


const Banner = () => {


  return (
    <div id='Banner' className=' mt-20'>
      <div className='main-bg'>
        <div className='common-width flex flex-col-reverse items-center justify-center md:flex-row h-auto  lg:-h-screen'>
          <div className='w-full'>
            <h1 className='banner-fast-header-1 p-2 text-2xl lg:text-3xl lg:pt-32 lg:pb-4 font-bold'>Hello, This is</h1>
            <h1 className='banner-name p-3 text-3xl lg:text-4xl  lg:pb-4 font-bold'><span className='text-sky-300'><Typewriter
              words={['Mirazum Parvin']}

              cursor
              cursorStyle='_'
              typeSpeed={60}
              deleteSpeed={50}
              delaySpeed={1000}

            /></span></h1>
            <h1 className='banner-fast-header-2 p-2 text-2xl lg:text-3xl font-semibold'><span className='mr-2 font-semibold'>And I</span>
              <span className='text-sky-300'>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={["Bringing Designs to Life, One Line of Code at a Time"]}
                  loop={100}
                  cursor
                  cursorStyle='_'
                  typeSpeed={60}
                  deleteSpeed={50}
                  delaySpeed={1000}

                />
              </span>
            </h1>
            <p className='p-3 only:py-4 banner lg:mt-4 text-xl'>Transforming designs into digital wonders, frontend developers weave code with visual splendors.</p>
            <div className='social-icon flex gap-6 py-3'>
              <a className='icon p-2 ms-3  rounded-full ring ring-sky-300 ring-offset-base-100 ring-offset-2 border-sky-300' target="blank" href='https://www.facebook.com/mirazum.parvin'><FaFacebookF></FaFacebookF></a>
              <a className='icon p-2  rounded-full ring ring-sky-300 ring-offset-base-100 ring-offset-2' target="blank" href='https://www.linkedin.com/in/mirazum-parvin-6a08ba130/'><FaLinkedinIn></FaLinkedinIn></a>
              <a className='icon p-2  rounded-full ring ring-sky-300 ring-offset-base-100 ring-offset-2' target="blank" href='https://github.com/Mirazum?tab=repositories'><FaGithub></FaGithub></a>

            </div>
            <div className='w-full p-3 button-box flex items-center flex-col md:flex-row pt-9 gap-5 lg:pr-32'>
              <div className='w-full'>
                <a href='https://drive.google.com/file/d/1cG5CsfHlbFLJe-7V6bMeXDLCDu5l94W5/view?usp=sharing' target='blank'>
                  <button className='button w-full font-semibold py-1 lg:py-2 md:text-xl '>My CV</button>
                </a>
              </div>
              <div className='w-full'>
                <button className='button w-full font-semibold py-1 lg:py-2 md:text-xl '><ConnectButton></ConnectButton></button>

              </div>
            </div>
          </div>
          <div className='w-full relative'>

            <div className='shadow-set banner-img relative'>
              <div className='absolute img-bg-overlay-set w-full h-full '></div>
              <div className='banner-blur'>
                {/* blur background */}
              </div >
              <div className='flex items-center justify-center'>
                <img className='w-96 h-96 md:mt-5 md:ms-12 rounded-full  border-2 border-sky-300' src={img} alt="" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;


