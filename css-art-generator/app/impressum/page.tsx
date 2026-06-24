import React from 'react';
import HomeButton from '@/components/HomeButton';

const ImpressumPage = () => {
  const content = {
    title: "Impressum",
    description: "Hier finden Sie alle rechtlichen Informationen über den Betreiber dieser Website. Wir sind stets bemüht, die Richtigkeit unserer Angaben zu gewährleisten."
  };

  return (
    <main className="flex-1 container mx-auto py-12 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{content.title}</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          {content.description}
        </p>
        <HomeButton />
      </div>
    </main>
  );
};

export default ImpressumPage;
