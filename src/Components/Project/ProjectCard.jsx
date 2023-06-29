import React, { useState } from 'react';
import '../../Components/Common/Common.css';
import './ProjectCard.css';

const ProjectCard = ({ img, title, d0, d1, glink, slink, llink }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleToggleDescription = () => {
    setShowFullDescription((prevValue) => !prevValue);
  };

  return (
    <div className="card-b border-b-8 border-b-green-500 w-full shadow-xl">
      <figure className='flex items-center justify-center'>
        <img src={img} className="card-image w-64 h-52 rounded-xl " alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{d0}</p>
        <hr />
        <div className='w-full '>
          <p className="text-gray-400 ">
            {showFullDescription ? d1 : (d1?.substring(0, 100) + (d1?.length > 100 ? '...' : ''))}
            {d1?.length > 100 && (
              <span onClick={handleToggleDescription} className="cursor-pointer">
                <button className="read-btn font-semibold">{showFullDescription ? 'Read less' : 'Read more'}</button>
              </span>
            )}

          </p>
        </div>
        <hr />
        <div className="card-actions mt-3 ">
          <div className="badge badge-primary p-2">
            <a href={glink}><span className='text-bold'>Client Side</span></a>
          </div>
          <div className="badge badge-accent p-2">
            <a href={slink}>Server Side</a>
          </div>
          <div className="badge badge-secondary p-2">
            <a href={llink}>Live Site</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
