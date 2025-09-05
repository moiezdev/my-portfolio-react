import React from 'react';
import Button from './Button';

const Card = ({ title, description, techStack, liveLink, image, altText }) => {
  return (
    <div className="border border-gray-a hover:shadow-lg transition-shadow duration-300">
      {image ? (
        <div className="relative border-b border-gray-a">
          <img src={image} alt={altText || title} className="w-full h-40 object-cover" />
        </div>
      ) : null}
      <div>
        <p className="border-b border-gray-a text-gray-400 p-[8px] flex flex-wrap gap-[8px]">
          {techStack &&
            techStack.map((item, idx) => (
              <span className="px-2.5 py-0.5 bg-gray-a/20" key={idx}>
                {item}
              </span>
            ))}
        </p>
        <div className="flex flex-col gap-[16px] p-[16px]">
          <h2 className="text-large font-semibold text-white">{title}</h2>
          <p className="">{description}</p>
          <div className="flex gap-[16px]">
            {liveLink && (
              <Button onClick={() => window.open(liveLink, '_blank')} primary={true}>
                {'Live <~>'}
              </Button>
            )}
            {liveLink && (
              <Button onClick={() => window.open(liveLink, '_blank')}>{'Cached >='}</Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
