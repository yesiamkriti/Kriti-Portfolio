import React, { useState, useEffect } from 'react';

const ProfileImage = () => {
  const images = [
  './images/kritiprofile1.jpg',
  './images/kritiprofile1.jpg',
  './images/kritiprofile1.jpg',
    // Add more images as needed
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [images.length]);

  const containerStyle = {
    perspective: '1000px',
    width: '400px',
    height: '400px',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    transform: 'rotateY(360deg)',
    transition: 'transform 0.6s ease-in-out',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    objectFit: 'cover',
  };

  const hoverStyle = {
    transform: 'rotateY(0deg) rotateX(0deg) scale(1.05)',
  };

  return (
    <div style={containerStyle} className='sm:block {w-[400], h-[400]'>
      <img
        src={images[currentImageIndex]}
        alt="Profile"
        style={{
          ...imageStyle,
          ...(currentImageIndex % 2 === 0 ? hoverStyle : {}),
        }}
      />
    </div>
  );
};

export default ProfileImage;
