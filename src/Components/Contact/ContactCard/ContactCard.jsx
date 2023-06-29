
import React from 'react';

const ContactCard = ({ connect }) => {
  const { bgClass, icon, name, description } = connect;
  return (
    <div>
      <div className='flex gap-4 location-border-set'>
        <div className='cursor-pointer text-sky-300 font-bold text-4xl  lg:text-6xl'>
          {icon}
        </div>
        <div>
          <h3 className='font-bold lg:text-xl'>{name}</h3>
          <p className='text-sm lg:text-base'>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;