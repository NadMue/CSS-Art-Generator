"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer: React.FC = () => {
  const pathname = usePathname();

  const links = [
    { name: 'Impressum', href: '/impressum' },
    { name: 'Datenschutz', href: '/datenschutz' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <footer className="bg-zinc-800 py-8">
      <nav className="flex justify-center items-center">
        <ul className="flex space-x-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href} 
                className={`transition-colors duration-200 ${
                  isActive(link.href) 
                    ? 'text-pink-500 font-semibold' 
                    : 'text-white hover:text-pink-300'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
