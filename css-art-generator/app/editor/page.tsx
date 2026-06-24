import React from 'react';
import HomeButton from '@/components/HomeButton';
import Sidebar from '@/components/Sidebar';

const EditorPage = () => {
  return (
    <div className="flex flex-1 h-[calc(100vh-80px)] overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-12 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-6 text-center">CSS Art Editor</h1>
        <div className="w-full max-w-5xl aspect-video bg-zinc-100 dark:bg-zinc-900 rounded-xl border border-dashed border-zinc-300 dark:border-zinc-700 flex items-center justify-center mb-8">
          <p className="text-zinc-500">Editor Workspace (Coming Soon)</p>
        </div>
        <HomeButton />
      </main>
    </div>
  );
};

export default EditorPage;
