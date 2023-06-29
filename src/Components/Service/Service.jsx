import React from 'react';
import '../Common/Common.css';
import { FaCode } from 'react-icons/fa';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ServiceCard from './ServiceCard';


const Services = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  const screenShare = <FaCode></FaCode>;
  const data = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
  </svg>

  const servicesData = [

    {
      id: 1,
      name: 'Web Development',
      description: 'As a web developer primary responsibility is to create and maintain websites and web applications with clients or organizations to understand their needs and translate them into functional and visually appealing digital experiences. This involves designing and coding the user interface, handling server-side programming and database management, integrating various technologies and APIs, and ensuring the smooth functioning of websites or applications across different devices and browsers.',
      icon: screenShare,
      bgClass: 'text-sky-300'
    },
    {
      id: 2,
      name: 'Data Analyst',
      description: "As a data analyst, primary role is to collect, analyze, and interpret data to provide valuable insights that drive informed decision-making.  Using tools and programming languages such as Excel, Python, R, or SQL to manipulate and analyze data sets, perform descriptive statistics, create visualizations, and build predictive models. I am able to translate complex data into actionable insights helps businesses and organizations make data-driven decisions, optimize processes, identify opportunities, and solve problems. .",
      icon: data,
      bgClass: 'text-sky-300'
    },
  ]
  return (
    <div id='Services' className='common-width '>
      <div className='pt-32 lg:pt-2'>
        <div className='text-center'>
          <h1 className='text-center text-5xl font-semibold py-10'><span className='text-sky-300'>M</span>y Serv<span className='text-sky-300'>i</span>ces</h1>
          <p className='md:w-3/4 mx-auto mb-2'> By combining my proficiency in both web development and data analysis, I offer a unique skill set that brings immense value to any project or organization. I am not merely limited to developing beautiful websites, but I can also harness the power of data to enhance user experiences, improve business processes, and drive growth.</p>
        </div>

        {/* projects card  */}
        <div className=' md:flex items-center justify-center gap-8 lg:gap-10 pt-8 pb-3'>

          {
            servicesData.map(card => <ServiceCard
              key={card.id}
              card={card}
            ></ServiceCard>)
          }

        </div>
      </div>
    </div>
  );
};

export default Services;

