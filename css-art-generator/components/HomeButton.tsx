import React from 'react';
import Link from 'next/link';

interface HomeButtonProps {
  label?: string;
  href?: string;
}

const HomeButton: React.FC<HomeButtonProps> = ({ 
  label = "zurück zur Startseite", 
  href = "/" 
}) => {
  return (
    <Link 
      href={href}
      className="inline-block px-6 py-3 rounded-full font-semibold text-white transition-transform hover:scale-105 active:scale-95 shadow-lg bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500"
    >
      {label}
    </Link>
  );
};

export default HomeButton;
