import React from 'react';

interface HeroSectionProps {
  title: string;
  description: string;
  image: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description, image }) => {
  return (
    <section className="relative w-full h-96 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      />
      
      {/* Overlay for better text readability (optional but recommended) */}
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto h-full flex items-center justify-end px-6 md:px-12">
        <div className="max-w-xl text-right text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            {title}
          </h1>
          <p className="text-lg md:text-xl drop-shadow-md">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
