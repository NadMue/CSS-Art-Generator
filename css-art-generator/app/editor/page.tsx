import React from 'react';
import HomeButton from '@/components/HomeButton';
import Sidebar from '@/components/Sidebar';
import Canvas from '@/components/Canvas';

const EditorPage = () => {
  return (
    <div className="flex flex-1 h-[calc(100vh-80px)] overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-12 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-6 text-center">CSS Art Editor</h1>
        <Canvas />
        <div className="mt-8">
          <HomeButton />
        </div>
      </main>
    </div>
  );
};

export default EditorPage;
