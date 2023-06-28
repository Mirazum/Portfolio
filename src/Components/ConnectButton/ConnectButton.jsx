
import {  Link } from 'react-scroll'


const ConnectButton = () => {
  return (
    <Link className='font-semibold link-4' spy={true} to="Contract" smooth={true} >Contract Me</Link>
  );
};

export default ConnectButton;