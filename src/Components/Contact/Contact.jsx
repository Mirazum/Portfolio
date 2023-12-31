import React, { useRef, useState } from 'react';
import Swal from 'sweetalert2'
import { ImLocation2 } from 'react-icons/im';
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineMailOpen } from 'react-icons/hi';
import '../Common/common.css'
import ContactCard from './ContactCard/ContactCard';

const Contact = () => {

  const [disable, setDisable] = useState(false)
  const form = useRef();
  const headphones = <ImLocation2></ImLocation2>;
  const screenShare = <FiPhoneCall></FiPhoneCall>;
  const Googlemessages = <HiOutlineMailOpen></HiOutlineMailOpen>;

  const servicesData = [
    {
      id: 1,
      name: 'Address',
      description: "Ida Albergintie, Helsinki, Finland",
      icon: headphones,
      bgClass: 'text-sky-300'
    },
    {
      id: 2,
      name: 'Phone No-',
      description: "+358452108004",
      icon: screenShare,
      bgClass: 'text-sky-300'
    },
    {
      id: 3,
      name: 'Email',
      description: "mira.sust@gamil.com",
      icon: Googlemessages,
      bgClass: 'text-primary'
    },
  ]

  const sendEmail = (e) => {
    e.preventDefault();
    setDisable(true)
    // form.reset()
    emailjs.sendForm('service_5neuz9s', 'template_2hctw3l', form.current, 'Hfg-_Qzk46TD4iLLm')
      .then((result) => {
        console.log('object');

        Swal.fire(
          'Your message send successfully✔😃!',
          'You clicked the button!',
          'success'
        )

        setDisable(false)
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div id='Contract' className='lg:my-28 relative lg:py-14'>
      <div className='connect-bg-color h-16 lg:h-32 '>
        {/* bg-set */}
      </div>
      <div className='common-width'>
        <div className=''>
          <div className='text-center mb-10'>
            <h1 className='text-center text-5xl font-semibold py-4'><span className='text-sky-300'>C</span>ontract <span className='text-sky-300'>M</span>e</h1>

          </div>

          {/* projects card  */}
          <div className='contract flex flex-col-reverse md:flex-row gap-6  my-5 pt-9'>
            <div className='w-full'>
              <div className='flex flex-col gap-7 md:gap-20 lg:pt-5 my-9'>
                {
                  servicesData.map(connect => <ContactCard
                    key={connect.id}
                    connect={connect}
                  ></ContactCard>)
                }
              </div>
            </div>

            <div className='w-full '>
              <div className="card email-shadow-set lg:w-3/4 py-5 my-4 lg:my-6 mx-auto">
                <div className='flex items-center flex-col justify-center'>
                  <div className="avatar">

                  </div>
                  <p className='mt-2  text-3xl font-bold'>Send Email</p>
                </div>
                <form ref={form} onSubmit={sendEmail} className="card-body ">
                  <div className="user-box">
                    <input name='user_name' type="text" className="input-1 w-full" required />
                    <label>Your Name</label>
                  </div>
                  <div className="user-box">
                    <input name='user_email' type="email" className="input-2 w-full" required />
                    <label>Your Email</label>

                  </div>
                  <div className="user-box">

                    <textarea name='message' className="input-3 textarea textarea-info p-1 w-full" placeholder='Your massage' required></textarea>
                    {/* <label>Your massage</label> */}
                  </div>
                  <div className="form-control mt-6 send-box">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <input disabled={disable} type="submit" value="Send" className="btn btn-outline btn-info w-full  " />
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;