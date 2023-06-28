import React from 'react';
import "../Common/Common.css";

const ConnectCard = ({ connect }) => {
  const { bgClass, icon, name, description } = connect;
  console.log(connect)
  return (
    <div className='flex gap-4 location-border-set'>
      <div className='cursor-pointer text-primary font-bold text-4xl  lg:text-6xl'>
        {icon}
      </div>
      <div>
        <h3 className='font-bold lg:text-xl'>{name}</h3>
        <p className='text-sm lg:text-base'>{description}</p>
      </div>
    </div>
  );
};

export default ConnectCard;