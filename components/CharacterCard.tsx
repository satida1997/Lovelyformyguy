
import React from 'react';
import { StarIcon } from './Icons';

interface CharacterCardProps {
  content: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ content }) => {
  // Simple markdown-to-HTML conversion for bolding
  const formatContent = (text: string) => {
    return text
      .split('\n')
      .map((line, index) => {
        if (line.startsWith('**') && line.includes('**')) {
          const parts = line.split('**');
          return (
            <p key={index} className="mb-2">
              <strong className="font-bold text-gray-800 font-fredoka text-lg">{parts[1]}</strong>
              {parts.slice(2).join('**')}
            </p>
          );
        }
        return <p key={index} className="mb-2">{line}</p>;
      })
  };
  
  return (
    <div className="bg-[#FFFFE0] p-6 sm:p-8 rounded-3xl border-4 border-black shadow-[8px_8px_0px_#F59E0B] animate-fade-in-up">
       <div className="flex items-center gap-2 mb-4 border-b-4 border-dashed border-gray-400 pb-2">
        <StarIcon />
        <h2 className="font-fredoka text-2xl text-gray-800">Your Character Idea!</h2>
       </div>
      <div className="prose text-gray-700 max-w-none text-base leading-relaxed">
        {formatContent(content)}
      </div>
    </div>
  );
};

export default CharacterCard;
