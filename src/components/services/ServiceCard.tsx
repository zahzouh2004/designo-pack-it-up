
import React from 'react';
import { Link } from 'react-router-dom';

type ServiceCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  index: number;
};

const ServiceCard = ({ title, description, imageSrc, link, index }: ServiceCardProps) => {
  // Animation delay based on index
  const animationDelay = `${index * 0.1}s`;

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      style={{ animationDelay }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-designo-brown-dark">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          to={link} 
          className="inline-block text-designo-brown font-medium hover:text-designo-brown-dark"
        >
          المزيد من المعلومات →
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
