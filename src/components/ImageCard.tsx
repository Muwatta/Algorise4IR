import React from 'react';

type ImageCardProps = {
  images: { id: number; src: string; title: string }[];
};

const ImageCard: React.FC<ImageCardProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-4">
      {images.map(image => (
        <div
          key={image.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
        >
          <img
            src={image.src}
            alt={image.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">{image.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageCard;
