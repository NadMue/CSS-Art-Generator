import React from 'react';

interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`mb-8 ${className}`}>
      <h2 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-zinc-100">{title}</h2>
      {children}
    </div>
  );
};

export default SidebarSection;
