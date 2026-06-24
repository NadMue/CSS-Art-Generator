import React from 'react';
import Button from './Button';
import SidebarSection from './SidebarSection';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-zinc-50 dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 h-screen flex flex-col p-4 gap-4 overflow-y-auto justify-between">
      <SidebarSection title="Layers">
        <Button fullWidth className="mb-4">
          <span>+</span> Add New Layer
        </Button>
        <div className="space-y-2">
          <div className="p-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md text-sm cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-700">
            Layer 1 (Circle)
          </div>
          <div className="p-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md text-sm cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-700">
            Layer 2 (Square)
          </div>
        </div>
      </SidebarSection>

      <SidebarSection title="Mode Choice">
        <div className="grid grid-cols-2 gap-2">
          <Button variant="secondary" className="text-xs py-2 px-3">
            Editor
          </Button>
          <Button variant="outline" className="text-xs py-2 px-3">
            Preview
          </Button>
        </div>
      </SidebarSection>

      <SidebarSection title="Presets" className="flex-1">
        <div className="grid grid-cols-2 gap-3">
          <div className="aspect-square bg-zinc-200 dark:bg-zinc-800 rounded-lg cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center text-[10px] text-center p-1">
            Sunset Gradient
          </div>
          <div className="aspect-square bg-zinc-200 dark:bg-zinc-800 rounded-lg cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center text-[10px] text-center p-1">
            Abstract Shape
          </div>
          <div className="aspect-square bg-zinc-200 dark:bg-zinc-800 rounded-lg cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center text-[10px] text-center p-1">
            Pattern 1
          </div>
          <div className="aspect-square bg-zinc-200 dark:bg-zinc-800 rounded-lg cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center text-[10px] text-center p-1">
            Portrait Base
          </div>
        </div>
      </SidebarSection>
    </aside>
  );
};

export default Sidebar;
