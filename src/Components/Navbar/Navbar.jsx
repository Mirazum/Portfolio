import { Button, Element, Events, animateScroll as scroll, scrollSpy, scroller, Link } from 'react-scroll'
import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/logo.png"
import { useEffect, useState } from 'react';
import '../Navbar/Navbar.css'


const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localtheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute("data-theme", localtheme);
  }, [theme])

  const handelToggle = (e) => {
    if (e.target.checked) {
      setTheme('corporate');
    } else {
      setTheme('dark');
    }

  }
  const navigate = useNavigate();
  const home = () => {
    navigate('/')
  }
  //   const Projects =() => {
  //     navigate('Projects')
  //   }
  //   const Skills =() => {
  //     navigate('/')
  //   }
  const listItems =
    <>
      <li><Link onClick={home} className='font-semibold link-1 cursor-pointer active' spy={true} to="Banner" smooth={true} activeClass='activeClass'>Home</Link></li>
      <li><Link onClick={home} className='font-semibold cursor-pointer link-2' spy={true} to="Services" smooth={true} >Services</Link></li>
      <li><Link onClick={home} className='font-semibold cursor-pointer link-3' spy={true} to="Projects" smooth={true} >Projects</Link></li>
      <li><Link onClick={home} className='font-semibold cursor-pointer  link-4' spy={true} to="Skills" smooth={true} >Skills</Link></li>
      <li><Link onClick={home} className='font-semibold cursor-pointer link-5' spy={true} to="Contract" smooth={true} >Contract</Link></li>

    </>
  return (
    <div id="Navbar" className=' fixed top-0 left-0 right-0 z-50 '>
      <div className='bg-base-200 shadow-lg '>
        <div className='common-width'>
          <div className="navbar mira">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu2 menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  {listItems}
                </ul>
              </div>
              <Link className="nav-logo btn btn-ghost normal-case text-xl" onClick={home} spy={true} to="Banner" smooth={true}>
                <img className='w-14 h-12' src={Logo} alt="" />
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex ">
              <ul className=" menu2 menu-horizontal px-3 gap-6">
                {listItems}
              </ul>
            </div>
            <label className="swap swap-rotate px-10 mx-2">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox"
                onChange={handelToggle}
                checked={theme === "dark" ? false : true}
              />

              {/* sun icon */}
              <svg
                className="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
            <div className="navbar-end">
              <a target='blank' href='https://www.linkedin.com/in/mirazum-parvin-6a08ba130/' className="read-btn text-white shadow-xl">Hire Me</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;



