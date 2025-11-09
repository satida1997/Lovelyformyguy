
import React from 'react';
import { BookOpenIcon } from './Icons';

const Header: React.FC = () => {
  return (
    <header className="text-center mb-8 sm:mb-12">
      <div className="inline-block bg-white p-4 rounded-2xl border-4 border-black shadow-[8px_8px_0px_#1F2937]">
        <h1 className="font-fredoka text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#5f9dff] to-[#7bb0ff] flex items-center gap-3">
          <BookOpenIcon className="h-10 w-10 text-[#87CEEB]" />
          Phonics Learning Fun
        </h1>
      </div>
    </header>
  );
};

export default Header;
