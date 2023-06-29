import '../../Components/Common/Common.css';

import lego from "../../assets/projects/lego.png"
import yoga from "../../assets/projects/summer_camp.png"
import auto from "../../assets/projects/auto-mobile.png"
import ProjectCard from "./ProjectCard";


const Projects = () => {
  return (
    <div id='Projects' className="px-2 lg:px-0 pb-12 pt-24 my-24 mx-auto" style={{ width: '80%' }}>
      <div className='text-center'>
        <h1 className='text-center text-4xl lg:text-5xl font-semibold py-10'>MY <span className='text-sky-300'>PROJECTS</span></h1>
        <p className='md:w-3/4 mx-auto text-center mb-2'>The Integrated Data Analysis and Web Development Project aims to deliver a powerful and user-friendly platform that allows users to explore and interact with valuable data insights. By combining the strengths of data analysis and web development, this project provides an integrated solution that empowers decision-making, facilitates data-driven discoveries, and enhances the accessibility of complex information..</p>
      </div>

      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-9">
          <ProjectCard
            title={`Toy Marketplace website`}
            img={lego}
            d0={`🕵️‍♀️Technology Used: React, React Bootstrap, Firebase, Node.js`}
            d1={`Developed an engaging and user-friendly full-stack project, "Toy Market Place," featuring MongoDB for efficient data storage and retrieval, and Firebase for secure authentication. Seamlessly integrated Firebase authentication for user access management. `}

            glink={`https://github.com/Mirazum/Toy-World-Client`}
            slink={`https://github.com/Mirazum/Toy-World-Server-Side`}
            llink={`https://toy-marketplace-cc713.web.app/`}
          />

          <ProjectCard
            title={`Yoga Class website`}
            img={yoga}
            d0={`🕵️‍♀️Technology Used: React, Tailwind CSS, Firebase, DaisyUI, Node.js`}
            d1={`Developed a responsive full-stack web application, "Summer-camp," featuring admin, instructor, and student dashboards. Utilized Express.js for the backend, MongoDB for database management, and integrated Stripe for secure payment processing. Implemented Firebase authentication for seamless user authentication and access control. Showcased expertise in creating an intuitive and device-friendly website with a focus on functionality, scalability, and user experience.`}

            glink={`https://github.com/Mirazum/Summer-Camp-client`}
            slink={`https://github.com/Mirazum/Summer-Camp-Server`}
            llink={`https://summer-camp-1fddc.web.app/`}
          />
          <ProjectCard
            title={`Auto-moblie price analycis`}
            img={auto}
            d0={`🕵️‍♀️Technology Used: python`}
            d1={`Perform an initial exploration of the dataset to gain insights and understand the data's characteristics. This step involves summarizing the data using descriptive statistics, visualizing the variables through histograms, scatter plots, or box plots, and identifying patterns, trends, or relationships within the data. Create new features or modify existing ones to improve the dataset's representation. This can involve techniques like scaling, normalization, one-hot encoding, or creating interaction variables. Feature engineering aims to enhance the predictive power of the dataset.`}


          />
        </div>
      </div>
    </div>
  );
}

export default Projects;



