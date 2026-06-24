'use client';

import React from 'react';
import Button from './Button';
import SidebarSection from './SidebarSection';
import {useEditorStore} from '@/store/useEditorStore';

const Sidebar: React.FC = () => {
  const { layers, selectedLayerId, selectLayer, addLayer } = useEditorStore();

  return (
    <aside className="w-64 bg-zinc-50 dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 h-screen flex flex-col p-4 gap-4 overflow-y-auto justify-between">
      <SidebarSection title="Layers">
        <div className="grid grid-cols-2 gap-2 mb-4">
          <Button variant="outline" className="text-xs" onClick={() => addLayer('circle')}>
            + Circle
          </Button>
          <Button variant="outline" className="text-xs" onClick={() => addLayer('square')}>
            + Square
          </Button>
          <Button variant="outline" className="text-xs" onClick={() => addLayer('rectangle')}>
            + Rect
          </Button>
          <Button variant="outline" className="text-xs" onClick={() => addLayer('triangle')}>
            + Triangle
          </Button>
        </div>
        <div className="space-y-2">
          {layers.map((layer) => (
            <div
              key={layer.id}
              onClick={() => selectLayer(layer.id)}
              className={`p-2 border rounded-md text-sm cursor-pointer transition-colors ${
                selectedLayerId === layer.id
                  ? 'bg-pink-100 border-pink-500 dark:bg-pink-900/30 dark:border-pink-500'
                  : 'bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700'
              }`}
            >
              {layer.name}
            </div>
          ))}
          {layers.length === 0 && (
            <p className="text-xs text-zinc-500 text-center py-4">No layers added yet</p>
          )}
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
