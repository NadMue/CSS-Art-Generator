'use client';

import React from 'react';
import {useEditorStore} from '@/store/useEditorStore';

const Canvas: React.FC = () => {
  const { layers, selectedLayerId, selectLayer, updateLayer } = useEditorStore();

  const handleMouseDown = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    selectLayer(id);

    const layer = layers.find((l) => l.id === id);
    if (!layer) return;

    const startX = e.clientX;
    const startY = e.clientY;
    const initialX = layer.x;
    const initialY = layer.y;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const dx = moveEvent.clientX - startX;
      const dy = moveEvent.clientY - startY;
      
      const newX = initialX + dx;
      const newY = initialY + dy;
      
      updateLayer(id, { x: newX, y: newY });
    };

    const handleMouseUp = () => {
      globalThis.removeEventListener('mousemove', handleMouseMove);
      globalThis.removeEventListener('mouseup', handleMouseUp);
    };

    globalThis.addEventListener('mousemove', handleMouseMove);
    globalThis.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div 
      className="w-full max-w-5xl aspect-video bg-white dark:bg-zinc-900 rounded-xl border border-zinc-300 dark:border-zinc-700 relative overflow-hidden shadow-inner cursor-crosshair"
      onClick={() => selectLayer(null)}
    >
      {layers.map((layer) => (
        <div
          key={layer.id}
          onMouseDown={(e) => handleMouseDown(layer.id, e)}
          style={{
            position: 'absolute',
            left: `${layer.x}px`,
            top: `${layer.y}px`,
            width: `${layer.width}px`,
            height: `${layer.height}px`,
            cursor: 'move',
          }}
          className="layer-container"
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: layer.color,
              borderRadius: layer.borderRadius,
              border: selectedLayerId === layer.id ? '2px solid blue' : '2px solid black',
              clipPath: layer.type === 'triangle'
                ? 'polygon(50% 0%, 0% 100%, 100% 100%)'
                : undefined,
              outline: selectedLayerId === layer.id ? '2px solid blue' : 'none',
              transition: 'outline 0.1s ease-in-out',
            }}
          />
          {layer.type === 'triangle' && (
            <svg
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
              }}
            >
              <polygon
                points={`${layer.width / 2},0 0,${layer.height} ${layer.width},${layer.height}`}
                fill="none"
                stroke={selectedLayerId === layer.id ? 'blue' : 'black'}
                strokeWidth={selectedLayerId === layer.id ? '4' : '2'}
              />
            </svg>
          )}
        </div>
      ))}
      
      {layers.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <p className="text-zinc-400">Add a layer from the sidebar to start</p>
        </div>
      )}
    </div>
  );
};

export default Canvas;
